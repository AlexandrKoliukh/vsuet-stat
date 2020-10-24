import { createSelector, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { getAverageByMarks } from '../utils';

const slice = createSlice({
  name: 'profiles',
  initialState: {},
  reducers: {
    addProfile: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const profilesByTeacherSelector = createSelector(
  (state) => state.profiles,
  (state) => state.common.modalState.data.teacherId,

  (profiles, teacherId) => {
    return profiles.filter((p) => {
      return p.teacher_id === teacherId;
    });
  }
);

export const profilesByClusterSelector = createSelector(
  (state) => state.common.selectedCluster,
  (state) => state.profiles,
  (clusterId, profiles) => {
    if (clusterId === 0) return profiles;

    return profiles.filter((p) => {
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
    const byTeacher = _.groupBy(profiles, 'teacher.id');
    const result = _.mapValues(byTeacher, (teacherProfiles) => {
      const { averageMarks, common } = getAverageByMarks(teacherProfiles);
      return { ...averageMarks, average: common };
    });
    return result;
  }
);

export const averageMarksByClusterSelector = createSelector(
  profilesByClusterSelector,
  getAverageByMarks
);

export const averageByAllSelector = createSelector(
  (state) => state.profiles,
  getAverageByMarks
);

export const { reducer, actions } = slice;
