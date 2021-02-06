//importing modules
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';

//importing local react components
import Modal from "../../utility/reactUtils/modal/Modal";

//importing scss and utility functions
import Classes from './InitialModal.module.scss';
import { useGlobalStore } from '../../store/index';
import { saveToLocalStorage } from "../../store/localStorage/LocalStorage";

const InitialModal = () => {

    const { appstore } = useGlobalStore();
    const [userName, setUserName] = useState("");

    const GenerateUserId = () => {
        const newGenertedId = uuidv4();
        appstore.handleUserId(newGenertedId);
    }

    const SubmitToLocalStorage = () => {
        if(userName !== "" && appstore.handleUserId !=="") {
            appstore.handleSelfUserName(userName);
            appstore.handleShowModal(false);
            saveToLocalStorage('userId',appstore.userId);
            saveToLocalStorage('userName',appstore.selfUserName);
        }
    }

    const GenerateIdButtonOrId = () => {
        console.log(appstore.userId);
        return (appstore.userId === "") ?
            (
                <Button variant="contained"
                    size="large"
                    color="primary"
                    onClick={GenerateUserId}
                >
                    Generate userId
                </Button>
            ) :
            (<>
                <p>{appstore.userId}</p>
                <Button variant="contained"
                    size="medium"
                    style={{backgroundColor:"#293623",color:"whitesmoke"}}
                    onClick = {SubmitToLocalStorage}
                >
                    Go Ahead
                </Button>
            </>
            )
    }

    return (

        <Modal>
            <div className={Classes.main_content}>
                <p className={Classes.userLabel}> What's your name bruhh ??</p>
                <input placeholder="Ex: Rohit"
                    className={Classes.userInput}
                    spellCheck="false"
                    onChange={(evt) => setUserName(evt.target.value)}
                    value={userName}
                />

                {GenerateIdButtonOrId()}

            </div>
        </Modal>

    );
}

export default InitialModal;