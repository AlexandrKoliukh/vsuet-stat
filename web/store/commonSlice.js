import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'common',
  initialState: {
    selectedCluster: 1,
  },
  reducers: {
    selectCluster: (state, action) => {
      state.selectedCluster = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
