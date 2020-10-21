import 'bootstrap/dist/css/bootstrap.min.css';
import gon from 'gon';
import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { App } from './App';
import io from 'socket.io-client';
import { reducers } from './store';
import { actions as profilesActions } from './store/profilesSlice';

const { profiles, subjects, teachers, clusters } = gon;

const store = configureStore({
  reducer: {
    ...reducers,
  },
  preloadedState: {
    profiles,
    subjects,
    teachers,
    clusters,
  },
});

io().on('newProfile', ({ data }) =>
  store.dispatch(profilesActions.addProfile(data))
);

ReactDOM.render(
  <Provider store={store}>
    <div className="p-2">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
