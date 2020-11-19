// importar express de express
const express = require('express');
//importamos la funcion de conexion a la BD
const conectarDB = require('./config/db');
//importamos CORS
const cors = require('cors');

// crear el servidor
const app = express();

// habilitar cors
app.use(cors());

// Conectar a la DB
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

//puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));


// //Definir la pagina principal | para verificar que todo este bien
// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// });

//arrancar la app
app.listen(port)
console.log(`Servidor activo en puerto ${port}`);
// app.listen(port, '0.0.0.0', () => {
//     console.log(`Servidor activo en puerto ${port}`);
// })