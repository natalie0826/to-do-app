import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../components/Todo';
import Section from './Section';
import NotificationSystem from 'react-notification-system';
import { FilterLink } from '../containers/FilterLink';
import '../styles/todo.css';

export default class TodoList extends React.Component {
    static propTypes = {
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
        toggleTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        restoreTodos: PropTypes.func.isRequired,
        fetch: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state = {
            search: '',
            showNotification: false
        };
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    notificationSystem = null;

    addNotification(id) {
        const that = this;
        that.notificationSystem.addNotification({
            title: `Your item №${id+1} has been successfully deleted!`,
            message: 'To cancel this action, press button',
            level: 'info',
            autoDismiss: 10,
            dismissible: false,
            action: {
                label: 'Cancel',
                callback: function() {
                    that.props.onDeleteClick(id);
                }
            }
        });
    }

    componentDidMount() {
        this.notificationSystem = this.refs.notificationSystem;
        this.props.fetch();
    }

    render() {
        const {
            todos,
            toggleTodo,
            deleteTodo,
            restoreTodos,
            categories
        } = this.props;

        // It isn't a state because filteredTodos can be computed by combining user input in search box and todos array from props.
        let filteredTodos = todos.filter(
            (todo) => {
                return todo.text.includes(this.state.search.toLowerCase());
            }
        );

        let showSearch = (function(){
            if (!todos.length) {
                return false;
            } else {
                let existDeletedTodos = todos.find((todo) => {
                    return !todo.deleted;
                });
                if (existDeletedTodos === undefined) {
                    return false;
                } else {
                    return true;
                }
            }
        })();

        return (
            <div className="accordeon">
                {this.props.flag === 'categories' ?
                    categories.map((category) => {
                        return (
                            <Section key={category.category} title={category.category} color={category.color}>
                                {todos.map((todo) => {
                                        if (todo.category === category.category) {
                                           return (
                                                <Todo
                                                    key={todo.text}
                                                    {...todo}
                                                    onDelete={() => {deleteTodo(todo.id); this.addNotification(todo.id); }}
                                                    onChange={() => toggleTodo(todo.id)}
                                                />
                                            );
                                        } else {
                                            return null;
                                        }
                                })}
                            </Section>
                        );
                    })
                    :

            <div>
                {showSearch
                    ? <div>
                        <hr />
                        <input
                            className="search-todo"
                            type="text"
                            placeholder="Search. . ."
                            value={this.state.search}
                            onChange={this.updateSearch} />
                        <hr />
                      </div>
                    : ''
                }
                <div className="todos">
                    <FilterLink />
                    {filteredTodos.map((todo) =>
                        <Todo
                            key={todo.id}
                            {...todo}
                            delete={() => {this.props.onDeleteClick(todo.id); this.addNotification(todo.id); }}
                            edit={() => toggleTodo(todo.id)}
                        />
                    )}

                    {filteredTodos.find(todo => todo.deleted) &&
                        <button className="btn btn-delete" onClick={() => restoreTodos()}>Restore deleted</button>
                    }
                </div>
                <NotificationSystem ref="notificationSystem" />
            </div>
            }
            </div>
        );
    }
}
