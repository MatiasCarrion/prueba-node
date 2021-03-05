const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('Respondiendo desde express')
    res.render("index", {titulo: "mi titulo dinamico"});
  })
  
  
router.get('/servicios',(req,res) => {
    res.render("servicios", {tituloServicios: "mensaje dinamico de servicios"});
})

module.exports = router;