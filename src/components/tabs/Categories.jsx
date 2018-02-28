import React from 'react';
import PropTypes from 'prop-types';

import TodoWrap from './TodoWrap';
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
        editTodo: PropTypes.func,
        addCategory: PropTypes.func.isRequired
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
            deleteTodo,
            categories
        } = this.props;

        const sortedTodosByCategory = (category) => {
            let todosByCategory = [];
            todos.map(todo => {
                return todo.category === category ? todosByCategory.push(todo) : '';
            });
            return todosByCategory;
         };

        return (
            <div className="accordeon">
                {categories.map((category) => {
                    return (
                        sortedTodosByCategory(category.category).map((todo) => {
                            return (
                                <TodosByCategory key={category.category} title={category.category} color={category.color}>
                                    <TodoWrap   key={todo.id}
                                                {...todo}
                                                {...this.props}
                                                deleteTodo={() => deleteTodo(todo.id)} />
                                </TodosByCategory>
                            )}
                        )
                    )
                })}
            </div>
        );
    }
}
