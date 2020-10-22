import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'common',
  initialState: {
    selectedCluster: 0,
    modalState: {
      type: null,
      data: {},
    },
  },
  reducers: {
    selectCluster: (state, action) => {
      state.selectedCluster = action.payload;
    },
    showModal: (state, action) => {
      const { type, data = {} } = action.payload;
      state.modalState = { type, data };
    },
    hideModal: (state) => {
      state.modalState = {
        type: null,
        data: {},
      };
    },
  },
});

export const { reducer, actions } = slice;
