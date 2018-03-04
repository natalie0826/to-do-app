import uuidv4 from 'uuid/v4';
import { api } from './api';

import { categoriesActions } from './categoriesActions';
import { urls } from '../constants/urls';

export const fetchCategories = (url) => {
    return (dispatch) => {
        return api.get(url)
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

export const addCategory = (category, color) => {
    const newCategory = {
        id: uuidv4(),
        category,
        color
    };
    return (dispatch) => {
        return api.post(urls.categories, newCategory)
            .then(response => {
                return dispatch(addCategorySuccess(response.data));
            })
            .catch(error => console.log(error))
    }
};

export const addCategorySuccess = (category) => ({
    type: categoriesActions.ADD_CATEGORY_SUCCESS,
    payload: {
        id: category.id,
        category: category.category,
        color: category.color
    }
});
