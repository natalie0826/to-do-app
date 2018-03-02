import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { DeletingTodo } from '../common/DeletingTodo';
import { TodoInfo } from './TodoInfo';
import Editor from '../common/Editor';
import '../../styles/todo.css';

export default class TodoWrap extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        deleted: PropTypes.bool.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        categories: PropTypes.array.isRequired,
        addCategory: PropTypes.func.isRequired,
        store: PropTypes.object
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
            this.props.deleteTodo(id);
        }
    }

    handleChange = () => {
        this.props.toggleTodo(this.props.id, !this.props.completed);
    }

    render() {
        const {
            id,
            completed,
            deleted,
        } = this.props;

        const todoClass = classNames({
            'hide-element': deleted || this.state.showDeleteConfirmation
        });

        const buttonsClass = classNames('buttons-wrapper', {
            'hide-element': this.state.isEditing
        });

        const deleteConfirmClass = classNames({
            'hide-element': !this.state.showDeleteConfirmation
        })
        
        return (
            <div className="todo">
                <div className={todoClass}>       
                    <TodoInfo {...this.props} isVisible={!this.state.isEditing} setAsCompleted={this.handleChange} />
                    <Editor form={'todo-' + id} isAddTodo={false} isVisible={this.state.isEditing} setEditStatus={this.setEditStatus} {...this.props} />
                    <div className={buttonsClass}>
                        {!completed && <button className="btn btn-edit" onClick={this.setEditStatus}>Edit</button>}
                        <button className="btn btn-delete" onClick={this.confirmDeleting}>Delete</button>
                    </div>  
                </div>
                <div className={deleteConfirmClass}>
                    <DeletingTodo confirm={(flag) => this.confirmDeleting(id, flag)} />
                </div>
            </div>
        );
    }
}
