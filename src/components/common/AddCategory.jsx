import React from 'react';
import PropTypes from 'prop-types';
import { ModalManager } from 'react-dynamic-modal';

import { CategoryModal } from '../categories/CategoryModal';

export const AddCategory = (props) => {
    AddCategory.propTypes = {
        store: PropTypes.object.isRequired,
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired
    };

    const handleCategoryModal = () => {
        ModalManager.open(<CategoryModal onRequestClose={() => true} store={props.store} categories={props.categories}/>);
    };

    console.log(props);

    return (
        <div className="buttons-wrapper-category">
            <button className="btn btn-add" onClick={handleCategoryModal}>Add new category</button>
        </div>
    );
    
};
