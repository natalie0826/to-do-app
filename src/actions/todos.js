// actions call reducers
import uuidv4 from 'uuid/v4';
import axios from 'axios';

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
    const request = axios({
        method: 'get',
        url: url,
        headers: []
    });
    return {
        type: constants.FETCH_TODOS,
        payload: request
    };
    // return (dispatch) => {
    //     return axios.get(url)
    //         .then((todos) => {
    //             if (todos.data.length) {
    //                 return todos.data.map(todo => dispatch(addTodo(todo.text, todo.category, todo.description, todo.completed, todo.deleted)))
    //             } else {
    //                 throw new Error('Something went wrong...');
    //             }
    //         })
    //         .catch(error => console.log(error));
    // };
};

export function fetchTodosSuccess(posts) {
    return {
        type: constants.FETCH_TODOS_SUCCESS,
        payload: posts
    };
}

export function fetchTodosFailure(error) {
    return {
        type: constants.FETCH_TODOS_FAILURE,
        payload: error
    };
}

export const setFilter = (filter) => ({
    type: constants.SET_FILTER,
    payload: {
        filter
    }
});