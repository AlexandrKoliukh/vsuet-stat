import { createSelector, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { marks } from '../constants';
import { getAverage } from '../utils';

const slice = createSlice({
  name: 'profiles',
  initialState: {},
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
  },
});

export const profilesByClusterSelector = createSelector(
  (state) => state.common.selectedCluster,
  (state) => state.profiles,
  (clusterId, profiles) => {
    return profiles.filter((p) => {
      if (clusterId === 0) return profiles;
      return p.subject.cluster_id === clusterId;
    });
  }
);

export const profilesGroupedByCluster = createSelector(
  (state) => state.profiles,
  (profiles) => {
    return _.groupBy(profiles, 'subject.cluster_id');
  }
);

export const averageMarksByTeacherSelector = createSelector(
  profilesByClusterSelector,
  (profiles) => {
    const data = profiles.map((p) => {
      const marksKeys = _.keys(marks);
      const markValues = _.keys(p)
        .filter((key) => marksKeys.includes(key))
        .map((i) => p[i]);
      const average = (_.sum(markValues) / marksKeys.length).toFixed(2);
      return { ...p, average: _.toNumber(average) };
    });

    const byTeacher = _.groupBy(data, 'teacher.id');

    const groupedByTeacher = _.mapValues(byTeacher, (i) =>
      _.groupBy(i, 'subject.name')
    );

    const result = {};
    const teachers = _.keys(groupedByTeacher);

    teachers.forEach((teacher) => {
      const subjects = groupedByTeacher[teacher];

      _.keys(subjects).forEach((subject) => {
        const profiles = subjects[subject];
        const q = [..._.keys(marks), 'average'];
        const averageMarks = q.reduce((acc, markName) => {
          const mark = getAverage(profiles, markName);
          return { ...acc, [markName]: mark };
        }, {});
        result[teacher] = averageMarks;
      });
    });

    return result;
  }
);

const getAverageByMarks = (profiles) => {
  const averageMarks = {};

  _.keys(marks).forEach((markName) => {
    averageMarks[markName] = getAverage(profiles, markName);
  });

  const common = (
    _.toNumber(_.sum(_.values(averageMarks).map(_.toNumber))) /
    _.keys(marks).length
  ).toFixed(2);

  return { averageMarks, common };
};

export const averageMarksByClusterSelector = createSelector(
  profilesByClusterSelector,
  getAverageByMarks
);

export const averageByClustersSelector = createSelector(
  (state) => state.profiles,
  (profiles) => {
    return getAverageByMarks(profiles);
  }
);

export const { reducer, actions } = slice;
