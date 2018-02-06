import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Todo from './Todo';

export const Categories = (props) => {
    Categories.propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            deleted: PropTypes.bool.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired).isRequired,
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired,
        onTodoClick: PropTypes.func,
        onDeleteClick: PropTypes.func,
        onRestoreClick: PropTypes.func
    };

    return (
        <div className="accordeon">
            {props.categories.map((category) => {
                    return (
                        <Section key={category.category} title={category.category} color={category.color}>
                            {props.todos.map((todo) => {
                                if (todo.category === category.category) {
                                    return (
                                        <Todo
                                            key={todo.id}
                                            {...todo}
                                            onDelete={() => {props.onDeleteClick(todo.id); this.addNotification(todo.id); }}
                                            onChange={() => props.onTodoClick(todo.id)}
                                        />
                                    );
                                }
                            }
                            )}
                        </Section>
                    );
                })
            }
            </div>
    );

};
