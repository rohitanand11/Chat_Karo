//importing react modules
import React, { useState } from 'react';
import {toJS} from "mobx";

//importing local components
import InitialModal from "./components/initialModal/InitialModal";
import ChatWindow from "./components/chat_window/ChatWindow";
import SideBar from "./components/aside/SideBar";

//importing css ,store and utility files
import Classes from './App.module.scss';
import {useGlobalStore} from './store/index';
// import { socket } from "./utility/chatLogic/chatLogic";

function App() {

  console.log(useGlobalStore());
  console.log("tojs",toJS(useGlobalStore()));

  const [showModal, setShowModal] = useState(true);
  const handleModal = (pStatus) => {
    setShowModal(pStatus);
  }

  return (
    <div className={Classes.App}>
      {(showModal===true) ? <InitialModal handleModal={handleModal}/> : null} 

      <div className={Classes.appWindow}>
        <SideBar/>
        <ChatWindow/>
      </div>
    </div>
  );
}

export default App;