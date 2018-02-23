// actions call reducers
import uuidv4 from 'uuid/v4';
import axios from 'axios';

import { todosActions } from './todosActions';

export const addTodo = (text, category, description, completed, deleted) => ({
    type: todosActions.ADD_TODO,
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
    type: todosActions.EDIT_TODO,
    payload: {
        id,
        text,
        category,
        description
    }
});

export const deleteTodo = (id) => ({
    type: todosActions.DELETE_TODO,
    payload: {
        id
    }
});

export const toggleTodo = (id) => ({
    type: todosActions.TOGGLE_TODO,
    payload: {
        id
    }
});

export const fetchTodos = (url) => {
    return (dispatch) => {
        return axios.get(url)
            .then((response) => {
                if (response.data.length) {
                    return dispatch(fetchTodosSuccess(response.data));
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .catch(error => dispatch(fetchTodosFailure));
    };
};

export const fetchTodosSuccess = (data) => ({
    type: todosActions.FETCH_TODOS_SUCCESS,
    payload: {
        todos: data
    }
});

export const fetchTodosFailure = (error) => ({
    type: todosActions.FETCH_TODOS_FAILURE,
    payload: {
        error
    }
});

export const setFilter = (filter) => ({
    type: todosActions.SET_FILTER,
    payload: {
        filter
    }
});