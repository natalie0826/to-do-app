import React from 'react';
import '../../node_modules/react-tabs/style/react-tabs.css';

import { configureStore } from '../configureStore';
import { withFetching } from '../containers/withFetching';
import TodoList from '../components/TodoList';
import { AddCategory } from './common/AddCategory';
import '../styles/todo.css';

import { TodoTryMy } from './TodoTryMy';


export const App = (props) => {
    const TodoListWithNull = withFetching('https://api.myjson.com/bins/aufxd')(TodoTryMy);

    return (
        <div className="container">
            <AddCategory store={configureStore} categories={configureStore.categories} />
            <h3>Todos</h3>
            <TodoListWithNull />
        </div>
    );
};
