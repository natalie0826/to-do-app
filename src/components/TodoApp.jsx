import React from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import classNames from 'classnames';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Search } from './common/Search';
import { configureStore } from '../configureStore';
import { urls } from '../constants/urls';
import Categories from './tabs/Categories';
import Editor from './common/Editor';
import TodoList from './tabs/TodoList';
import '../styles/todo.css';

export default class TodoApp extends React.Component {
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
        addTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        addCategory: PropTypes.func.isRequired,
        undo: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            showNotification: false
        };
    }

    componentDidMount() {
        this.props.fetchTodos(urls.todos);
        this.props.fetchCategories(urls.categories);
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    addNotification(title, level, label, timeDismiss, dismissible, callback) {
        this.$notificationSystem.addNotification({
            title: title,
            level: level,
            autoDismiss: timeDismiss,
            dismissible: dismissible,
            action: {
                label: label,
                callback: () => {
                    callback()
                }
            }
        });
    }

    deleteTodo = (id) => {
        this.props.deleteTodo(id);
        this.addNotification(`Your item has been successfully deleted!`, 'info', 'Undo', 10, false, this.props.undo);
    }

    deleteCompleted = () => {
        this.props.todos.map(todo => todo.completed ? this.props.deleteTodo(todo.id) : null);
    }

    render() {
        const {
            todos,
            categories,
            addTodo,
            addCategory
        } = this.props;

        const existCompleted = todos.some(todo => todo.completed);

        const displayElement = classNames({
            'hide-element': !existCompleted,
            'btn btn-delete-completed': true
        });

        // It isn't a state because filteredTodos can be computed by combining user
        // input in search box and todos array from props.
        const filteredTodos = todos.filter(todo => todo.text.includes(this.state.search.toLowerCase()));

        return (
            <div>
                <h3>Todos</h3>
                <Editor isAddTodo={true} categories={categories} addTodo={addTodo} addCategory={addCategory} store={configureStore} />
                <Tabs className="tabs">
                    <TabList>
                        <Tab>All tasks</Tab>
                        <Tab>Categories</Tab>
                    </TabList>
                
                    <TabPanel className="tabs-panel">
                        <Search updateSearch={this.updateSearch} value={this.state.search} isVisible={todos.length > 0} />
                        <TodoList   {...this.props}
                                    todos={filteredTodos}
                                    deleteTodo={this.deleteTodo}/>
                        <button className={displayElement} onClick={this.deleteCompleted}>Delete completed</button>
                    </TabPanel>
                    <TabPanel className="tabs-panel">
                        <Categories {...this.props}
                                    deleteTodo={this.deleteTodo} />
                    </TabPanel>
                </Tabs>
                <NotificationSystem ref={instance => this.$notificationSystem = instance} />
            </div>
        );
    }
}
