const express = require('express');
const app = express();

// Configuracion

// Middle
app.use(express.json());


// Rutas
app.use(require('./route/usuarios'));



// Inicio
app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000');
});