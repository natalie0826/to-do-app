import { combineReducers } from 'redux';
import todos from './todos';
import { filter } from './filter';
import { categories } from './categories';
import { loading } from './loading';

export const todoReducers = combineReducers({
    loading,
    todos,
    filter,
    categories
});
