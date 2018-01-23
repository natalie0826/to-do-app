import React from 'react';
import ShowTodoList from '../containers/ShowTodoList';
import AddTodo from '../containers/AddTodo';
import FilterBlock from '../components/FilterBlock';

const App = () => (
    <div className="to-do">
        <h2>Welcome to the To-Do!</h2>
        <AddTodo />
        <ShowTodoList />
        <FilterBlock />
    </div>
)

export default App;
