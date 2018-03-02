import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducers } from './reducers';

export const configureStore = createStore(
    todoReducers,
    composeWithDevTools(applyMiddleware(thunk)),
);
