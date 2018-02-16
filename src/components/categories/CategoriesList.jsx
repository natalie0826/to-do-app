import React from 'react';
import PropTypes from 'prop-types';

import { CategoryBadge } from './CategoryBadge';

export const CategoriesList = (props) => {
    CategoriesList.propTypes = {
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired,
    };

    return (
        props.categories.map((category) => {
            return <CategoryBadge {...category} />
        })
    );
};
