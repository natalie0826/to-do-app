import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-toggle-button';

import '../../styles/todo.css';

export default class FilterBlock extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            value: true
        };
    }

    handleChange = (value) => {
        this.setState({value: !value});
        if(!value === true) {
            this.props.onClick('SHOW_ALL');
        } else {
            this.props.onClick('SHOW_ACTIVE');
        }
    }

    render() {
        return (
            <div className="filter">
                <span className="filter-hint">{this.state.value ? 'Show all the tasks' : 'Show only uncompleted tasks'}</span>
                <ToggleButton
                    value={ this.state.value }
                    onToggle={(value) => this.handleChange(value)}
                />
            </div>
        );
    }
};
