const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
const listPostRouter = require("./routes/listPost");

// Definir rutas
app.use("/posts", listPostRouter);  // Asegúrate de que esta línea esté presente

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "X Ruta no encontrada",
    error: { message: "X Ruta no encontrada" },
  });
});

module.exports = app;
