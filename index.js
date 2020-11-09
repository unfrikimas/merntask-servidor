// importar express de express
const express = require('express');

// crear el servidor
const app = express();

//puerto de la app
const PORT = process.env.PORT || 4000;

//Definir la pagina principal | para verificar que todo este bien
app.get('/', (req, res) => {
    res.send('Hola mundo')
});

//arrancar la app
app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`);
})