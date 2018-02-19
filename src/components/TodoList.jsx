import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../components/Todo';
import { FilterLink } from '../containers/FilterLink';
import '../styles/todo.css';

export default class TodoList extends React.Component {
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
        const {todos, editTodo, toggleTodo, deleteTodo, categories} = this.props;

        return (
            <div>
                <div className="todos">
                    <FilterLink/> {todos.map((todo) =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        toggleTodo={() => toggleTodo(todo.id)}
                        deleteTodo={() => deleteTodo(todo.id)}
                        editTodo={editTodo}
                        categories={categories}/>)}
                </div>
            </div>
        );
    }
}
