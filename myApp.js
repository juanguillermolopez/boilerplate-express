const express = require('express');
// Cargar variables de entorno
require('dotenv').config();
const app = express();

// Middleware para archivos estáticos
app.use('/public', express.static(__dirname + '/public'));

// Ruta principal que sirve el archivo HTML
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Ruta para API JSON con lógica condicional
app.get('/json', function(req, res) {
  let message = "Hello json";
  
  // Verificar la variable de entorno DENTRO del route handler
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  
  res.json({"message": message});
});

module.exports = app;