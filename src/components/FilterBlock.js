import React from 'react';
import FilterLink from '../containers/FilterLink';
import '../styles/filter.css'

const FilterBlock = () => (
    <div>
        <button className="filter">
            <FilterLink filter="SHOW_ALL">All</FilterLink>
        </button>
        <button className="filter">
            <FilterLink filter="SHOW_ACTIVE">Not completed</FilterLink>
        </button>
        <button className="filter">
            <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        </button>
    </div>
);

export default FilterBlock;
