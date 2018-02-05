import React from 'react';
import PropTypes from 'prop-types';

export default class AddBlock extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        isAddBlock: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isSmthEntered: true,
            category: 'work',
            description: ''
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value, isSmthEntered: true});
    }

    addTodo() {
        const todo = this.state.value;
        if (!todo.trim() || !this.state.description.trim()) {
            this.setState({isSmthEntered: false});
            return;
        }
        this.setState({value: '', description: ''});
        this.props.addTodo(todo, this.state.category, this.state.description);
    }

    handleCategoryChange = (event) => {
        this.setState({category: event.target.value});
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    }

    render() {
        const categories = ["work", "home", "reading", "cleaning"];

        return (
            <div>
                <input
                    className="add-todo"
                    type="text"
                    placeholder="Task"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <select className="select-category" value={this.state.category} onChange={this.handleCategoryChange}>
                    {categories.map((category) => {
                        return <option key={category.toString()} value={category}>{category}</option>
                    })}
                </select>
                <button className="btn btn-add" onClick={() => this.addTodo()}>
                    {this.props.isAddBlock ? 'Add' : 'Save'}
                </button>
                <textarea
                    className="description-todo"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    placeholder="Description"
                    rows="5" cols="20"
                />
                <p className="todo-hint">{!this.state.isSmthEntered && 'Please, write smth you want to do :)'}</p>
                <hr />    
            </div>
        );
    }
}
