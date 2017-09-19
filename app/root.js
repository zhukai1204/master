/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import rootSaga from './sagas/index';
import App from './containers/app';

//import React, { Component } from 'react';
//import App from './containers/app';

const store = configureStore();

// run root saga
store.runSaga(rootSaga);

const Dstj = () =>
  (<Provider store={store}>
    <App />
  </Provider>);

export default Dstj;

