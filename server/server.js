const express = require('express');
const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const socketIO = require('socket.io');
var io = socketIO(server);
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log('server is running');
});

