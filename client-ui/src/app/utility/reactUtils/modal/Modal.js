import React from 'react';
import Classes from './Modal.module.scss';

const Modal = ({children}) => {
    return (
        <div className = {Classes.modal}>
            <div className={Classes.Modal_main}>
                {children}
            </div>
        </div>

    );
}

export default Modal;