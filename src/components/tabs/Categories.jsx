import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';
import TodosByCategory from './TodosByCategory';
import '../../styles/todo.css';

export default class Categories extends React.Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string,
          deleted: PropTypes.bool,
          completed: PropTypes.bool,
          text: PropTypes.string
        })),
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string,
            color: PropTypes.string
        })),
        toggleTodo: PropTypes.func,
        deleteTodo: PropTypes.func,
        editTodo: PropTypes.func
    }

    constructor(props) {
        super(props);
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
                        <TodosByCategory key={category.category} title={category.category} color={category.color}>
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
                        </TodosByCategory>
                    );
                })}
            </div>
        );
    }
}
