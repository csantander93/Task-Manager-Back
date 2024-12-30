const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URL || "mongodb://mongo:WIwpTcLqsHtSznkKmTKPHNXOwhzIPCbH@mongodb.railway.internal:27017"; 
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
