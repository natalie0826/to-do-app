import React from 'react';
import FilterLink from '../containers/FilterLink';
import '../styles/filter.css'

const FilterBlock = () => (
    <div className="filter">
        <button className="filter-button">
            <FilterLink filter="SHOW_ALL">All</FilterLink>
        </button>
        <button className="filter-button">
            <FilterLink filter="SHOW_ACTIVE">Not completed</FilterLink>
        </button>
        <button className="filter-button">
            <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        </button>
        <button className="filter-button">
            <FilterLink filter="SHOW_DELETED">Deleted</FilterLink>
        </button>
    </div>
);

export default FilterBlock;
