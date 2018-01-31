import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
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
            isStartDeleting: false,
            hasConfirmedDelete: false,
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
        this.setState((prevState) => ({isStartDeleting: !prevState.isStartDeleting}));
    }

    handleChange = (event) => {
        this.setState({todoText: event.target.value});
    }

    toggleModal = () => {
        this.setState({isOpenModal: !this.state.isOpenModal})
    }

    render() {

        const {
            onChange,
            onDelete,
            id,
            text,
            date,
            deleted,
            completed
        } = this.props;
        
        return (
        <div
            className="todo"
            style={{
            display:  deleted ? 'none' : 'block'
            }}
        >
            <li class="todo">
                <input type="checkbox" checked={completed} onChange={onChange}/>
                <span class="todo-text"
                    onClick={this.toggleModal}
                    style={{
                        textDecoration: completed ? 'line-through' : 'none',
                        color: id%2 ? '#DB4E3D' : '#1BBC9B'
                    }}>
                    {!this.state.isEditing && this.state.todoText}
                </span>
                {this.state.isEditing && <input class="edit-todo" value={this.state.todoText} onChange={this.handleChange}/>}
                <div class="buttons-wrapper">
                    {!this.state.isEditing
                        ? <button class="btn btn-edit" onClick={this.startEdit}> Edit </button>
                        : <button class="btn btn-edit" onClick={() => this.endEdit(id, this.state.todoText)}>Save</button>}
                    {this.state.isStartDeleting
                        ?   <div class="delete">
                                <span>Are you sure to delete?</span>
                                <button class="btn btn-edit" onClick={() => {onDelete(); this.toDelete()}}>Yes</button>
                                <button class="btn btn-delete" onClick={this.toDelete}>No</button>
                            </div>
                        : <button class="btn btn-delete" onClick={this.toDelete}> Delete </button>}
                </div>
            </li>


            <Modal
                show={this.state.isOpenModal}
                onClose={this.toggleModal}>
                    <h2>Todo info</h2>
                    <p>ID: {id}</p>
                    <p>TEXT: {text}</p>
                    <p>CREATE: {date.toLocaleString('ru-RU')}</p>
            </Modal>
        </div>
        )
    }
}
