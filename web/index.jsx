import 'bootstrap/dist/css/bootstrap.min.css';
import gon from 'gon';
import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { App } from './App';
import { actions, reducer } from './store';
import io from 'socket.io-client';

const { profiles, subjects, teachers } = gon;

const store = configureStore({
  reducer,
  preloadedState: {
    profiles,
    subjects,
    teachers,
  },
});

io().on('newProfile', ({ data }) => store.dispatch(actions.addProfile(data)));

ReactDOM.render(
  <Provider store={store}>
    <div className="p-2">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
