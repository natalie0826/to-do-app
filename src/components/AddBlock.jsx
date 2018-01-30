import React from 'react';
import PropTypes from 'prop-types';

export default class AddBlock extends React.Component {
    static propTypes = {
        onAddClick: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isSmthEntered: true
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value, isSmthEntered: true})
    }

    addTodo() {
        const todo = this.state.value;
        if (!todo.trim()) {
            this.setState({isSmthEntered: false});
            return;
        }
        this.setState({value: ''});
        this.props.onAddClick(todo, new Date());
    }

    render() {
        const message = 'Please, enter something';

        return (
            <div>
                <h3>Add todos</h3>
                <input onChange={this.handleChange} value={this.state.value}/>
                <button type="submit" onClick={() => this.addTodo()}>
                    Add a todo
                </button>
                <p className="todo-hint">{!this.state.isSmthEntered && 'Please, write smth you want to do :)'}</p>
            </div>
        )
    }
}
