import React from 'react';
import PropTypes from 'prop-types';

import { DeletingTodo } from './common/DeletingTodo';
import { EditTodo } from '../containers/EditTodo';
import '../styles/todo.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Todo extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        deleted: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        delete: PropTypes.func.isRequired,
        toggle: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            showDeleteConfirmation: false,
            compl: this.props.completed
        };
    }

    setEditStatus = () => {
        if(!this.props.completed) {
            this.setState({isEditing: !this.state.isEditing});
        }
    }

    confirmDeleting = (id, sureToDelete) => {
        this.setState((prevState) => ({showDeleteConfirmation: !prevState.showDeleteConfirmation}));
        if (sureToDelete) {
            this.props.delete(id);
        }
    }

    handleChange = () => {
        this.setState({compl: !this.state.compl});
        this.props.toggle(this.props.id);
    }

    render() {
        const {
            id,
            text,
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
            'todo-display': deleted
        });
        const todoCompleted = classNames({
            'todo-completed': completed
        });
        
        return (
            <div className={todoClass}>
                {!this.state.showDeleteConfirmation
                    ?   <div className="todo">
                            <div className={todoTextClass}>
                                {!this.state.isEditing
                                    ?   <div className="todo-info-card">
                                            <label className={todoCompleted}>
                                                <input type="checkbox" checked={this.state.compl} onChange={this.handleChange}/>
                                                {text}
                                            </label>
                                            <span className="category-todo">{category}</span>
                                            <div className="description">{description}</div>
                                        </div>
                                    :   <EditTodo isAddTodo={false} id={id} text={text} category={category} description={description} setEditStatus={this.setEditStatus}/>
                                }
                            </div>
                            <div className="buttons-wrapper">
                                {!this.state.isEditing
                                    ?   <div>
                                            {!completed && <button className="btn btn-edit" onClick={this.setEditStatus}>Edit</button>}
                                            <button className="btn btn-delete" onClick={this.confirmDeleting}>Delete</button>
                                        </div>
                                    : <button className="btn btn-delete" onClick={this.setEditStatus}>Cancel</button>
                                }
                            </div>
                        </div>
                    :   <DeletingTodo
                            confirm={(flag) => this.confirmDeleting(id, flag)}
                        />
                }
            </div>
        );
    }
}
