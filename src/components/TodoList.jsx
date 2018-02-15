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

        // It isn't a state because filteredTodos can be computed by combining user
        // input in search box and todos array from props.
        const filteredTodos = todos.filter(todo => todo.text.includes(this.state.search.toLowerCase()));

        return (
            <div>
                <div className="todos">
                    <FilterLink/> {filteredTodos.map((todo) =>
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
