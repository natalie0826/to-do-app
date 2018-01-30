import React from 'react';
import ShowTodoList from '../containers/ShowTodoList';
import AddTodo from '../containers/AddTodo';
import FilterBlock from '../components/FilterBlock';
import Composition from './Composition';

export default class App extends React.Component {
    render() {
        return (
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
    }
}
