import React from 'react';
import { ShowTodoList } from '../containers/ShowTodoList';
import { AddTodo } from '../containers/AddTodo';
import { FilterBlock } from './FilterBlock';
import { store } from '../store';
import '../styles/todo.css';

export const App = () => {
    return (
        <div className="container">
            <h3>Todos</h3>
            <AddTodo isAddBlock={true} store={store} categories={store.categories}/>
            <FilterBlock />
            <ShowTodoList />
        </div>
    );
};
