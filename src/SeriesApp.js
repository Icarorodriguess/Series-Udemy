import React from 'react';
import Router from './Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import devToolsEnhacer from 'remote-redux-devtools';

const store = createStore(rootReducer, devToolsEnhacer())

const SeriesApp = prop => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default SeriesApp;