import React from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';

import Todo from '../components/Todo';
import Section from './Section';
import { FilterLink } from '../containers/FilterLink';
import { Search } from './common/Search';
import '../styles/todo.css';

export default class TodoList extends React.Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          deleted: PropTypes.bool.isRequired,
          completed: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired).isRequired,
        // categories: PropTypes.arrayOf(PropTypes.shape({
        //     category: PropTypes.string.isRequired,
        //     color: PropTypes.string.isRequired
        // }).isRequired).isRequired,
        // toggleTodo: PropTypes.func.isRequired,
        // deleteTodo: PropTypes.func.isRequired,
        // fetch: PropTypes.func.isRequired
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
        this.notificationSystem.addNotification({
            title: `Your item has been successfully deleted!`,
            level: 'info',
            autoDismiss: 10,
            dismissible: false,
            action: {
                label: 'Undo',
                callback: () => {
                    //this.props.deleteTodo(id);
                }
            }
        });
    }

    componentDidMount() {
        this.notificationSystem = this.refs.notificationSystem;
        if (this.props.flag === 'list'){ this.props.fetch(); }
    }

    render() {
        const {
            todos,
            editTodo,
            toggleTodo,
            deleteTodo,
            categories
        } = this.props;

        // It isn't a state because filteredTodos can be computed by combining user input in search box and todos array from props.
        let filteredTodos = todos.filter(todo => todo.text.includes(this.state.search.toLowerCase()));

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
                                                    toggle={() => toggleTodo(todo.id, !todo.completed)}
                                                    delete={() => this.addNotification(todo.id)}
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
                <Search updateSearch={this.updateSearch} value={this.state.search} isVisible={todos.length} />
                <div className="todos">
                    <FilterLink />
                    {filteredTodos.map((todo) =>
                        <Todo
                            key={todo.id}
                            {...todo}
                            toggle={() => toggleTodo(todo.id, !todo.completed)}
                            delete={() => this.addNotification(todo.id)}
                        />
                    )}
                </div>
                <NotificationSystem ref="notificationSystem" />
            </div>
            }
            </div>
        );
    }
}
