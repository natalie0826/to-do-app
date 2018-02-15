import React from 'react';
import '../../node_modules/react-tabs/style/react-tabs.css';

import { configureStore } from '../configureStore';
import { withFetching } from '../containers/withFetching';
import TodoList from '../components/TodoList';
import { AddCategory } from './common/AddCategory';
import '../styles/todo.css';

export const App = (props) => {
    const TodoListWithNull = withFetching(TodoList);

    return (
        <div className="container">
            <AddCategory store={configureStore} categories={configureStore.categories} />
            <h3>Todos</h3>
            <TodoListWithNull todos={props.todos}/>
        </div>
    );
};
