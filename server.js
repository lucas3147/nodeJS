const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));

let connectedUsers = [];

io.on('connection', (socket) => {
    console.log('Conexão detectada...');

    socket.on('join-request', (username) => {
        socket.username = username;
        connectedUsers.push(username);
        console.log(connectedUsers);

        socket.emit('user-ok', connectedUsers);

        socket.broadcast.emit('list-update', {
            joined: username,
            list: connectedUsers
        });
        // O broadcast é uma mensagem para todos os usuários conectados
        // Exceto o usuário que está requisitando o servidor
        // Por isso eu uso user-ok para ele
    });

    socket.on('disconnect', () => {
        connectedUsers = connectedUsers.filter(user => user != socket.username);

        socket.broadcast.emit('list-update', {
            left: socket.username,
            list: connectedUsers
        });
    });

    socket.on('send-msg', (txt) => {
        let obj = {
            username: socket.username,
            message: txt
        };

        socket.emit('show-msg', obj);
        socket.broadcast.emit('show-msg', obj);
    });
    
});