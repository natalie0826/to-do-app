import React from 'react';
import { ShowTodoList } from '../containers/ShowTodoList';
import { AddTodo } from '../containers/AddTodo';
import { FilterBlock } from './FilterBlock';
import '../styles/todo.css';

const App = () => {
    return (
        <div className="container">
            <h3>Todos</h3>
            <AddTodo />
            <FilterBlock />
            <ShowTodoList />
        </div>
    )
}

export default App;
