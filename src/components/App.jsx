import React from 'react';
import ShowTodoList from '../containers/ShowTodoList';
import AddTodo from '../containers/AddTodo';
import FilterBlock from './FilterBlock';
import '../styles/todo.css';

export default class App extends React.Component {
    render() {
        return (
            <div class="container">
                <h3>Todos</h3>
                <AddTodo />
                <FilterBlock />
                <ShowTodoList />
            </div>
        )
    }
}
