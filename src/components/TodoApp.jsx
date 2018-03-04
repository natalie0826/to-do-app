import React from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import classNames from 'classnames';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Search } from './common/Search';
import { configureStore } from '../configureStore';
import { urls } from '../constants/urls';
import { notificationConstants } from '../constants/notificationConstants';
import { Loading } from '../components/Loading';
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
            showNotification: false,
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        this.props.fetchTodos(urls.todos)
            .then(() => this.setState({isLoading: false}))
        this.props.fetchCategories(urls.categories);
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    addNotification(title, level, label, timeDismiss, dismissible, id, callbackAction, callbackAdd, callbackRemove) {
        this.$notificationSystem.addNotification({
            title: title,
            level: level,
            autoDismiss: timeDismiss,
            dismissible: dismissible,
            action: {
                label: label,
                callback: () => callbackAction()
            },
            onAdd: () => callbackAdd(id),
            onRemove: () => callbackRemove(id)
        });
    }

    showDeleteNotification = (id) => {
        this.addNotification(notificationConstants.message,
            notificationConstants.type,
            notificationConstants.buttonUndo,
            10,
            false,
            id,
            this.props.undo,
            this.props.deleteTodoSuccess,
            this.props.deleteTodo);
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

        const existTodos = filteredTodos.filter(todo => !todo.deleted);

        const borderedTabStyle = {
            paddingBottom: '10px',
            border: '1px solid #aaaaaa',
            borderTop: 0
        }

        return (
            <div>
                <h3>Todos</h3>
                <Editor form='editor-add' isAddTodo={true} categories={categories} addTodo={addTodo} addCategory={addCategory} store={configureStore} />
                
                
                {this.state.isLoading ? <Loading loading={this.state.isLoading} /> : 
                    <Tabs className="tabs">
                        <TabList>
                            <Tab>All tasks</Tab>
                            <Tab>Categories</Tab>
                        </TabList>
                    
                        <TabPanel style={borderedTabStyle}>
                            <br />
                            <Search updateSearch={this.updateSearch} value={this.state.search} isVisible={todos.length > 0} />
                            <TodoList   {...this.props}
                                        todos={existTodos}
                                        deleteTodo={this.showDeleteNotification}
                                        store={configureStore} />
                            <button className={displayElement} onClick={this.deleteCompleted}>Delete completed</button>
                        </TabPanel>
                        <TabPanel>
                            <br />
                            <Categories {...this.props}
                                        store={configureStore}
                                        deleteTodo={this.showDeleteNotification} />
                        </TabPanel>
                    </Tabs>
                }
                <NotificationSystem ref={instance => this.$notificationSystem = instance} />
            </div>
        );
    }
}
