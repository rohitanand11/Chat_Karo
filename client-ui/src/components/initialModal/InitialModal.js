//importing react modules
import React,{useState} from 'react';

//importing local react components
import Modal from "../../utility/reactUtils/modal/Modal";

//importing scss and utility functions
import Classes from './InitialModal.module.scss';
import * as constants from "../../utility/constants/constants";

const InitialModal = ({handleModal}) => {

    const [userName,setUserName] = useState("");

    const handleuserName = (evt) => {
        setUserName(evt.target.value);
    }

    const handleProceed = () => {
        const tempUserName = userName.trim();
        console.log(userName,tempUserName,userName.length,tempUserName.length);
        if(tempUserName.length > 0) {
            constants.changeUserName(tempUserName)
            handleModal(false);
        } else {
            alert("enter your Name,it is mandatory");
        }
    }

    return (

        <Modal>
            <div className={Classes.main_content}>
                <p className = {Classes.userLabel}> What's your name bruhh ??</p>
                <input placeholder="Ex: Rohit" 
                    className = {Classes.userInput}
                    value = {userName}
                    onChange = {handleuserName}
                    spellCheck = "false"
                />
                <button className = {Classes.proceedButton}
                    onClick = {handleProceed}
                >
                    Proceed
                </button>
            </div>
        </Modal>

    );
}

export default InitialModal;