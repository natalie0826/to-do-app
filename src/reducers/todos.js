import undoable from 'redux-undo';
import { includeAction } from 'redux-undo';

const todo = (state, actionType, payload) => {
    switch (actionType) {
        case 'ADD_TODO_SUCCESS':
            return {
                id: payload.id,
                text: payload.text,
                category: payload.category,
                description: payload.description,
                completed: payload.completed,
                deleted: payload.deleted
            };
        case 'EDIT_TODO_SUCCESS':
            if (state.id !== payload.id) {
                return state;
            }

            return {
                ...state,
                id: payload.id,
                text: payload.text,
                category: payload.category,
                description: payload.description
            };
        case 'TOGGLE_TODO_SUCCESS':
            if (state.id !== payload.id && !state.deleted) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        case 'DELETE_TODO_SUCCESS': 
            if (state.id !== payload.id) {
                return state
            }
        
            return {
                ...state,
              deleted: !state.deleted
            }
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO_SUCCESS':
            return [
                ...state,
                todo(undefined, action.type, action.payload)
            ];
        case 'EDIT_TODO_SUCCESS':
        case 'TOGGLE_TODO_SUCCESS':
            return state.map(t =>
                todo(t, action.type, action.payload)
            );
        case 'DELETE_TODO_SUCCESS':
            return state.map(t =>
                todo(t, action.type, action.payload)
            )
        case 'FETCH_TODOS_SUCCESS':
            return Object.assign([], state, action.payload.todos);
        default:
            return state;
    }
};

const undoableTodos = undoable(todos, { filter: includeAction(['DELETE_TODO_SUCCESS']) });

export default undoableTodos;
