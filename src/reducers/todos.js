import undoable from 'redux-undo';
// import { includeAction } from 'redux-undo';
import { constants } from '../actions/constants';

const todo = (state, action) => {
    switch (action.type) {
        case constants.ADD_TODO:
            console.log(action);
            return {
                id: action.id,
                text: action.text,
                category: action.category,
                description: action.description,
                completed: action.completed,
                deleted: action.deleted
            };
        case constants.EDIT_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                id: action.id,
                text: action.text,
                category: action.category,
                description: action.description
            };
        case constants.TOGGLE_TODO:
            if (state.id !== action.id && !state.deleted) {
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
                todo(undefined, action)
            ];
        case constants.EDIT_TODO:
        case constants.TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            );
        case constants.DELETE_TODO:
            return state.filter((todo) => {
                return todo.id !== action.id
            });;
        case constants.RECEIVE_TODOS:
        case constants.REQUEST_TODOS:
            return {
                ...state,
                'todos': getTodos(state.todos, action)
            };
        default:
            return state;
    }
};

function getTodos(state = [], action) {
    switch (action.type) {
        case constants.REQUEST_TODOS:
            return {
                ...state
            };
        case constants.RECEIVE_TODOS:
            return {
                ...state,
                todos: action.todos
            };
        default:
            return state;
    }
}

const undoableTodos = undoable(todos);

export default undoableTodos;
