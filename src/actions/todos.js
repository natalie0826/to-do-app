// actions call reducers
import uuidv4 from 'uuid/v4';

import { todosActions } from './todosActions';
import { urls } from '../constants/urls';
import { api } from './api';

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
        return api.post(urls.todos, newTodo)
            .then(response => {
                return dispatch(addTodoSuccess(response.data));
            })
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

export const editTodo = (id, text, category, description) => {
    const changedTodo ={
        id,
        text,
        category,
        description
    };
    return (dispatch) => {
        return api.patch(`${urls.todos}/${id}`, changedTodo)
                .then(response => {
                    return dispatch(editTodoSuccess(changedTodo));
                })
                .catch(error => console.log(error));
    }
}

export const editTodoSuccess = ({id, text, category, description}) => ({
    type: todosActions.EDIT_TODO_SUCCESS,
    payload: {
        id,
        text,
        category,
        description
    }
});

export const deleteTodo = (id) => {
    return (dispatch) => {
        return api.delete(`${urls.todos}/${id}`)
            .then(response => {
                return dispatch(deleteTodoSuccess(id))
            })
            .catch(error => console.log(error))
    }
}

export const deleteTodoSuccess = (id) => ({
    type: todosActions.DELETE_TODO_SUCCESS,
    payload: {
        id
    }
});

export const toggleTodo = (id, completed) => {
    return (dispatch) => {
        return api.patch(`${urls.todos}/${id}`, {'completed': completed})
            .then(response => {
                return dispatch(toggleTodoSuccess(id))
            })
            .catch(error => console.log(error))
    }
}

export const toggleTodoSuccess = (id, completed) => ({
    type: todosActions.TOGGLE_TODO_SUCCESS,
    payload: {
        id,
        completed
    }
});

export const fetchTodos = (url) => {
    return (dispatch) => {
        dispatch(startOrFinishLoading(true));
        return api.get(urls.todos)
            .then((response) => {
                if (response.data.length) {
                    dispatch(startOrFinishLoading(false));
                    return dispatch(fetchTodosSuccess(response.data));
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .catch(error => console.log(error));
    };
};

export const fetchTodosSuccess = (data) => ({
    type: todosActions.FETCH_TODOS_SUCCESS,
    payload: {
        todos: data,
        isLoading: false
    }
});

export const startOrFinishLoading = (isLoading) => ({
    type: 'START_OR_FINISH_LOADING',
    payload: {
        isLoading
    }
});

export const setFilter = (filter) => ({
    type: todosActions.SET_FILTER,
    payload: {
        filter
    }
});
