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
    )
);