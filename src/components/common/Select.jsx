import React from 'react';
import PropTypes from 'prop-types';

export const Select = (props) => {
    Select.propTypes = {
        class: PropTypes.string,
        selectedValue: PropTypes.string.isRequired,
        changeSelection: PropTypes.func.isRequired,
        options: PropTypes.array.isRequired,
    };

    const options = props.options.map((option) => {
        return <option key={option.category} value={option.category}>{option.category}</option>;
    });

    return (
        <select className={props.class} value={props.selectedValue} onChange={(event) => props.changeSelection(event.target.value)}>
            {options}
        </select>
    );
};
