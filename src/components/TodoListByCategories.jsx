import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../components/Todo';
import Section from './Section';
import '../styles/todo.css';

export default class TodoListByCategories extends React.Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          deleted: PropTypes.bool.isRequired,
          completed: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired).isRequired,
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired,
        toggleTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state = {
            search: '',
            showNotification: false
        };
    }

    render() {
        const {
            todos,
            editTodo,
            deleteTodo,
            toggleTodo,
            categories
        } = this.props;

        return (
            <div className="accordeon">
                {categories.map((category) => {
                    return (
                        <Section key={category.category} title={category.category} color={category.color}>
                            {todos.map((todo) => {
                                if (todo.category === category.category) {
                                    return (
                                        <Todo
                                            key={todo.id}
                                            {...todo}
                                            toggleTodo={() => toggleTodo(todo.id)}
                                            deleteTodo={() => deleteTodo(todo.id)}
                                            editTodo={editTodo}
                                            categories={categories}/>)
                                        }
                                else {
                                    return null;
                                }
                            })}
                        </Section>
                    );
                })}
            </div>
        );
    }
}
