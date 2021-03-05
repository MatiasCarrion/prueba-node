const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('Respondiendo desde express')
    res.render("index.ejs", {titulo: "mi titulo dinamico"});
  })
  
  
router.get('/servicios',(req,res) => {
    res.render("servicios.ejs", {tituloServicios: "mensaje dinamico de servicios"});
})

module.exports = router;