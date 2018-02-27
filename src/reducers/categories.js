export const categories = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CATEGORY':
            const isUnique = () => !!state.find((el) => {
                return el.category === action.payload.category;
            });
            if(!isUnique()) {
                return [
                    ...state,
                    {
                        category: action.payload.category,
                        color: action.payload.color
                    }
                ];
            } else {
                return state;
            }
        case 'FETCH_CATEGORIES_SUCCESS':
            return Object.assign([], state, action.payload.categories);
        default:
            return state;
    }
};