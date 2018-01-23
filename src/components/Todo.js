import React from 'react'
import PropTypes from 'prop-types'
import '../styles/todo.css'

class Todo extends React.Component {
  render () {

    const {
      onChange,
      onDelete,
      deleted,
      completed,
      text
    } = this.props;
    
    return (
      <li
        style={{
          display:  deleted ? 'none' : 'block'
        }}
      >
      <input type="checkbox" checked={completed} onChange={onChange}/>
      <span
        onClick={onChange}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}>{text}</span>
      <span className="delete-todo" onClick={onDelete}>х</span>
      </li>
    )
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Todo
