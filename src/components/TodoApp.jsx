import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import NotificationSystem from 'react-notification-system';

import { ShowCategories } from '../containers/ShowCategories';
import Editor from './common/Editor';
import { Search } from './common/Search';
import TodoList from './TodoList';
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
        addCategory: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            showNotification: false,
            todos: this.props.data[0],
            categories: this.props.data[1]
        };
    }

    componentDidMount() {
        if (this.props.data.length) {
            this.props.data[0].map(todo => this.props.addTodo(todo));
            this.props.data[1].map(category => this.props.addCategory(category));
        }
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    addNotification(id/*, callback*/) {
        this.$notificationSystem.addNotification({
            title: `Your item has been successfully deleted!`,
            level: 'info',
            autoDismiss: 10,
            dismissible: false,
            action: {
                label: 'Undo',
                callback: () => {
                    /*callback()*/
                }
            }
        });
    }

    deleteTodo = (id) => {
        this.props.deleteTodo(id);
        this.addNotification();
    }

    render() {
        const {
            todos,
            categories,
            addTodo,
            addCategory
        } = this.props;

        // It isn't a state because filteredTodos can be computed by combining user
        // input in search box and todos array from props.
        const filteredTodos = todos.filter(todo => todo.text.includes(this.state.search.toLowerCase()));

        return (
            <div>
                <h3>Todos</h3>
                <Editor isAddTodo={true} categories={categories} addTodo={addTodo} addCategory={addCategory} store={this.props.store} />
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
                    </TabPanel>
                    <TabPanel className="tabs-panel">
                        <ShowCategories {...this.props}
                                        deleteTodo={this.deleteTodo} />
                    </TabPanel>
                </Tabs>
                <NotificationSystem ref={instance => this.$notificationSystem = instance} />
            </div>
        );
    }
}
