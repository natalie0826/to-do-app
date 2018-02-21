// actions
import * as actions from './todos';
import uuidv4 from 'uuid/v4';

describe('Actions', () => {
    const id = 0;
    const text = 'test';
    const description = 'description';
    const category = 'category';
    const completed = false;
    const deleted = false;

    // it('should create an action to ADD a todo', () => {
    //     const expectedAction = {
    //         type: 'ADD_TODO',
    //         payload: {
    //             id: uuidv4(),
    //             text,
    //             category,
    //             description,
    //             completed,
    //             deleted
    //         }
    //     };
    //     expect(actions.addTodo(text, category, description, completed, deleted)).toEqual(expectedAction);
    // });

    it('should create an action to DELETE the todo', () => {
        const expectedAction = {
            type: 'DELETE_TODO',
            payload: {
                id
            }
        };
        expect(actions.deleteTodo(id)).toEqual(expectedAction);
    });

    it('should create an action to EDIT the todo', () => {
        const expectedAction = {
            type: 'EDIT_TODO',
            payload: {
                text,
                id
            }
        };
        expect(actions.editTodo(id, text)).toEqual(expectedAction);
    });
});