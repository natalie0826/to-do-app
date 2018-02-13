import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/todo.css';

export const DeletingTodo = (props) => {
    DeletingTodo.propTypes = {
        confirm: PropTypes.func.isRequired
    };

    return (
        <div className="delete">
            <span>Are you sure to delete?</span>
            <button className="btn btn-edit" onClick={() => props.confirm(true)}>Yes</button>
            <button className="btn btn-delete" onClick={() => props.confirm(false)}>No</button>
        </div>
    );
};
