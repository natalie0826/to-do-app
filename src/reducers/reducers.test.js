import React from 'react';
import { shallow } from 'enzyme';

// reducers
import todosReducer from './todos';

describe('Reducers', () => {
    const id = 0;
    const text = 'test';
    const date = new Date();

    it('should return the initial state', () => {
        expect(todosReducer(undefined, {}))
            .toEqual({
                "history": {
                    "present": []
                },
                "present": []
            });
    });
    
    it('should handle ADD_TODO', () => {
        expect(
            todosReducer([], {
                id,
                type: 'ADD_TODO',
                text: text.toLowerCase(),
                date
            })).toEqual({
                "past": [],
                "present": [
                    {
                        text: text.toLowerCase(),
                        date,
                        completed: false,
                        deleted: false,
                        id
                    }
                ],
                "future": [],
                "history": {
                    "past": [],
                    "present": [
                        {
                            text: text.toLowerCase(),
                            date,
                            completed: false,
                            deleted: false,
                            id
                        }
                    ],
                    "future": []
                }
            });
        })
});