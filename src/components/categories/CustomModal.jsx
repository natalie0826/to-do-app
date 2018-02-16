import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Effect} from 'react-dynamic-modal';

import { AddCategory } from '../../containers/AddCategory';
import '../../styles/modal.css';

export const CustomModal = (props) => {
    CustomModal.propTypes = {
        store: PropTypes.object,
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
            <AddCategory store={props.store}/>
        </Modal>
    );
};
