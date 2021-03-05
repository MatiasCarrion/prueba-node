/*const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Respondiendo a tu solicitud v3')


})

const puerto = 3000;

server.listen(puerto, () => { console.log('Escuchando solicitudes')}) */

const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;
//const puerto = 3000;

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// RutasWeb
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));


app.use((req, res, next) => { //use significa middleware 
  res.status(404).render("404.ejs", {
    titulo: "404",
    descripcion: "mensaje de error"
  })
});

app.listen(puerto, () => {
console.log('Servidor esperando en puerto: '+ puerto)})