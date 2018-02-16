import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todos';

class TodoTry extends React.Component {
    constructor() {
        super();
        this.state = {
            // todos: this.props.data
        };
    }
    componentDidMount() {
        this.props.addTodo(this.props.data);
    }

    render() {
        return (
            <div>
                <div className="todos">
                    <ul>
                        {this.props.categories.map(category => <li key={category.category}>{category.category}</li>)}
                    </ul>
                    <ul>
                        {this.props.todos.map(todo => <li key={todo.text}>{todo.text}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        todos: props.data,
        categories: state.categories
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    addTodo: (data) => {
        props.data.map(one => dispatch(addTodo(one.text, one.text, one.text, false, false)));
    }
});

export const TodoTryMy = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoTry);