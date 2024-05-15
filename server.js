const express = require('express');
const app = express

app.set('view engine', 'ejs');


const port = 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});