import undoable from 'redux-undo';
import { includeAction } from 'redux-undo';
import { constants } from '../actions/constants';

const todo = (state, actionType, payload) => {
    switch (actionType) {
        case constants.ADD_TODO:
            return {
                id: payload.id,
                text: payload.text,
                category: payload.category,
                description: payload.description,
                completed: payload.completed,
                deleted: payload.deleted
            };
        case constants.EDIT_TODO:
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
        case constants.TOGGLE_TODO:
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
        case constants.ADD_TODO:
            return [
                ...state,
                todo(undefined, action.type, action.payload)
            ];
        case constants.EDIT_TODO:
        case constants.TOGGLE_TODO:
            return state.map(t =>
                todo(t, action.type, action.payload)
            );
        case constants.DELETE_TODO:
            return state.filter((todo) => {
                return todo.id !== action.payload.id
            });;
        case constants.RECEIVE_TODOS:
        case constants.REQUEST_TODOS:
            return {
                ...state,
                'todos': getTodos(state.todos, action.type, action.payload)
            };
        case constants.FETCH_TODOS:
            return {
                ...state,
                todos: []
            };
        case constants.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload.todos
            };
        case constants.FETCH_TODOS_FAILURE:
            //error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return {
                ...state,
                todos: []
            };
        default:
            return state;
    }
};

function getTodos(state = [], actionType, payload) {
    switch (actionType) {
        case constants.REQUEST_TODOS:
            return {
                ...state
            };
        case constants.RECEIVE_TODOS:
            return {
                ...state,
                todos: payload.todos
            };
        default:
            return state;
    }
}

const undoableTodos = undoable(todos, { filter: includeAction(['DELETE_TODO']) });

export default undoableTodos;
