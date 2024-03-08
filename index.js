require('dotenv').config();

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Acepta conexiones de cualquier origen. Ajusta esto para mayor seguridad en producción.
    methods: ["GET", "POST"]
  }
});
  
// Importar el pool de conexión a la base de datos
// const pool = require('./path/to/your/database/config');

// Importa el controlador de sockets
const { obtenerDatosChartGraficoSocket } = require('./controllers/socketController');
const pool = require('./config/db.config');

io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');

  // Utiliza el controlador aquí, pasando tanto el socket como el pool
  obtenerDatosChartGraficoSocket(socket, pool);

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});

app.get('/', (req, res) => {
    res.send('<h1>Hola mundo con Socket.io!</h1>');
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;
