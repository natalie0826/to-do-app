import axios from 'axios';

import { constants } from './constants';

export const addCategory = (category, color) => ({
    type: constants.ADD_CATEGORY,
    payload: {
        category,
        color
    }
});

export const fetchCategories = (url) => {
    return (dispatch) => {
        return axios.get(url)
            .then((categories) => {
                if (categories.data.length) {
                    categories.data.map(category => dispatch(addCategory(category.category, category.color)));
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .catch(error => console.log(error));
    };
};
