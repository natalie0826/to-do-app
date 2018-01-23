import React from 'react'
import PropTypes from 'prop-types'
import '../styles/todo.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

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
      <tr
        className="todo"
        style={{
          display:  deleted ? 'none' : 'block'
        }}
      >
        <td>
          <input type="checkbox" checked={completed} onChange={onChange}/>
        </td>
        <td>
          <span
            onClick={onChange}
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}>{text}</span>
        </td>
        <td>
          <span className="delete-todo" onClick={onDelete}><i className="fa fa-trash-o" aria-hidden="true"></i></span>
        </td>
      </tr>
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
