import React from 'react'
import PropTypes from 'prop-types'
import '../styles/todo.css';

const Link = (props) => {
    Link.propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    }

    if (props.active) {
        return <span>{props.children}</span>
    }
    
    return (
        <a onClick={e => {
            e.preventDefault()
            props.onClick()
        }}>
            {props.children}
        </a>
    )
}

export default Link;
