import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      console.log('SHOW_COMPLETED', todos.filter(t => t.completed));
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      console.log('SHOW_ACTIVE', todos.filter(t => t.completed));
      return todos.filter(t => !t.completed)
    case 'SHOW_DELETED':
      console.log('SHOW_DELETED', todos.filter(t => t.deleted));
      return todos.filter(t => t.deleted)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.filter)
})

const mapDispatchToProps = ({
  onDeleteClick: deleteTodo,
  onTodoClick: toggleTodo
})

const ShowTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ShowTodoList

