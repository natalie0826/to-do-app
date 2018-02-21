import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../styles/todo.css';

export const TodoInfo = (props) => {
    TodoInfo.propTypes = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        setAsCompleted: PropTypes.func.isRequired,
        isVisible: PropTypes.bool.isRequired
    }

    const todoTextClass = classNames('label-checkbox todo-info', {
        'todo-odd': props.id % 2
    });
    const todoCompleted = classNames({
        'todo-completed': props.completed
    });
    
    return (
        props.isVisible && <div className={todoTextClass}>
            <div className="todo-info-card">
                <label className={todoCompleted}>
                    <input type="checkbox" className="checkbox" checked={props.completed} onChange={props.setAsCompleted}/>
                    {props.text}
                </label>
                <span className="category-todo">{props.category}</span>
                <div className="description">{props.description}</div>
            </div>
        </div>
    );
}
