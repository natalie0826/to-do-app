const categoriesState = [
    { category: 'work', color: '#FBD6AA' },
    { category: 'home', color: '#FB77FF' },
    { category: 'hobby', color: '#F33AAA' }
];

export const categories = (state = categoriesState, action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            const isUnique = () => !!state.find((el) => {
                return el.category === action.category;
            });
            if(!isUnique()) {
                return [
                    ...state,
                    {
                        category: action.category,
                        color: action.color
                    }
                ];
            } else {
                return state;
            }
        default:
            return state;
    }
};