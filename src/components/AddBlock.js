import React from 'react';
import PropTypes from 'prop-types';

class AddBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    addTodo() {
        const todo = this.state.value;
        if (!todo.trim()) {
            return;
        }
        this.setState({value: ''})
        this.props.onAddClick(todo);
    }

    render() {
        return (
            <div>
                <h3>Add todos</h3>
                <form onSubmit={e => {
                    e.preventDefault()
                }}>
                    <input onChange={this.handleChange} value={this.state.value}/>
                    <button type="submit" onClick={() => this.addTodo()}>
                        Add a todo
                    </button>
                </form>
                <p>{!this.state.value ? 'Please, write a todo.' : `You are typing ${this.state.value}.`}</p>
            </div>
        )
    }
}

AddBlock.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

export default AddBlock