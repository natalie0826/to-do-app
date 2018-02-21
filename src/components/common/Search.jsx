import React from 'react';
import PropTypes from 'prop-types';

export const Search = (props) => {
    Search.propTypes = {
        updateSearch: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        isVisible: PropTypes.bool
    };

    Search.defaultProps = {
        isVisible: true
    };
    return (
        props.isVisible && 
            <input  className="search-todo"
                    type="text"
                    placeholder="Search. . ."
                    value={props.value}
                    onChange={props.updateSearch} />
    );
};
