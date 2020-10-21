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

export const { reducer, actions } = slice;
