import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Effect} from 'react-dynamic-modal';

import { Categories } from '../../containers/Categories';
import '../../styles/modal.css';

export const CategoryModal = (props) => {
    CategoryModal.propTypes = {
        store: PropTypes.object,
        categories: PropTypes.array,
        onRequestClose: PropTypes.func.isRequired
    };

    return (
        
        <Modal
            className="modal"
            onRequestClose={props.onRequestClose}
            effect={Effect.Fall}
        >
            <Categories store={props.store}/>
        </Modal>
    );
};
