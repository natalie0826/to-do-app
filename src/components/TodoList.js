import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo';
import '../styles/todo.css';

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
  <table>
    <tbody>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onDelete={() => onDeleteClick(todo.id)}
          onChange={() => onTodoClick(todo.id)}
        />
      )}
    </tbody>
  </table>
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
