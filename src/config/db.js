const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Usar MONGO_URL o una URL construida con variables de entorno
    const mongoURI = process.env.MONGO_URL || `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOHOST}:${process.env.MONGOPORT}/${process.env.MONGO_INITDB_ROOT_USERNAME}?authSource=admin`;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); 
  }
};

module.exports = connectDB;
