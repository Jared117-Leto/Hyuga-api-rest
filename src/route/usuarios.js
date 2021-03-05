const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database')

router.get('/archivos', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/archivos/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM usuarios WHERE usu_id= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/archivos', (req, res) => {
    const { usu_nombre, usu_apellido, usu_sexo, usu_telefono, usu_correo, usu_password } = req.body;
    mysqlConnection.query('INSERT INTO usuarios ( `usu_nombre`, `usu_apellido`, `usu_sexo`, `usu_telefono`, `usu_correo`, `usu_password`) VALUES (?, ?, ?, ?, ?, ?)', [usu_nombre, usu_apellido, usu_sexo, usu_telefono, usu_correo, usu_password], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'usuarios agregado'});
        } else {
            console.log(err);
        }
    });
});






module.exports = router;