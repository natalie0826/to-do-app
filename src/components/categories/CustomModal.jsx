import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Effect} from 'react-dynamic-modal';

import { ShowCategories } from '../../containers/ShowCategories';
import '../../styles/modal.css';

export const CustomModal = (props) => {
    CustomModal.propTypes = {
        onRequestClose: PropTypes.func.isRequired
    };

    const style = {
        content: {
            width: '600px',
            margin: '15px auto'
        }
    };

    return (
        <Modal
            style={style}
            onRequestClose={props.onRequestClose}
            effect={Effect.Fall}>
            <ShowCategories store={props.store} />
        </Modal>
    );
};