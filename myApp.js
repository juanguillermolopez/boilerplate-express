const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

// ✅ Body parser middleware (DEBE ir primero)
app.use(bodyParser.urlencoded({ extended: false }));

// Logger middleware
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Static files
app.use('/public', express.static(__dirname + '/public'));

// Routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({"message": message});
});

app.get('/now', 
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function(req, res) {
    res.json({time: req.time});
  }
);

app.get('/:word/echo', function(req, res) {
  res.json({echo: req.params.word});
});

// GET con query parameters
app.get('/name', function(req, res) {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
});

// POST handler para /name (mejorado)
app.post('/name', function(req, res) {
  // Obtener datos del body (formulario)
  const firstName = req.body.first;
  const lastName = req.body.last;
  
  // Responder con el JSON requerido
  res.json({ name: `${firstName} ${lastName}` });
});

module.exports = app;