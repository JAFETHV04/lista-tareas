const express = require('express');
const router = express.Router();

const conexion = require('./db');

router.get('./index', (req,res)=>{
    res.render('index');
})
const tarea = require('./tarea.js');
router.post('/guardarTarea', tarea.guardartarea);

module.exports = router;