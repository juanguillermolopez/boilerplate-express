let express = require('express');
let app = express();

// Agregar un mensaje en consola
console.log("Hello World");


// app.get('/', function(req, res) {
//  res.send('Hello Express');
// });


// Nueva solución que envía el archivo HTML:
app.get('/', function(req, res) {
  const absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});


module.exports = app;




































 module.exports = app;
