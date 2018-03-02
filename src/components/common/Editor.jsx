import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { ModalManager } from 'react-dynamic-modal';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { CustomModal } from '../categories/CustomModal';
import { Select } from './Select';
import '../../styles/modal.css';

const validate = (values) => {
    const errors = {};
    if (!values.text) {
        errors.text = 'Required';
    } else if (values.text.length < 5) {
        errors.text = 'Must be 5 characters or more';
    } else if (values.text.length > 50) {
        errors.text = 'Must be 50 characters or less';
    }
    if (!values.category) {
        errors.category = 'Required';
    }
    return errors;
}

const warn = (values) => {
    const warnings = {};
    if (!values.description) {
        warnings.description = 'Hmm, you seem not to add a description...';
    }
    return warnings;
}

const renderField = ({
    input,
    placeholder,
    className,
    type,
    meta: {
        touched,
        error,
        warning
    }
}) => {
    const fieldClass = classNames(className, {'error': error});

    return (
        <div className="fields">
            <input className={fieldClass} {...input} placeholder={placeholder} type={type}/> {touched && ((error && <p>{error}</p>) || (warning && <p>{warning}</p>))}
        </div>
    );
}

let Editor = (props) => {
    Editor.propTypes = {
        isAddTodo: PropTypes.bool.isRequired,
        addTodo: PropTypes.func,
        editTodo: PropTypes.func,
        addCategory: PropTypes.func.isRequired,
        categories: PropTypes.array.isRequired,
        text: PropTypes.string,
        category: PropTypes.string,
        description: PropTypes.string,
        setEditStatus: PropTypes.func,
        isVisible: PropTypes.bool,
        store: PropTypes.object
    }

    Editor.defaultProps = {
        isVisible: true
    }

    const handleCategoryModal = () => {
        ModalManager.open(<CustomModal
            onRequestClose={() => true}
            store={props.store}
            categories={props.categories}/>);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isDataValid()) {
            const category = props.category || props.categories[0].category;
            props.isAddTodo
                ? props.addTodo(props.text, category, props.description)
                : props.editTodo(props.id, props.text, category, props.description);
            props.reset();
        }
    }

    const isDataValid = () => {
        if (props.text && props.description) {
            return true;
        } else {
            return false;
        }
    }

    const saveButton = <button
        type="submit"
        value="submit"
        className="btn btn-add"
        disabled={props.pristine}>
        {props.isAddTodo
            ? 'Add'
            : 'Save'}
    </button>;
    const resetButton = <button
        type="button"
        value="button"
        className="btn btn-clear"
        onClick={props.reset}>Reset</button>;
    const cancelButton = <button
        type="button"
        value="button"
        className="btn btn-clear"
        onClick={props.setEditStatus}>Cancel</button>;

    return (props.isVisible
        ? <form className="todo-edit" onSubmit={handleSubmit}>
                <Field
                    component={renderField}
                    name="text"
                    className="add-todo"
                    type="text"
                    placeholder="Task"/>
                <Field component="select" name="category" className="select-category">
                    {props
                        .categories
                        .map((category) => {
                            return (
                                <option value={category.category} key={category.category}>
                                    {category.category}
                                </option>
                            )
                        })}
                </Field>
                <button className="btn btn-category">New category</button>
                <Field
                    component={renderField}
                    name="description"
                    className="description-todo"
                    type="textarea"
                    placeholder="Description"/> {saveButton}
                {resetButton}
            </form>
        : ''
        // <form className="todo-edit" onSubmit={this.handleSubmit}>     <Field
        // component="input"             name="text"             className="add-todo"
        //          type="text"             placeholder="Task"
        // onChange={this.handleTextChange}             value={this.state.text} />
        // <Field  component="select"             name="category"
        // className="select-category">             {props.categories.map((category) =>
        // {                 return (                     <option
        // value={category.category} key={category.category}>
        // {category.category}                     </option>)             })}
        // </Field>     <button className="btn btn-category"
        // onClick={this.handleCategoryModal}>New category</button>     <Field
        // component="textarea"             name="description"
        // className="description-todo"             value={this.state.description}
        //       onChange={this.handleDescriptionChange}
        // placeholder="Description"             rows="5" />     {saveButton}
        // {props.isAddTodo ? resetButton : cancelButton} </form>
    );
}

const selector = formValueSelector('editor')

Editor = connect((state, ownProps) => {
    const text = selector(state, 'text');
    const description = selector(state, 'description');
    const category = selector(state, 'category');
    return {text, description, category}
})(Editor);

const mapStateToProps = (state, ownProps) => ({
    initialValues: {
        text: 'ownProps.text',
        description: 'ownProps.description',
        category: 'ownProps.category'
    }
});

Editor = reduxForm({
    form: 'editor',
    destroyOnUnmount: false,
    validate,
    warn,
    enableReinitialize: true
}, mapStateToProps)(Editor);

export default Editor;
