import React from 'react';
import PropTypes from 'prop-types';
import { ModalManager } from 'react-dynamic-modal';

import { CirclePicker } from 'react-color';
import '../../styles/modal.css';

export default class CategoriesBlock extends React.Component {
    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired,
        onCategoryAdd: PropTypes.func.isRequired
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
        console.log('color', color.hex);
        this.setState({ color: color.hex });
    };


    render(){
        return (
            <div className="category-modal">
                <h1>Please, enter a category and select a color for it.</h1>
                <h3>Remember, category should be unique.</h3>
                <hr />
                <input
                    className="add-category"
                    type="text"
                    placeholder="Category"
                    onChange={this.handleChange}
                    value={this.state.category}
                />
                <div className="categories">
                    <p>All the categories</p>
                    {this.props.categories.map((category) => {
                        return  <span
                                    key={category.category}
                                    className="category-todo category-badge"
                                    style={{'backgroundColor': category.color}}>
                                    {category.category}
                                </span>;
                    })}
                </div>
                {!this.state.color
                    ? <p><i>Select color for a category: </i></p>
                    : <p style={{'color': this.state.color}}><i>You selected {this.state.color} color</i></p>
                }
                <CirclePicker
                    onSwatchHover={this.handleChangeComplete}
                />
                
                <div className="buttons-wrapper modal-footer">
                    <button className="btn btn-add" onClick={() => this.props.onCategoryAdd(this.state.category, this.state.color)}>Add category</button>
                    <button className="btn btn-delete" onClick={ModalManager.close}>Close Modal</button>
                </div>
            </div>
        );
     }
}
