import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import { addTodo, editTodo, toggleTodo, deleteTodo, fetchTodos } from '../actions/todos';
import { addCategory, fetchCategories } from '../actions/categories';
import TodoApp from '../components/TodoApp';

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
    }
};

const mapDispatchToProps = (dispatch) => ({
    addCategory: addCategory,
    fetchTodos: (url) => dispatch(fetchTodos(url)),
    fetchCategories: (url) => dispatch(fetchCategories(url)),
    editTodo: editTodo,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    toggleTodo: toggleTodo,
    undo: UndoActionCreators.undo,
});

export const ShowTodoApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);
