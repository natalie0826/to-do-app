// actions call reducers

let nextId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextId++,
    text
});

export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    id,
    text
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export const restoreTodos = () => ({
    type: 'RESTORE_DELETED'
});

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
});
