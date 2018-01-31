import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const Modal = (props) => {
    Modal.propTypes = {
        onClose: PropTypes.func.isRequired,
        show: PropTypes.bool,
        children: PropTypes.node
    }

    if(props.show) {
        return null;
    }

    return (
        <div className="backdrop">
            <div className="modal">
                <span className="close-modal" onClick={props.onClose}>
                    <i className="fa fa-window-close" aria-hidden="true"></i>
                </span>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
