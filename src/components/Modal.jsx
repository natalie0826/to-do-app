import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Modal extends React.Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        show: PropTypes.bool,
        children: PropTypes.node
    }

    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="backdrop">
                <div className="modal">
                    <span className="close-modal" onClick={this.props.onClose}>
                        <i className="fa fa-window-close" aria-hidden="true"></i>
                    </span>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
