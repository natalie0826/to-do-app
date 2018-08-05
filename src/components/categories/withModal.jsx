import React from 'react';
import { Modal, Effect} from 'react-dynamic-modal';

import '../../styles/modal.css';

export const withModal = (store, closeCallback) = (ComposedCompoent) => 
    class withModal extends React.Component {
        render() {
            const style = {
                content: {
                    width: '600px',
                    margin: '15px auto'
                }
            };

            return (
                <Modal
                    style={style}
                    onRequestClose={closeCallback}
                    effect={Effect.Fall}>
                    <ComposedComponent store={store}/>
                </Modal>
            );
        }
    };
