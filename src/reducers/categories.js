const categoriesState = [
    { category: 'hello', color: '#FBD6AA' },
    { category: 'fine', color: '#FB77FF' },
    { category: 'good', color: '#F33AAA' }
];

export const categories = (state = categoriesState, action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            return [
                ...state,
                {
                    category: action.category,
                    color: action.color
                }
            ];
        default:
            return state;
    }
};