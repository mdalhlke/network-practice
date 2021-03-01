const express = require('express');
const path = require('path');
const WebSocket = require('ws');

const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'messages.html')));
app.listen(7000, () => console.log("Listening on port 7000..."));

let wsocket = new WebSocket.Server({port: 40001});
let history = [];
let connections = [];

wsocket.on('connection', (clientsocket) => {
    clientsocket.on('message', (data) => {
        history.push(data);
        connections.forEach(sock => {sock.send(JSON.stringify([data]))})
    });
    connections.push(clientsocket);
    console.log("Sending history with new connection", )
    clientsocket.send(JSON.stringify(history));
});

