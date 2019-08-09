import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import './style/index.scss'
import App from './components/App'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers'

import createSagaMiddleware from 'redux-saga'
import {rootsaga } from './store/saga'

export const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootsaga);
render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

