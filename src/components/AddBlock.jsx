import React from 'react';
import PropTypes from 'prop-types';
import { ModalManager } from 'react-dynamic-modal';

import { CategoryModal } from './CategoryModal';
import '../styles/modal.css';

export default class AddBlock extends React.Component {
    static propTypes = {
        onAddClick: PropTypes.func,
        onEditClick: PropTypes.func,
        isAddBlock: PropTypes.bool.isRequired,
        store: PropTypes.object,
        categories: PropTypes.array
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
        this.props.onAddClick(todo, this.state.category, this.state.description);
    }

    handleCategoryChange = (event) => {
        if (event.target.value !== 'Add category') {
            this.setState({category: event.target.value});
        } else {
           this.handleCategoryModal();
        }
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    }

    handleCategoryModal = () => {
        ModalManager.open(<CategoryModal onRequestClose={() => true} store={this.props.store} categories={this.props.categories}/>);
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
                <select className="select-category" value={this.state.category} onChange={this.handleCategoryChange}>
                    {this.props.categories.map((category) => {
                        return <option key={category.category.toString()} value={category.category}>{category.category}</option>;
                    })}
                    <option key="add" value="Add category">Add category</option>
                </select>
                {this.props.isAddBlock
                    ? <button className="btn btn-add" onClick={() => this.addTodo()}>Add</button>
                    : <button className="btn btn-add" onClick={() => this.editTodo()}>Edit</button>
                }
                <textarea
                    className="description-todo"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    placeholder="Description"
                    rows="5" cols="20"
                />
                <p className="todo-hint">{!this.state.isSmthEntered && 'Please, write smth you want to do :)'}</p>   
            
            </div>
        );
    }
}
