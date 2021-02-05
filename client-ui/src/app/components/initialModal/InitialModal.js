//importing react modules
import React,{useState} from 'react';

//importing local react components
import Modal from "../../utility/reactUtils/modal/Modal";

//importing scss and utility functions
import Classes from './InitialModal.module.scss';
import * as constants from "../../utility/constants/constants";

const InitialModal = ({handleModal}) => {

    const [userName,setUserName] = useState("");

    return (

        <Modal>
            <div className={Classes.main_content}>
                <p className = {Classes.userLabel}> What's your name bruhh ??</p>
                <input placeholder="Ex: Rohit" 
                    className = {Classes.userInput}
                />
                <button className = {Classes.proceedButton}
                >
                    Proceed
                </button>
            </div>
        </Modal>

    );
}

export default InitialModal;