const cors = require('cors');
const path= require('path');
const express = require('express'); //ya incluye el bodyParser
const app = express();

const A70F03 = require('./routes/funciones');

//Si hay un puerto disponible en el servidor,
// utilizalo en caso contrario utiliza el 3000
const port = process.env.PORT || 3000;

///////////////////////////////////////////////////////////////////////////////////////////////////
// CONFIGURACIONES
// Asignar el puerto al servidor
app.set('port', port);

///////////////////////////////////////////////////////////////////////////////////////////////////
// MIDDLEWARES
app.use(cors()); // mediador con angular
app.use(express.json()); // ´para poder recibir json
app.use(express.urlencoded({extended: false})) // para poder recibir datos desde la url (post etc)

// RUTAS
// app.use(indexRoutes);
app.use('/api', A70F03);

app.listen(app.get('port'), () => {
  console.log('Servidor levantado en el puerto ', app.get('port'));
})
