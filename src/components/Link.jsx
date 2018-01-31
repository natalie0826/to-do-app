import React from 'react'
import PropTypes from 'prop-types'
import '../styles/todo.css';

export default class Link extends React.Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    }

    if (active) {
        return <span>{this.props.children}</span>
    }
    
    render() {
        const {
            active,
            children,
            onClick
        } = this.props;

        return (
            <a onClick={e => {
                e.preventDefault()
                onClick()
            }}>
                {children}
            </a>
        )
    }
}
