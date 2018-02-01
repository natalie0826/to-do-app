import undoable, { includeAction } from 'redux-undo';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return {
            id: action.id,
            text: action.text.toLowerCase(),
            completed: false,
            deleted: false
        };
    case 'EDIT_TODO':
        if (state.id !== action.id) {
            return state;
        }

        return {
            ...state,
            id: action.id,
            text: action.text.toLowerCase(),
        };
    case 'DELETE_TODO':
        if (state.id !== action.id) {
            return state;
        }

        return {
            ...state,
            deleted: !state.deleted
        };
    case 'TOGGLE_TODO':
        if (state.id !== action.id && !state.deleted) {
            return state;
        }

        return {
            ...state,
            completed: !state.completed
        };
    case 'RESTORE_DELETED':
        if (!state.deleted) {
            return state;
        }
        return {
            ...state,
            deleted: false,
        };
    default:
        return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    console.log('addtodo reducer');
        return [
            ...state,
            todo(undefined, action)
        ];
    case 'EDIT_TODO':
    case 'DELETE_TODO':
    case 'TOGGLE_TODO':
    case 'RESTORE_DELETED':
        return state.map(t =>
            todo(t, action)
        );
    default:
        return state;
  }
};

const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO', 'EDIT_TODO', 'TOGGLE_TODO', 'DELETE_TODO', 'RESTORE_DELETED']) });

export default undoableTodos;
