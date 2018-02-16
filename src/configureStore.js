import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducers } from './reducers';

const loggerMiddleware = createLogger();

export const configureStore = createStore(
    todoReducers,
    composeWithDevTools(applyMiddleware(thunk))
);