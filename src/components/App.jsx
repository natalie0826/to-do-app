import React from 'react';
import { ShowTodoList } from '../containers/ShowTodoList';
import { AddTodo } from '../containers/AddTodo';
import { FilterBlock } from './FilterBlock';
import '../styles/todo.css';

export const App = () => {
    return (
        <div className="container">
            <h3>Todos</h3>
            <AddTodo isAddBlock={true} />
            <FilterBlock />
            <ShowTodoList />
        </div>
    );
};
