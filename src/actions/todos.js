// actions call reducers
import fetch from 'isomorphic-fetch';
import uuidv4 from 'uuid/v4';

import { constants } from './constants';

export const addTodo = (text, category, description, completed, deleted) => ({
    type: constants.ADD_TODO,
    payload: {
        id: uuidv4(),
        text,
        category,
        description,
        completed,
        deleted
    }
});

export const editTodo = (id, text, category, description) => ({
    type: constants.EDIT_TODO,
    payload: {
        id,
        text,
        category,
        description
    }
});

export const deleteTodo = (id) => ({
    type: constants.DELETE_TODO,
    payload: {
        id
    }
});

export const toggleTodo = (id) => ({
    type: constants.TOGGLE_TODO,
    payload: {
        id
    }
});

export const requestTodos = () => ({
    type: constants.REQUEST_TODOS
});

export const fetchTodos = (url) => {
    return (dispatch) => {
        return fetch(url)
            .then(response => response.json())
            .then(todos => todos.map(todo => dispatch(addTodo(todo)))); // addTodo = initializeStore
    };
};

export const setFilter = (filter) => ({
    type: constants.SET_FILTER,
    payload: {
        filter
    }
});