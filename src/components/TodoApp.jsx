import React from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Editor from './common/Editor';
import { Search } from './common/Search';
import TodoList from './TodoList';
import TodoListByCategories from './TodoListByCategories';
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
        editTodo: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
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
    }

    render() {
        const {
            todos,
            categories,
            toggleTodo,
            deleteTodo,
            addTodo,
            editTodo
        } = this.props;

        return (
            <div>
                <Editor isAddTodo={true} categories={categories} addTodo={addTodo} />
                <Search updateSearch={this.updateSearch} value={this.state.search} isVisible={todos.length} />
                <Tabs>
                    <TabList>
                        <Tab>All tasks</Tab>
                        <Tab>Categories</Tab>
                    </TabList>
                
                    <TabPanel>
                        <TodoList   todos={todos}
                                    categories={categories}
                                    editTodo={editTodo}
                                    deleteTodo={deleteTodo}
                                    toggleTodo={toggleTodo} />
                    </TabPanel>
                    <TabPanel>
                        <TodoListByCategories   todos={todos}
                                                categories={categories}
                                                editTodo={editTodo}
                                                deleteTodo={deleteTodo}
                                                toggleTodo={toggleTodo} />
                    </TabPanel>
                </Tabs> 
            </div>
        );
    }
}
