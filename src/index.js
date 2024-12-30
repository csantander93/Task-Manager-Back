const express = require("express");
const connectDB = require("./config/db");
const seedDatabase = require("./seed");
const taskRoutes = require("./routes/TaskRoutes");
const userRoutes = require("./routes/UserRoustes");
const { swaggerUi, swaggerSpec } = require("./config/swagger"); // Ajusta la ruta según tu estructura
const cors = require("cors"); // Importa el paquete cors

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Permite solicitudes de cualquier origen

connectDB();
seedDatabase();

app.use(express.json());

// Rutas
// Task
app.use("/api/tasks", taskRoutes);
// User
app.use("/api/users", userRoutes)
// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
