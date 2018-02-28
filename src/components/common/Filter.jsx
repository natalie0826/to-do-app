import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-toggle-button';

import '../../styles/todo.css';

export default class Filter extends React.Component {
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
        value ? this.props.onClick('SHOW_ALL') : this.props.onClick('SHOW_ACTIVE');
    }

    render() {
        return (
            <div className="filter">
                <span className="filter-hint">Show all tasks</span>
                <ToggleButton   value={ this.state.value }
                                onToggle={(value) => this.handleChange(value)} />
            </div>
        );
    }
};
