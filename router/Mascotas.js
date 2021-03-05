const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('mascotas', {
        arrayMascotas: [
            {id: '1', nombre:'Paco', descripcion: 'Loro verde'},
            {id: '2', nombre:'Juana', descripcion: 'Gata'},
        ]
    })
})

module.exports = router;