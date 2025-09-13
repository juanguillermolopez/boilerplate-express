let express = require('express');
let app = express();

// Agregar un mensaje en consola
console.log("Hello World");


app.get('/', function(req, res) {
  res.send('Hello Express');
});

module.exports = app;




































 module.exports = app;
