import 'bootstrap/dist/css/bootstrap.min.css';
import gon from 'gon';
import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { App } from './App';

const { profiles, subjects, teachers } = gon;
console.log(profiles, subjects, teachers);

const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {},
  preloadedState: {
    profiles,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
