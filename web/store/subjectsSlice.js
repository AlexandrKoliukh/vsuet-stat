import { createSelector, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'subjects',
  initialState: {},
  reducers: {},
});

export const subjectsByClusterSelector = createSelector(
  (state) => state.common.selectedCluster,
  (state) => state.subjects,
  (clusterId, subjects) => {
    return subjects.filter((i) => {
      if (clusterId === 0) return subjects;
      return i.cluster_id === clusterId;
    });
  }
);

export const subjectsByTeacherSelector = createSelector(
  (state) => state.common.modalState.data.teacherId,
  (state) => state.subjects,
  (teacherId, subjects) => {
    return subjects.filter((i) => {
      const id = _.toNumber(teacherId);
      if (id === 0) return subjects;
      return i.teacher_id === id;
    });
  }
);

export const { reducer, actions } = slice;
