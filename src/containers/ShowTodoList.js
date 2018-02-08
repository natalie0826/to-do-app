import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, restoreTodos, fetchTodos } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos.present, state.filter),
        categories: state.categories
    };
    
};

const mapDispatchToProps = ({
    // onFetchClick: fetchTodos,
    onDeleteClick: deleteTodo,
    onTodoClick: toggleTodo,
    onRestoreClick: restoreTodos,
    search: ''
});

export const ShowTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
