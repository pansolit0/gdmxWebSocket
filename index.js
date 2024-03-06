require('dotenv').config();

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const PORT = process.env.PORT;

const app = express();

// Crea un servidor HTTP a partir de la aplicación Express
const server = http.createServer(app);

// Inicializa una nueva instancia de Socket.io con el servidor HTTP
const io = socketIo(server);



// Define un evento de conexión para Socket.io
io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});


  // Define la ruta raíz de la aplicación
app.get('/', (req, res) => {
    res.send('<h1>Hola mundo con Socket.io!</h1>');
  });

  server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });


module.exports = app ;