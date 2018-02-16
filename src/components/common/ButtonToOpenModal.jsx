import React from 'react';
import PropTypes from 'prop-types';
import { ModalManager } from 'react-dynamic-modal';

import { CustomModal } from '../categories/CustomModal';

export const ButtonToOpenModal = (props) => {
    ButtonToOpenModal.propTypes = {
        store: PropTypes.object.isRequired
    };

    const handleCategoryModal = () => {
        ModalManager.open(<CustomModal onRequestClose={() => true} store={props.store} />);
    };

    return (
        <div className="buttons-wrapper-category">
            <button className="btn btn-add" onClick={handleCategoryModal}>Add new category</button>
        </div>
    );
    
};
