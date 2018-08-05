import React from 'react';
import PropTypes from 'prop-types';
import {ModalManager} from 'react-dynamic-modal';

import {CirclePicker} from 'react-color';
import '../../styles/modal.css';

export default class CategoriesBlock extends React.Component {
    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired,
        addCategory: PropTypes.func.isRequired
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
        const categories = this.props.categories
            .map((category) => {
                return <span
                    key={category.category}
                    className="category-badge"
                    style={{
                    'backgroundColor': category.color
                }}>
                    {category.category}
                </span>;
            });

        return (
            <div className="category-modal">
                <h1>Please, enter a category and select a color for it.</h1>
                <h3>Category should be unique.</h3>
                <hr/>
                <input
                    className="add-category"
                    type="text"
                    placeholder="Category"
                    onChange={this.handleChange}
                    value={this.state.category} />
                <div className="categories">
                    <p>All the categories</p>
                    {categories}
                </div>
                {!this.state.color
                    ? <p><i>Color for a category:</i></p>
                    : <p style={{'color': this.state.color}}><i>{this.state.color}</i></p>}
                <CirclePicker onChange={this.handleChangeComplete}/>
                <div className="buttons-wrapper modal-footer">
                    <button className="btn btn-add" onClick={this.handleAddCategory}>Add category</button>
                    <button className="btn btn-del" onClick={ModalManager.close}>Close Modal</button>
                </div>
            </div>
        );
    }
}
