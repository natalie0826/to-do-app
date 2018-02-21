import React from 'react';
import PropTypes from 'prop-types';
import { ModalManager } from 'react-dynamic-modal';
import { CirclePicker } from 'react-color';

import { CategoriesList } from './CategoriesList';
import '../../styles/modal.css';

export default class CategoriesModal extends React.Component {
    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired,
        addCategory: PropTypes.func.isRequired,
        store: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            color: '',
            category: ''
        };
    }

    handleChange = (event) => {
        this.setState({category: event.target.value});
    }

    handleChangeComplete = (color) => {
        this.setState({color: color.hex});
    };

    handleAddCategory = () => {
        if (this.state.category.trim()) {
            this.props.addCategory(this.state.category, this.state.color);
        }
        this.setState({category: ''});
    }

    render() {
        return (
            <div className="category-modal">
                <h1>Please, enter a category and select a color for it.</h1>
                <h3>Categories should be unique.</h3>
                <hr/>
                <input
                    className="add-category"
                    type="text"
                    placeholder="Category"
                    onChange={this.handleChange}
                    value={this.state.category}/>
                <CategoriesList title="All the categories" categories={this.props.categories} />
                <p style={{'color': this.state.color}}><i>Color for a category: {this.state.color}</i></p>
                <CirclePicker onChange={this.handleChangeComplete}/>
                <div className="buttons-wrapper modal-footer">
                    <button className="btn btn-add" onClick={this.handleAddCategory}>Add category</button>
                    <button className="btn btn-del" onClick={ModalManager.close}>Close Modal</button>
                </div>
            </div>
        );
    }
}
