import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import '../styles/todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todoText: props.text,
      isOpenModal: false
    }

    this.startEdit = this.startEdit.bind(this);
    this.endEdit = this.endEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  startEdit() {
    if(!this.props.completed) {
      this.setState({isEditing: true});
    }
  }

  endEdit(id, text) {
    this.setState({isEditing: false});
    this.props.onEditClick(id, text);
  }

  handleChange(event) {
    this.setState({todoText: event.target.value});
  }

  toggleModal() {
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
        <input type="checkbox" checked={completed} onChange={onChange}/>
          <span
            onClick={this.startEdit}
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}>{!this.state.isEditing ? this.state.todoText : ''}</span>
            {this.state.isEditing ? <div className="edit-todo">
                                      <input value={this.state.todoText} onChange={this.handleChange}/>
                                      <button onClick={() => this.endEdit(id, this.state.todoText)}>Save</button>
                                    </div> : ''
            }
            {!this.state.isEditing ?
              <button onClick={this.toggleModal}>More</button> : '' }
          <span className="delete-todo" onClick={onDelete}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </span>
          <Modal
              show={this.state.isOpenModal}
              onClose={this.toggleModal}>
                <h3>Todo info</h3>
                <p>ID: {id}</p>
                <p>TEXT: {text}</p>
                <p>CREATE: {date.toLocaleString('ru-RU')}</p>
          </Modal>
      </div>
    )
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
}

export default Todo
