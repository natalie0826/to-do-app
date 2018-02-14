import React from 'react';
import PropTypes from 'prop-types';

import { Select } from './Select';
import '../../styles/modal.css';

export default class Editor extends React.Component {
    static propTypes = {
        isAddTodo: PropTypes.bool.isRequired,
        addTodo: PropTypes.func,
        editTodo: PropTypes.func,
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

    handleAddTodo() {
        if(this.isDataValid()) {
            this.props.addTodo(this.state.text, this.state.category, this.state.description, false, false);
            this.setState({text: '', description: ''});
        }
    }

    handleEditTodo() {
        if(this.isDataValid()) {
            this.props.editTodo(this.props.id, this.state.text, this.state.category, this.state.description);
            this.props.setEditStatus();
            this.setState({text: '', description: ''});
        }
    }

    isDataValid() {
        if(!this.state.text.trim() || !this.state.description.trim()) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <input  className="add-todo"
                        type="text"
                        placeholder="Task"
                        onChange={this.handleTextChange}
                        value={this.state.text} />
                <Select class="select-category"
                        selectedValue={this.state.category}
                        changeSelection={this.handleCategoryChange}
                        options={this.props.categories} />
                {this.props.isAddTodo
                    ? <button className="btn btn-add" onClick={() => this.handleAddTodo()}>Add</button>
                    : <button className="btn btn-add" onClick={() => this.handleEditTodo()}>Save</button>
                }
                <textarea
                    className="description-todo"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    placeholder="Description"
                    rows="5" cols="20"
                />            
            </div>
        );
    }
}
