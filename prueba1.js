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


app.get('/', (req, res) => {
  //res.send('Respondiendo desde express')
  res.render("index.ejs", {titulo: "mi titulo dinamico"});
})


app.get('/servicios',(req,res) => {
  res.render("servicios.ejs", {tituloServicios: "mensaje dinamico de servicios"});
})

app.use((req, res, next) => {
  res.status(404).render("404.ejs", {
    titulo: "404",
    descripcion: "mensaje de error"
  })
});

app.listen(puerto, () => {
console.log('Servidor esperando en puerto: '+ puerto)})