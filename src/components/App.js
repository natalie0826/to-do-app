import React from 'react';
import ShowTodoList from '../containers/ShowTodoList';
import AddTodo from '../containers/AddTodo';
import FilterBlock from '../components/FilterBlock';

const App = () => (
    <div className="to-do-app">
        <h2>Welcome to the To-Do!</h2>
        <div className="add-todos">
            <h3>Add todos</h3>
            <AddTodo />
            <h3>Should do</h3>
            <ShowTodoList />
        </div>
        <div className="filter-todos">
            <h3>Filter todos</h3>
            <FilterBlock />
        </div>
    </div>
)

export default App;
