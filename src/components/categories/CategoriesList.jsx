import React from 'react';
import PropTypes from 'prop-types';

import { CategoryBadge } from './CategoryBadge';

export const CategoriesList = (props) => {
    CategoriesList.propTypes = {
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired,
        title: PropTypes.string.isRequired
    };

    return (
        <div className="categories">
            <p>{props.title}</p>
            {props.categories.map((category) => {
                return <CategoryBadge key={category.category} {...category} />
            })}
        </div>
    );
};
