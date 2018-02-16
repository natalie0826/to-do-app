import { constants } from './constants';

export const addCategory = (category) => ({
    type: constants.ADD_CATEGORY,
    payload: {
        category: category.category,
        color: category.color
    }
});

export const fetchCategories = (url) => {
    return (dispatch) => {
        return fetch(url)
            .then(response => response.json())
            .then(categories => categories.map(category => dispatch(addCategory(category.category, category.color))));
    };
};
