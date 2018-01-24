import React from 'react';
import ShowTodoList from '../containers/ShowTodoList';
import AddTodo from '../containers/AddTodo';
import FilterBlock from '../components/FilterBlock';

const App = () => (
    <div className="to-do-app">
        <h2>Welcome to the To-Do!</h2>
        <div className="add-todos">
            <AddTodo />
            <ShowTodoList />
        </div>
        <div className="filter-todos">
            <FilterBlock />
        </div>
    </div>
)

export default App;
