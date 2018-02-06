import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/todo.css';

export default class Link extends React.Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node,
        onClick: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.onClick();
    }
    
    render() {
        return (
            <div>
                {this.props.active && <span>{this.props.children}</span>}
            </div>
        );
    }
};
