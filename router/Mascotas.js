const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');


router.get('/', async (req,res) => {

    try {
        const arrayMascotasDB = await Mascota.find();
        console.log(arrayMascotasDB)
        
    res.render('mascotas', {
        arrayMascotas: arrayMascotasDB
    })
    } catch (error) {
        console.log(error)
    }
})


router.get('/crear', (req, res) => {
    res.render('crear')

})

router.post('/',async(req,res) => {
    const body = req.body
    try {
        const mascotaBD = new Mascota(body) // construimos una mascota con las prop del modelo mascota
        await mascotaBD.save() //metodo mongoose

        //await Mascota.create(body) otro metodo 
        res.redirect('/mascotas')
    } catch (error) {
        console.log('Error:' + error)
        
    }
})

router.get('/:id', async(req, res) => {
    const _id = req.params.id // se lee la url (id es el nombre de la columna id de la bbdd) el guion bajo es porque en mongo los id van así
    //const id = req.params.id // se lee la url (id es el nombre de la columna id de la bbdd) el guion bajo es porque en mongo los id van así
    try {
        const mascotaDB = await Mascota.findOne({_id})
        // const mascotaDB = await Mascota.findOne({_id: id})
        console.log(mascotaDB)
        res.render('detalle', {
            mascota: mascotaDB, //objeto mascota
            error: false // sin errores
        })

    } catch (error) {
        console.log('Error:' + error)

        res.render('detalle', {
            error: true,
            mensaje: 'No se encontró el id seleccionado'
        })
        
    }

})

router.delete('/:id', async(req,res) => {

    const _id = req.params.id

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id})
        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: 'Eliminado'
            })
        }
        else{
            res.json({
                estado: false,
                mensaje: 'Fallo eliminar'
            })
        }
    } catch (error) {
        console.log('Error:' + error)
    }
})

router.put('/:id', async(req, res) => {
    const id = req.params.id
    const body = req.body //en app.js tiene que estar configurado el bodyparser

    try {

        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(mascotaDB)
        res.json({
            estado: true,
            mensaje:'Eliminado'
        })

    } catch (error) {
        console.log('Error:' + error)
        res.json({
            estado: false,
            mensaje:'No se pudo eliminar'
        })
    }
})


module.exports = router;