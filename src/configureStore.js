import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { todoReducers } from './reducers';

const loggerMiddleware = createLogger();

export const configureStore = createStore(
    todoReducers,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);