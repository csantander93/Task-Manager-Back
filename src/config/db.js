const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Usa la URI desde las variables de entorno
    const mongoURI = process.env.MONGO_URL || "mongodb://localhost:27017/taskmanager";
    console.log("MONGO_URL:", mongoURI);

    await mongoose.connect(mongoURI); 
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);

    // Intentar reconectar después de un tiempo
    setTimeout(connectDB, 5000); // Reintentar la conexión en 5 segundos
  }
};

module.exports = connectDB;
