import React from 'react';
import PropTypes from 'prop-types';
import { FilterLink } from '../../containers/FilterLink';
import ToggleButton from 'react-toggle-button';

import '../../styles/todo.css';

export default class FilterBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true
        };
    }

    render() {
        return (
            <div className="filter">
                <hr /> 
                {/* <ToggleButton
                    value={ this.state.value }
                    onToggle={(value) => {
                        console.log(value);
                      this.setState({
                        value: !value,
                      });}} />
                
                {this.state.value 
                    ? <FilterLink filter="SHOW_ALL">All</FilterLink>
                    : <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
                } */}
                 <button className="btn btn-filter">
                    <FilterLink filter="SHOW_ACTIVE">Not completed</FilterLink>
                </button>
                <button className="btn btn-filter">
                    <FilterLink filter="SHOW_ALL">ALL</FilterLink>
                </button>
                <hr />
            </div>
        );
    }
};
