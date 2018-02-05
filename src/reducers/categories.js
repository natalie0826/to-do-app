const categoriesState = [
    { category: 'hello', color: '#eeeeee' },
    { category: 'fine', color: '#AABBCC' },
    { category: 'good', color: '#DDEEFF' }
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