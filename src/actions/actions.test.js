// actions
import * as actions from './index';

describe('Actions', () => {
    const id = 0;
    const text = 'test';

    it('should create an action to ADD a todo', () => {
        const expectedAction = {
            type: 'ADD_TODO',
            text,
            id
        };
        expect(actions.addTodo(text)).toEqual(expectedAction);
    });

    it('should create an action to DELETE the todo', () => {
        const expectedAction = {
            type: 'DELETE_TODO',
            id
        };
        expect(actions.deleteTodo(id)).toEqual(expectedAction);
    });

    it('should create an action to EDIT the todo', () => {
        const expectedAction = {
            type: 'EDIT_TODO',
            text,
            id
        };
        expect(actions.editTodo(id, text)).toEqual(expectedAction);
    });
});