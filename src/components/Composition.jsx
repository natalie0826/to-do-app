import React from 'react';
import PropTypes from 'prop-types';

export default class Composition extends React.Component {

    render() {
        return (
            <div className="to-do-app">
                <h2>{this.props.header}</h2>
                <div className="left">
                    {this.props.left}
                </div>
                <div className="right">
                    {this.props.right}
                </div>
            </div>
        )
    }
}

Composition.propTypes = {
    header: PropTypes.string.isRequired,
    left: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired
}
