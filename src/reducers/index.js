import { combineReducers } from 'redux';
import todos from './todos';
import { filter } from './filter';
import { categories } from './categories';

export const todoApp = combineReducers({
    todos,
    filter,
    categories
});
