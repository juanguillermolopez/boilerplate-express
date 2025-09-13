let express = require('express');
let app = express();

// Agregar un mensaje en consola
console.log("Hello World");


// app.get('/', function(req, res) {
//  res.send('Hello Express');
// });


// Middleware para servir archivos estáticos desde la carpeta /public
app.use('/public', express.static(__dirname + '/public'));

// Nueva solución que envía el archivo HTML:
app.get('/', function(req, res) {
  const absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

// Nueva ruta API que devuelve JSON
app.get('/json', function(req, res) {
  res.json({"message": "Hello json"});
});


module.exports = app;




































 module.exports = app;
