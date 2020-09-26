import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'main',
  initialState: {},
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
  },
});

export const { reducer, actions } = slice;
