import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { toggleTodo, deleteTodo, fetchTodos } from '../actions/actions';
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

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetch: () => dispatch(fetchTodos()),
    deleteTodo: deleteTodo,
    toggleTodo: toggleTodo,
    search: '',
    undo: UndoActionCreators.undo,
});

export const ShowTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
