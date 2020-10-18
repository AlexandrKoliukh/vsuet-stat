import { createSelector, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { marks } from './constants';

const slice = createSlice({
  name: 'main',
  initialState: {},
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
  },
});

export const averageMarksByTeacherSelector = createSelector(
  (state) => state.profiles,
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
          const mark = _.sumBy(profiles, markName) / profiles.length;
          return { ...acc, [markName]: mark.toFixed(2) };
        }, {});
        result[teacher] = averageMarks;
      });
    });

    return result;
  }
);

export const { reducer, actions } = slice;
