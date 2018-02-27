import React from 'react';
import PropTypes from 'prop-types';
import { ModalManager } from 'react-dynamic-modal';

import { CustomModal } from '../categories/CustomModal';
import { Select } from './Select';
import '../../styles/modal.css';

export default class Editor extends React.Component {
    static propTypes = {
        isAddTodo: PropTypes.bool.isRequired,
        addTodo: PropTypes.func,
        editTodo: PropTypes.func,
        addCategory: PropTypes.func.isRequired,
        categories: PropTypes.array.isRequired,
        text: PropTypes.string,
        category: PropTypes.string,
        description: PropTypes.string,
        setEditStatus: PropTypes.func,
        isVisible: PropTypes.bool
    }

    static defaultProps = {
        isVisible: true
    }

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text || '',
            category: this.props.category || '',
            description: this.props.description || ''
        };
    }

    handleTextChange = (event) => {
        this.setState({text: event.target.value});
    }

    handleCategoryChange = (value) => {
        this.setState({category: value});
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    }

    handleAddTodo(e) {
        e.preventDefault();
        e.stopPropagation();
        if(this.isDataValid()) {
            const category = this.state.category || this.props.categories[0].category;
            this.props.addTodo(this.state.text, category, this.state.description);
            this.setState({text: '', description: ''});
        }
    }

    handleEditTodo() {
        if(this.isDataValid()) {
            this.props.editTodo(this.props.id, this.state.text, this.state.category, this.state.description);
            this.props.setEditStatus();
        }
    }

    isDataValid() {
        if(!this.state.text.trim() || !this.state.description.trim()) {
            return false;
        }
        return true;
    }

    clearFields() {
        this.setState({ text: '', category: '', description: '' })
    }

    handleCategoryModal = () => {
        ModalManager.open(<CustomModal onRequestClose={() => true} store={this.props.store} categories={this.props.categories}/>);
    };

    render() {
        const addButton = <button className="btn btn-add" onClick={(e) => this.handleAddTodo(e)}>Add</button>;
        const saveButton = <button className="btn btn-add" onClick={() => this.handleEditTodo()}>Save</button>;

        if (this.props.isVisible) {
            return (
                <div className="todo-edit">
                    <input  className="add-todo"
                            type="text"
                            placeholder="Task"
                            onChange={this.handleTextChange}
                            value={this.state.text} />
                    <Select class="select-category"
                            selectedValue={this.state.category}
                            changeSelection={this.handleCategoryChange}
                            options={this.props.categories} />
                    <button className="btn btn-category" onClick={this.handleCategoryModal}>New category</button>
                    <textarea   className="description-todo"
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                                placeholder="Description"
                                rows="5" />
                    <button className="btn btn-clear" onClick={() => this.clearFields()}>Clear fields</button>
                    {this.props.isAddTodo ? addButton : saveButton}
                </div>
            );
        } else { return null; }
    }
}
