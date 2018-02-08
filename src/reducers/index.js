import { combineReducers } from 'redux';
import todos from './todos';
import { filter } from './filter';
import { categories } from './categories';
// import { fetchTodos } from './fetch';

export const todoReducers = combineReducers({
    todos,
    filter,
    categories,
    // fetchTodos
});
