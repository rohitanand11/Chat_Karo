import React, { useEffect, useState } from 'react';
import './App.css';

import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {

  useEffect(() => {
    socket.on('message', (msg) => {
      console.log(msg);
    })
  }, []);

  const [chatInput, setChatInput] = useState("");

  const handleChangeInput = (evt) => {
    console.log(evt.target.value);
    setChatInput(evt.target.value);
  }

  const handleTextSubmit = () => {
    console.log(chatInput);
    setChatInput("");
  }

  return (
    <div className="App">
      <div className="textInput">
        <input className="chatInput" value={chatInput} onChange={handleChangeInput} />
        <button onClick={handleTextSubmit}>send </button>
      </div>
      <div className="texts">

      </div>
    </div>
  );
}

export default App;