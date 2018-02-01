// reducers
import todosReducer from './todos';

describe('Reducers', () => {
    const id = 0;
    const text = 'test';

    it('should return the initial state', () => {
        expect(todosReducer(undefined, {}))
            .toEqual({
                'history': {
                    'present': []
                },
                'present': []
            });
    });
    
    it('should handle ADD_TODO', () => {
        expect(
            todosReducer([], {
                id,
                type: 'ADD_TODO',
                text: text.toLowerCase(),
            })).toEqual({
                'past': [],
                'present': [
                    {
                        text: text.toLowerCase(),
                        completed: false,
                        deleted: false,
                        id
                    }
                ],
                'future': [],
                'history': {
                    'past': [],
                    'present': [
                        {
                            text: text.toLowerCase(),
                            completed: false,
                            deleted: false,
                            id
                        }
                    ],
                    'future': []
                }
            });
        });
});