import React from 'react';
import { FilterLink } from '../containers/FilterLink';
import '../styles/todo.css';

export const FilterBlock = () => {
    return (
        <div className="filter">
            <hr /> 
            <button className="btn btn-filter">
                <FilterLink filter="SHOW_ALL">All</FilterLink>
            </button>
            <button className="btn btn-filter">
                <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </button>
            <button className="btn btn-filter">
                <FilterLink filter="SHOW_ACTIVE">Not completed</FilterLink>
            </button>
            <hr />
        </div>
    );
};
