import React from 'react';
import FilterLink from '../containers/FilterLink';
import '../styles/filter.css'

export const FilterBlock = () => (
    <div className="filter">
        <h3>Filter todos</h3>
        <button className="filter-button">
            <FilterLink filter="SHOW_ALL">All</FilterLink>
        </button>
        <button className="filter-button">
            <FilterLink filter="SHOW_ACTIVE">Not completed</FilterLink>
        </button>
        <button className="filter-button">
            <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        </button>
    </div>
);
