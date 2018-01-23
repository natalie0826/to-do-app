import React from 'react';
import ShowTodoList from '../containers/ShowTodoList';
import AddTodo from '../containers/AddTodo';
import FilterBlock from '../components/FilterBlock';

const App = () => (
    <div>
        <AddTodo />
        <ShowTodoList />
        <FilterBlock />
    </div>
)

export default App;
