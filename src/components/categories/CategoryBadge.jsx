import React from 'react';
import PropTypes from 'prop-types';

export const CategoryBadge = (props) => {
    CategoryBadge.propTypes = {
        category: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    };
    return (
        <span   key={props.category}
                className="category-todo category-badge"
                style={{'backgroundColor': props.color}}>
            {props.category}
        </span>
    );
};
