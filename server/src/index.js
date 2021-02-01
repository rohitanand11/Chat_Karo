const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
      origin: '*',
    }
  });

const PORT = 3001 || process.env.PORT;
//set a static folder
app.use(express.static(path.join(__dirname,'public')));

//run when client connects
io.on('connection',(socket)=>{
    console.log("new user connected");
    socket.emit('message','welcome to my chatroom');
})

server.listen(PORT,()=>{
    console.log(`connected at port ${PORT}`);
})















// const express = require('express');
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const storeUtility = require('./store');

// // for (let i = 0; i < 5; i++) {
// //     storeUtility.pushNewMessage(`hey${i}`);
// // }
// // console.log(storeUtility.getStoreContent());
// // storeUtility.clearStoreContent();
// // console.log(storeUtility.getStoreContent());

// const PORT = 3001;

// app.listen(PORT, () => {
//     console.log("app listening at port", PORT);
// })

// app.get('/', (req, res) => {
//     res.send("<h1>server up nigga</h1>");
// })

// app.post('/post_message', (req, res) => {
//     console.log("request", req.body);
//     // console.log("whole request",req);
//     res.send(`message recived with ${req.body}`);
//     storeUtility.pushNewMessage(req.body.text);
// });

// app.get('/clear_chat', (req, res) => {
//     storeUtility.clearStoreContent();
//     res.send(`content cleared, current chat content is ${storeUtility.getStoreContent()}`);
// })

