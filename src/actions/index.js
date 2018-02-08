// actions call reducers

import fetch from 'isomorphic-fetch';

let nextId = 0;

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RESTORE_DELETED = 'RESTORE_DELETED';
export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const SET_FILTER = 'SET_FILTER';

export const ADD_CATEGORY = 'ADD_CATEGORY';

export const addTodo = (text, category, description) => ({
    type: ADD_TODO,
    id: nextId++,
    text,
    category,
    description
});

export const editTodo = (id, text, category, description) => ({
    type: EDIT_TODO,
    id,
    text,
    category,
    description
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export const restoreTodos = () => ({
    type: RESTORE_DELETED
});

export const requestTodos = () => ({
    type: REQUEST_TODOS
});

export const recieveTodos = (json) => ({
    type: RECEIVE_TODOS,
    todos: json,
    receivedAt: Date.now()
});

export function fetchTodos() {
    return (dispatch) => {
        dispatch(requestTodos());
        return fetch('https://api.myjson.com/bins/aufxd')
            .then(response => response.json())
            .then(json => dispatch(recieveTodos(json)));
    };
}

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
});

export const addCategory = (category, color) => ({
    type: ADD_CATEGORY,
    category,
    color
});
