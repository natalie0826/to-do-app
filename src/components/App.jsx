import React from 'react';
import ShowTodoList from '../containers/ShowTodoList';
import AddTodo from '../containers/AddTodo';
import FilterBlock from '../components/FilterBlock';
import Composition from './Composition';

const App = () => (
    <Composition header="Welcome to the To-Do!"
        left={
            <div>
                <AddTodo />
                <ShowTodoList />
            </div>
        }
        right={
            <FilterBlock />
        }
    />
)

export default App;
