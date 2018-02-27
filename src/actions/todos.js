// actions call reducers
import uuidv4 from 'uuid/v4';

import { todosActions } from './todosActions';
import { urls } from '../constants/urls';
import axios from 'axios';

// axios.interceptors.response.use((response) => {
//     return response
//   }, (error) => {
//     if (error.response && error.response.data && error.response.data.location) {
//       window.location = error.response.data.location
//     } else {
//       return Promise.reject(error)
//     }
//   })

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
        // return axios.post(urls.todos, newTodo)
        //     .then(response => {
        //         return dispatch(addTodoSuccess(response.data));
        //     })
        //     .catch(error => console.log(error))
        return fetch(urls.todos, { method: 'POST', data: {
            id: uuidv4(),
            text,
            category,
            description,
            completed: false,
            deleted: false
        }})
            .then(res => res.json() )
            .then(response => {
                    return dispatch(addTodoSuccess(response));
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
        return axios.patch(`${urls.todos}/${id}`, changedTodo)
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
        return axios.delete(`${urls.todos}/${id}`)
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
        return axios.patch(`${urls.todos}/${id}`, {'completed': completed})
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
        return axios.get(url)
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


/*// actions call reducers
import uuidv4 from 'uuid/v4';

import { todosActions } from './todosActions';
import { urls } from '../constants/urls';
import axios from 'axios';

// axios.interceptors.response.use((response) => {
//     return response
//   }, (error) => {
//     if (error.response && error.response.data && error.response.data.location) {
//       window.location = error.response.data.location
//     } else {
//       return Promise.reject(error)
//     }
//   })

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
        return  fetch(urls.todos, { 
            method: 'POST',
            data: newTodo
          }).then(response => {
                    const resp = response.json();
                    console.log('response', resp);
                    return dispatch(addTodoSuccess(newTodo));
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
        return axios.patch(`${urls.todos}/${id}`, changedTodo)
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
        return axios.delete(`${urls.todos}/${id}`)
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
        return axios.patch(`${urls.todos}/${id}`, {'completed': completed})
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
        return axios.get(url)
            .then((response) => {
                if (response.data.length) {
                    dispatch(startOrFinishLoading(false));
                    return dispatch(fetchTodosSuccess(response.data.json()));
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
});*/