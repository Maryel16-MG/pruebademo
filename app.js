const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Base de datos simulada
let datos = {
  id: 1,
  nombre: 'Franklin',
  profesion: 'Desarrollador'
};

// GET - Obtener los datos
app.get('/api/datos', (req, res) => {
  res.json(datos);
});

// PUT - Actualizar los datos
app.put('/api/datos', (req, res) => {
  const { nombre, profesion } = req.body;

  if (nombre) datos.nombre = nombre;
  if (profesion) datos.profesion = profesion;

  res.json({
    mensaje: 'Datos actualizados correctamente',
    datos
  });
});

// DELETE - Eliminar los datos
app.delete('/api/datos', (req, res) => {
  datos = {};
  res.json({ mensaje: 'Datos eliminados correctamente' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});