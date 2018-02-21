import { combineReducers } from 'redux';
import todos from './todos';
import { filter } from './filter';
import { categories } from './categories';

export const todoReducers = combineReducers({
    todos,
    filter,
    categories
});
