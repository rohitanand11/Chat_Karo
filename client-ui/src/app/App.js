//importing react modules
import React from 'react';
import { toJS} from "mobx";
import {observer} from "mobx-react-lite";

//importing local components
import InitialModal from "./components/initialModal/InitialModal";
import ChatWindow from "./components/chat_window/ChatWindow";
import SideBar from "./components/aside/SideBar";

//importing css ,store and utility files
import Classes from './App.module.scss';
import * as App_logic from "./appLogic";
import {useGlobalStore} from './store';

// import { socket } from "./utility/chatLogic/chatLogic";

function App() {

  const {appstore} = useGlobalStore();
  console.log(useGlobalStore());
  console.log("tojs",toJS(useGlobalStore()));

  App_logic.checkAndGetUserId(appstore);

  return (
    <div className={Classes.App}>
      {(appstore.showModal===true) ? <InitialModal /> : null} 

      <div className={Classes.appWindow}>
        <SideBar/>
        <ChatWindow/>
        <button onClick={()=>appstore.handleShowModal(true)}>clickme</button>
      </div>
    </div>
  );
}

export default observer(App);