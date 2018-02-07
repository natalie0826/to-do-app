import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/todo.css';

import ToggleButton from 'react-toggle-button';

export default class Link extends React.Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node,
        onClick: PropTypes.func.isRequired
    };

    render() {
        return (
            <a className="filter-not-active" onClick={e => { e.preventDefault(); this.props.onClick();}}>
                {this.props.children}
            </a>
        );
    }
};
