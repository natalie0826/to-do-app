import React from 'react';
import PropTypes from 'prop-types';
import { ModalManager } from 'react-dynamic-modal';

import { withModal } from '../categories/withModal';
import { AddCategories } from '../../containers/AddCategories';

export const AddCategory = (props) => {
    AddCategory.propTypes = {
        store: PropTypes.object.isRequired,
        categories: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        }).isRequired).isRequired
    };

    const handleCategoryModal = () => {
        const categoryModal = withModal(props.store, true)(AddCategories);
        ModalManager.open(categoryModal);
    };

    return (
        <div className="buttons-wrapper-category">
            <button className="btn btn-add" onClick={handleCategoryModal}>Add new category</button>
        </div>
    );
    
};
