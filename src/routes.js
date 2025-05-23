const express = require('express');
const router = express.Router();

// Ruta de ejemplo
router.get('/', (req, res) => {
  res.json({ message: '¡Hola Mundo!' });
});

// Ejemplo de ruta con parámetros
router.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.json({ message: `¡Hola, ${nombre}!` });
});

module.exports = router;