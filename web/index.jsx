import 'bootstrap/dist/css/bootstrap.min.css';
import gon from 'gon';
import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { App } from './App';

const { profiles } = gon;

console.log(profiles);
const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {},
  preloadedState: {},
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
