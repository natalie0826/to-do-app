import axios from 'axios';

import { categoriesActions } from './categoriesActions';

export const addCategory = (category, color) => ({
    type: categoriesActions.ADD_CATEGORY,
    payload: {
        category,
        color
    }
});

export const fetchCategories = (url) => {
    return (dispatch) => {
        return axios.get(url)
            .then((response) => {
                if (response.data.length) {
                    return dispatch(fetchCategoriesSuccess(response.data));
                } else {
                    throw new Error('Something went wrong...');
                }
            })
            .catch(error => console.log(error));
    };
};

export const fetchCategoriesSuccess = (data) => ({
    type: categoriesActions.FETCH_CATEGORIES_SUCCESS,
    payload: {
        categories: data
    }
});

export const fetchCategoriesFailure = (error) => ({
    type: categoriesActions.FETCH_CATEGORIES_FAILURE,
    payload: {
        error
    }
});
