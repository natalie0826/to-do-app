import React from 'react';
import PropTypes from 'prop-types';

import { DeleteBlock } from './DeleteBlock';
import { EditTodo } from '../containers/EditTodo';
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
            todoText: props.text
        };
    }

    notificationSystem = null;

    startEdit = () => {
        if(!this.props.completed) {
            this.setState({isEditing: true});
        }
    }

    endEdit = (id, text) => {
        this.setState({isEditing: false});
        this.props.onEditClick(id, text);
    }

    confirmDeleting = (id, sureToDelete) => {
        this.setState((prevState) => ({showDeleteConfirmation: !prevState.showDeleteConfirmation}));
        if (sureToDelete) {
            this.props.onDelete(id);
        }
    }

    handleChange = (event) => {
        this.setState({todoText: event.target.value});
    }

    render() {

        const {
            onChange,
            id,
            description,
            category,
            deleted,
            completed
        } = this.props;

        const classNames = require('classnames');
        const todoTextClass = classNames({
            'label-checkbox': true,
            'todo-info': true,
            'todo-odd': id % 2
        });
        const todoClass = classNames({
            'todo': true,
            'todo-display': deleted
        });
        const todoCompleted = classNames({
            'todo-completed': completed
        })
        
        return (
            <div className={todoClass}>
                {!this.state.showDeleteConfirmation
                    ?   <li className="todo">
                            <div className={todoTextClass}>
                                {!this.state.isEditing
                                    ?   <div className="todo-info-card">
                                            <label className="todoCompleted">
                                                <input type="checkbox" checked={completed} onChange={onChange} className="checkbox"/>
                                                {this.state.todoText}
                                            </label>
                                            <span className="category-todo">{category}</span>
                                            <p className="description">{description}</p>
                                        </div>
                                    :   <EditTodo isAddBlock={false} />
                                }
                            </div>
                            <div className="buttons-wrapper">
                                {!this.state.isEditing
                                    ? <button className="btn btn-edit" onClick={this.startEdit}> Edit </button>
                                    : <button className="btn btn-edit" onClick={() => this.endEdit(id, this.state.todoText)}>Save</button>}
                                <button className="btn btn-delete" onClick={this.confirmDeleting}> Delete </button>
                            </div>
                        </li>
                    :   <DeleteBlock
                            confirm={(flag) => this.confirmDeleting(id, flag)}
                        />
                }
            </div>
        );
    }
}
