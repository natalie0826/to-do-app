export const categories = (state = [], action) => {
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