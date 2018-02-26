import undoable from 'redux-undo';
import { includeAction } from 'redux-undo';
import { todosActions } from '../actions/todosActions';

const todo = (state, actionType, payload) => {
    switch (actionType) {
        case todosActions.ADD_TODO_SUCCESS:
            return {
                id: payload.id,
                text: payload.text,
                category: payload.category,
                description: payload.description,
                completed: payload.completed,
                deleted: payload.deleted
            };
        case todosActions.EDIT_TODO:
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
        case todosActions.TOGGLE_TODO:
            if (state.id !== payload.id && !state.deleted) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case todosActions.ADD_TODO_SUCCESS:
            return [
                ...state,
                todo(undefined, action.type, action.payload)
            ];
        case todosActions.EDIT_TODO:
        case todosActions.TOGGLE_TODO:
            return state.map(t =>
                todo(t, action.type, action.payload)
            );
        case todosActions.DELETE_TODO_SUCCESS:
            return state.filter((todo) => {
                return todo.id !== action.payload.id
            });;
        case todosActions.FETCH_TODOS_SUCCESS:
            return Object.assign([], state, action.payload.todos);
        default:
            return state;
    }
};

const undoableTodos = undoable(todos, { filter: includeAction(['DELETE_TODO_SUCCESS', 'FETCH_TODOS_SUCCESS']) });

export default undoableTodos;
