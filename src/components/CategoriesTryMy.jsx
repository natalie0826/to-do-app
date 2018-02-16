import React from 'react';
import { connect } from 'react-redux';

import { addCategory } from '../actions/categories';

class CategoriesTry extends React.Component {

    componentDidMount() {
        this.props.addCategory(this.props.data);
    }

    render() {
        return (
            <div>
                <div className="todos">
                    <ul>
                        {this.props.categories.map(category => <li key={category.category}>{category.category}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        categories: props.data
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    addCategory: (data) => {
        props.data.map(one => dispatch(addCategory(one)));
    }
});

export const CategoriesTryMy = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesTry);