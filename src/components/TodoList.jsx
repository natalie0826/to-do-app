import React from 'react'
import PropTypes from 'prop-types'
import EditTodo from '../containers/EditTodo';
import '../styles/todo.css';

export default class TodoList extends React.Component {
    static propTypes = {
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

    constructor() {
        super();
        this.state = {
        search: ''
        };

        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        const {
        todos,
        onTodoClick,
        onDeleteClick,
        onRestoreClick
        } = this.props;

        // It isn't a state because filteredTodos can be computed by combining user input in search box and todos array from props.
        let filteredTodos = todos.filter(
        (todo) => {
            return todo.text.includes(this.state.search.toLowerCase());
        }
        );

        return (
        <div>
            <h3>Should do {filteredTodos.length} todos</h3>

            <input type="text" placeholder="Search. . ." value={this.state.search} onChange={this.updateSearch} />

            {filteredTodos.map(todo =>
                <EditTodo
                key={todo.id}
                {...todo}
                onDelete={() => onDeleteClick(todo.id)}
                onChange={() => onTodoClick(todo.id)}
                />
            )}

            {filteredTodos.find(todo => todo.deleted) &&
                <button className="restore-deleted" onClick={() => onRestoreClick()}>Restore deleted</button>
            }
        </div>
        )
    }
}
