import React from 'react'
import PropTypes from 'prop-types'
import EditTodo from '../containers/EditTodo';
import '../styles/todo.css';

class TodoList extends React.Component {
  render() {
    const {
      todos,
      onTodoClick,
      onDeleteClick,
      onRestoreClick
    } = this.props;

    return (
      <div>
          <h3>Should do</h3>
          {todos.map(todo =>
            <EditTodo
              key={todo.id}
              {...todo}
              onDelete={() => onDeleteClick(todo.id)}
              onChange={() => onTodoClick(todo.id)}
            />
          )}
          {todos.find(todo => todo.deleted) ?
            <button className="restore-deleted" onClick={() => onRestoreClick()}>Restore deleted</button> : ''
          }
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onRestoreClick: PropTypes.func.isRequired
}

export default TodoList
