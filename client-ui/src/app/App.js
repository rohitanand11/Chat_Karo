//importing react modules
import React, { useEffect, useState } from 'react';

//importing local components
import InitialModal from "../components/initialModal/InitialModal";

//importing css and utility files
import Classes from './App.module.scss';
// import { socket } from "./utility/chatLogic/chatLogic";

function App() {

  const [chatInput, setChatInput] = useState("");
  const [chatLogArray, setChatLogArray] = useState([]);
  const [showModal, setShowModal] = useState(true);

  // useEffect(() => {
  //   socket.on('message', (msg) => {
  //     console.log(msg);
  //   });
  // }, []);

  // useEffect(() => {
  //   socket.on('new_chat_message', (msg) => {
  //     console.log(msg);
  //     setChatLogArray((chatArray) => [...chatArray, msg]);
  //   });
  // }, []);

  const handleChangeInput = (evt) => {
    // console.log(evt.target.value);
    setChatInput(evt.target.value);
  }

  // const handleSend = () => {
  //   if (chatInput.length > 0) {
  //     socket.emit('chat_message', chatInput);
  //     setChatInput("");
  //   }
  // }

  const handleModal = (pStatus) => {
    setShowModal(pStatus);
  }

  const renderChatLog = () => {
    const renderChat = chatLogArray.map((chatObj, index) => {
      return (
        <div key={index}>
          <p>{chatObj}</p>
        </div>
      )
    });

    return renderChat;
  }

  return (
    <div className={Classes.App}>
      {(showModal===true) ? <InitialModal handleModal={handleModal}/> : null} 

      <div className={Classes.appWindow}>
        <div className ={Classes.aside}>

        </div>
        <div className = {Classes.chat_window}>

        </div>
      </div>





      {/* <div className="textInput">
        <input className="chatInput" value={chatInput} onChange={handleChangeInput} />
        <button onClick={handleSend}>send </button>
      </div>
      <div className="texts">
        {renderChatLog()}
      </div> */}
    </div>
  );
}

export default App;