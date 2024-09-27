import React from 'react';
import { createPortal } from 'react-dom';
import { display, justifyContent, minWidth, overflow } from 'styled-system';
import { Flex } from '../style/StyledElements';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return createPortal(
        <div style={styles.backdrop} onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <Flex justifyContent='center'>{children}</Flex>
            </div>
        </div>,
        document.body
    );
};

const styles = {
    backdrop: {
        position: 'fixed',
        top: 0,
        left: '35%',
        right: 0,
        bottom: 0,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        width:'36%'
    },
    modal: {
        boxShadow: '0 0px 17px rgba(0, 0, 0, 6)',

        background: 'white',
        padding: '20px',
        borderRadius: '5px',
        position: 'relative',
        margin: '0 auto',
        display:'flex',
        justifyContent:'center',
        overflow:'auto'
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '1.5em',
        cursor: 'pointer',
    },
};

export default Modal;
