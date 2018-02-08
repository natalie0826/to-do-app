import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions/index';

export const todos = (state = { todos: [] }, action) => {
    switch(action.type) {
        case REQUEST_TODOS:
            return state;
        case RECEIVE_TODOS:
            return {
                ...state,
                items: action.todos,
                lastUpdated: action.receivedAt
            };
        default:
            return state;
    }
};