import React from 'react';
import PropTypes from 'prop-types';

import { EditTodo } from '../containers/EditTodo';
import NotificationSystem from 'react-notification-system';
import '../styles/todo.css';

export default class TodoList extends React.Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          deleted: PropTypes.bool.isRequired,
          completed: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired).isRequired,
        onTodoClick: PropTypes.func.isRequired,
        onDeleteClick: PropTypes.func.isRequired,
        onRestoreClick: PropTypes.func.isRequired
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
    }

    render() {
        const {
            todos,
            onTodoClick,
            onRestoreClick
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
                console.log(existDeletedTodos);
                if (existDeletedTodos === undefined) {
                    return false;
                } else {
                    return true;
                }
            }
        })();

        return (
            <div>
                {showSearch
                    ? <input
                        className="search-todo"
                        type="text"
                        placeholder="Search. . ."
                        value={this.state.search}
                        onChange={this.updateSearch} />
                    : ''
                }
                <ul className="todos">
                    {filteredTodos.map(todo =>
                        <EditTodo
                            key={todo.id}
                            {...todo}
                            onDelete={() => {this.props.onDeleteClick(todo.id); this.addNotification(todo.id); }}
                            onChange={() => onTodoClick(todo.id)}
                        />
                    )}

                    {filteredTodos.find(todo => todo.deleted) &&
                        <button className="btn btn-delete" onClick={() => onRestoreClick()}>Restore deleted</button>
                    }
                </ul>
                <NotificationSystem ref="notificationSystem" />
            </div>
        );
    }
}
