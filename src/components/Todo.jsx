import React from 'react';
import PropTypes from 'prop-types';
import '../styles/todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Todo extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        deleted: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        onEditClick: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            showDeleteConfirmation: false,
            todoText: props.text,
            isOpenModal: false
        }
    }

    startEdit = () => {
        if(!this.props.completed) {
            this.setState({isEditing: true});
        }
    }

    endEdit = (id, text) => {
        this.setState({isEditing: false});
        this.props.onEditClick(id, text);
    }

    toDelete = () => {
        this.setState({showDeleteConfirmation: !this.state.showDeleteConfirmation});
    }

    handleChange = (event) => {
        this.setState({todoText: event.target.value});
    }

    toggleModal = () => {
        this.setState({isOpenModal: !this.state.isOpenModal});
    }

    render() {

        const {
            onChange,
            onDelete,
            id,
            text,
            deleted,
            completed
        } = this.props;

        const classNames = require('classnames');
        const todoTextClass = classNames({
            'label-checkbox': true,
            'todo-text': true,
            'todo-completed': completed,
            'todo-odd': id % 2
        });
        const todoClass = classNames({
            'todo': true,
            'todo-display': deleted
        })
        
        return (
            <div className={todoClass}>
                <li className="todo">
                    <label className={todoTextClass} onClick={this.toggleModal}>
                        <input type="checkbox" checked={completed} onChange={onChange} class="checkbox"/>
                        {!this.state.isEditing && this.state.todoText}
                    </label>
                    {this.state.isEditing && <input className="edit-todo" value={this.state.todoText} onChange={this.handleChange}/>}
                    <div className="buttons-wrapper">
                        {!this.state.isEditing
                            ? <button className="btn btn-edit" onClick={this.startEdit}> Edit </button>
                            : <button className="btn btn-edit" onClick={() => this.endEdit(id, this.state.todoText)}>Save</button>}
                        {this.state.showDeleteConfirmation
                            ?   <div className="delete">
                                    <span>Are you sure to delete?</span>
                                    <button className="btn btn-edit" onClick={() => {onDelete(); this.toDelete()}}>Yes</button>
                                    <button className="btn btn-delete" onClick={this.toDelete}>No</button>
                                </div>
                            : <button className="btn btn-delete" onClick={this.toDelete}> Delete </button>}
                    </div>
                </li>
            </div>
        );
    }
}
