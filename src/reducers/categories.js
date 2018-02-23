import { categoriesActions } from '../actions/categoriesActions';

export const categories = (state = [], action) => {
    switch(action.type) {
        case categoriesActions.ADD_CATEGORY:
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
        case categoriesActions.FETCH_CATEGORIES_SUCCESS:
            
        default:
            return state;
    }
};