const express = require('express');
const app = express();
// Middleware para parsear JSON
app.use(express.json());
// Importar rutas
const routes = require('./routes');
app.use('/node', routes); // Ejemplo: http://localhost:3000/node/...

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});