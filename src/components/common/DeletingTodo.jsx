import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/todo.css';

export const DeletingTodo = (props) => {
    DeletingTodo.propTypes = {
        confirm: PropTypes.func.isRequired
    };

    return (
        <div className="delete">
            <span className="delete-info">Are you sure to delete?</span>
            <div className="buttons-wrapper">
                <button className="btn btn-edit btn-fixed-size" onClick={() => props.confirm(true)}>Yes</button>
                <button className="btn btn-delete btn-fixed-size" onClick={() => props.confirm(false)}>No</button>
            </div>
        </div>
    );
};
