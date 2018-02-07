import React from 'react';
import PropTypes from 'prop-types';

import { DeleteBlock } from './layout blocks/DeleteBlock';
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
        onEditClick: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            showDeleteConfirmation: false
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
            this.props.onDelete(id);
        }
    }

    render() {

        const {
            onChange,
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
                                                <input type="checkbox" checked={completed} onChange={onChange} className="checkbox"/>
                                                {text}
                                            </label>
                                            <span className="category-todo">{category}</span>
                                            <div className="description">{description}</div>
                                        </div>
                                    :   <EditTodo isAddBlock={false} id={id} text={text} category={category} description={description} setEditStatus={this.setEditStatus}/>
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
                    :   <DeleteBlock
                            confirm={(flag) => this.confirmDeleting(id, flag)}
                        />
                }
            </div>
        );
    }
}
