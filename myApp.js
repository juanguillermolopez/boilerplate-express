const express = require('express');
require('dotenv').config(); //  PRIMERA línea después de requires
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res) {
  //  Variable leída DENTRO del handler
  let message = "Hello json";
  
  //  Verificación exacta del valor
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  
  res.json({"message": message});
});

module.exports = app;