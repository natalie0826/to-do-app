import React from 'react';
import PropTypes from 'prop-types';
import '../styles/todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todoText: props.text
    }

    this.startEdit = this.startEdit.bind(this);
    this.endEdit = this.endEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {

    const {
      onChange,
      onDelete,
      id,
      text,
      deleted,
      completed
    } = this.props;
    
    return (
      <tr
        className="todo"
        style={{
          display:  deleted ? 'none' : 'block'
        }}
      >
        <td>
          <input type="checkbox" checked={completed} onChange={onChange}/>
        </td>
        <td>
          <span
            onClick={this.startEdit}
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}>{!this.state.isEditing ? this.state.todoText : ''}</span>
            {this.state.isEditing ? <div>
                                      <input value={this.state.todoText} onChange={this.handleChange}/>
                                      <button onClick={() => this.endEdit(id, this.state.todoText)}>Save</button>
                                    </div> : ''
            }
        </td>
        <td>
          <span className="delete-todo" onClick={onDelete}><i className="fa fa-trash-o" aria-hidden="true"></i></span>
        </td>
      </tr>
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
