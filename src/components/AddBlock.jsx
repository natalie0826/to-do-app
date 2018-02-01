import React from 'react';
import PropTypes from 'prop-types';

export default class AddBlock extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isSmthEntered: true
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value, isSmthEntered: true});
    }

    addTodo(todo) {
        console.log('TODOOOOO', todo);
        if (todo === undefined || todo.length === 0) {
            console.log('if');
            this.setState({isSmthEntered: false});
        } else {
            console.log('else ---');
            this.setState({value: ''});
            this.props.addTodo(todo);
        }
    }

    render() {
        return (
            <div>
                <input
                    className="add-todo"
                    type="text"
                    placeholder="Task"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <button className="btn btn-add" onClick={this.addTodo}>
                    Add
                </button>
                <p className="todo-hint">{!this.state.isSmthEntered && 'Please, write smth you want to do :)'}</p>
                <hr />    
            </div>
        );
    }
}
