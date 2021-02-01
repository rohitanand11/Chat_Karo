import React, { useEffect, useState } from 'react';
import './App.css';

import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {

  const [chatInput, setChatInput] = useState("");
  const [chatLogArray,setChatLogArray] = useState([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      console.log(msg);
    });
  }, []);

  useEffect(()=>{
    socket.on('new_chat_message',(msg)=>{
      console.log(msg);
      setChatLogArray((chatArray)=>[...chatArray,msg]);
    });
  },[]);

  const handleChangeInput = (evt) => {
    // console.log(evt.target.value);
    setChatInput(evt.target.value);
  }

  const handleSend = () => {
    if(chatInput.length>0){
      socket.emit('chat_message',chatInput);
      setChatInput("");
    }
    
  }

  const renderChatLog = () => {
    const renderChat = chatLogArray.map((chatObj,index)=>{
      return (
        <div key={index}>
          <p>{chatObj}</p>
        </div>
      )
    });

    return renderChat;
  }

  return (
    <div className="App">
      <div className="textInput">
        <input className="chatInput" value={chatInput} onChange={handleChangeInput} />
        <button onClick={handleSend}>send </button>
      </div>
      <div className="texts">
        {renderChatLog()}
      </div>
    </div>
  );
}

export default App;