import React from 'react';
import FilterLink from '../containers/FilterLink';
import '../styles/todo.css'

export default class FilterBlock extends React.Component {
    render() {
        return (
            <div class="filter">
                <button class="btn btn-filter">
                    <FilterLink filter="SHOW_ALL">All</FilterLink>
                </button>
                <button class="btn btn-filter">
                    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
                </button>
                <button class="btn btn-filter">
                    <FilterLink filter="SHOW_ACTIVE">Not completed</FilterLink>
                </button>
                <hr />
            </div>
        )
    }
}
