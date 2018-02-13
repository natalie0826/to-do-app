// actions call reducers
import fetch from 'isomorphic-fetch';
import uuidv4 from 'uuid/v4';

import { constants } from './constants';

export const addTodo = (text, category, description, completed, deleted) => ({
    type: constants.ADD_TODO,
    id: uuidv4(),
    text,
    category,
    description,
    completed,
    deleted
});

export const editTodo = (id, text, category, description) => ({
    type: constants.EDIT_TODO,
    id,
    text,
    category,
    description
});

export const deleteTodo = (id) => ({
    type: constants.DELETE_TODO,
    id
});

export const toggleTodo = (id, completed) => ({
    type: constants.TOGGLE_TODO,
    id,
    completed
});

export const requestTodos = () => ({
    type: constants.REQUEST_TODOS
});

export const fetchTodos = () => {
    return (dispatch) => {
        return fetch('https://api.myjson.com/bins/aufxd')
            .then(response => response.json())
            .then(todos => todos.map(todo => dispatch(addTodo(todo.text, todo.category, todo.text, todo.completed, todo.deleted)))); // addTodo = initializeStore
    };
};

export const setFilter = (filter) => ({
    type: constants.SET_FILTER,
    filter
});

export const addCategory = (category, color) => ({
    type: constants.ADD_CATEGORY,
    category,
    color
});