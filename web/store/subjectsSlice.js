import { createSelector, createSlice } from '@reduxjs/toolkit';
import { sortSubjectsByLimits } from '../utils';
import { profilesByClusterSelector } from './profilesSlice';

const slice = createSlice({
  name: 'subjects',
  initialState: {},
  reducers: {},
});

export const selectSubjects = (state) => state.subjects;

export const subjectsByClusterSelector = createSelector(
  (state) => state.common.selectedCluster,
  selectSubjects,
  (clusterId, subjects) => {
    return subjects.filter((i) => {
      if (clusterId === 0) return subjects;
      return i.cluster_id === clusterId;
    });
  }
);

export const subjectsByTeacherSelector = createSelector(
  (state) => state.common.modalState.data.teacherId,
  selectSubjects,
  (teacherId, subjects) => {
    return subjects.filter((i) => {
      const id = _.toNumber(teacherId);
      if (id === 0) return subjects;
      return i.teacher_id === id;
    });
  }
);

export const selectSubjectsSortedByProfileLimits = createSelector(
  profilesByClusterSelector,
  (profiles) => {
    const subjectIds = sortSubjectsByLimits(profiles);
    return subjectIds.map((id) => profiles.find((i) => i.subject_id === id));
  }
);

export const { reducer, actions } = slice;
