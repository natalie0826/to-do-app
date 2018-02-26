// actions call reducers
import uuidv4 from 'uuid/v4';

import { todosActions } from './todosActions';
import { urls } from '../constants/urls';
import API from './api';

export const addTodo = (text, category, description) => {
    const newTodo = {
        id: uuidv4(),
        text,
        category,
        description,
        completed: false,
        deleted: false
    };
    return (dispatch) => {
        return API.post(urls.todos, newTodo)
                .then(response => dispatch(addTodoSuccess(response.data.data)))
                .catch(error => console.log(error))
    }
};

export const addTodoSuccess = (todo) => ({
    type: todosActions.ADD_TODO_SUCCESS,
    payload: {
        id: todo.id,
        text: todo.text,
        category: todo.category,
        description: todo.description,
        completed: false,
        deleted: false
    }
});

// export const addTodoFailure

export const editTodo = (id, text, category, description) => {
    const changedTodo ={
        id,
        text,
        category,
        description
    };
    return (dispatch) => {
        return API.put(`${urls.todos}/${id}`, changedTodo)
                .then(response => dispatch(editTodoSuccess))
                .catch(error => console.log(error));
    }
}

export const editTodoSuccess = (id, text, category, description) => ({
    type: todosActions.EDIT_TODO,
    payload: {
        id,
        text,
        category,
        description
    }
});

export const deleteTodo = (id) => {
    return (dispatch) => {
        return API.delete(`${urls.todos}/${id}`)
            .then(response => dispatch(deleteTodoSuccess(id)))
            .catch(error => console.log(error))
    }
}

export const deleteTodoSuccess = (id) => ({
    type: todosActions.DELETE_TODO_SUCCESS,
    payload: {
        id
    }
});

export const toggleTodoSuccess = (id) => ({
    type: todosActions.TOGGLE_TODO,
    payload: {
        id
    }
});

export const fetchTodos = (url) => {
    return (dispatch) => {
        return API.get(url)
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