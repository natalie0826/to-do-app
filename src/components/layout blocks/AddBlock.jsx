import React from 'react';
import PropTypes from 'prop-types';
import { ModalManager } from 'react-dynamic-modal';

import { CategoryModal } from '../categories/CategoryModal';
import '../../styles/modal.css';

export default class AddBlock extends React.Component {
    static propTypes = {
        onAddClick: PropTypes.func,
        onEditClick: PropTypes.func,
        isAddBlock: PropTypes.bool.isRequired,
        store: PropTypes.object,
        categories: PropTypes.array.isRequired,
        text: PropTypes.string,
        category: PropTypes.string,
        description: PropTypes.string,
        setEditStatus: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text || '',
            isSmthEntered: true,
            category: this.props.category || this.props.categories[0].category,
            description: this.props.description || ''
        };
    }

    handleChange = (event) => {
        this.setState({text: event.target.value, isSmthEntered: true});
    }

    addTodo() {
        if(this.validData()) {
            this.props.onAddClick(this.state.text, this.state.category, this.state.description);
        } else {
            return;
        }
    }

    editTodo() {
        if(this.validData()) {
            this.props.onEditClick(this.props.id, this.state.text, this.state.category, this.state.description);
            this.props.setEditStatus();
        } else {
            return;
        }
    }

    validData() {
        if (!this.state.text.trim() || !this.state.description.trim()) {
            this.setState({isSmthEntered: false});
            return false;
        }
        this.setState({text: '', description: ''});
        return true;
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
                    value={this.state.text}
                />
                <select className="select-category" value={this.state.category} onChange={this.handleCategoryChange}>
                    {this.props.categories.map((category) => {
                        return <option key={category.category.toString()} value={category.category}>{category.category}</option>;
                    })}
                    <option key="add" value="Add category">Add category</option>
                </select>
                {this.props.isAddBlock
                    ? <button className="btn btn-add" onClick={() => this.addTodo()}>Add</button>
                    : <button className="btn btn-add" onClick={() => this.editTodo()}>Save</button>
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