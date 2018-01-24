import React from 'react'
import PropTypes from 'prop-types'
import EditTodo from '../containers/EditTodo';
import '../styles/todo.css';

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
  <div>
      {todos.map(todo =>
        <EditTodo
          key={todo.id}
          {...todo}
          onDelete={() => onDeleteClick(todo.id)}
          onChange={() => onTodoClick(todo.id)}
        />
      )}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default TodoList
