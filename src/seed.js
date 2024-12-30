const mongoose = require("mongoose");
const User = require("./models/User");
const Task = require("./models/Task");
const { encryptPassword } = require('./utils/passwordUtils'); // Importa las funciones necesarias

const seedDatabase = async () => {
  try {
    // Elimina datos existentes para evitar duplicados (opcional)
    await User.deleteMany();
    await Task.deleteMany();

    // Crear usuario inicial
    const passwordToEncrypt = "123456"; // La contraseña que deseas encriptar
    const encryptedPassword = await encryptPassword(passwordToEncrypt); // Llamamos al método para encriptar la contraseña

    const user = new User({
      name: "Cristian Santander",
      email: "admin@admin.com",
      password: encryptedPassword, // Guarda la contraseña encriptada
    });

    await user.save();

    // Crear tareas iniciales asociadas al usuario
    const tasks = [
      {
        title: "Tarea 1",
        description: "Descripción de la tarea 1",
        completed: false,
        createdAt: new Date(),
        user: user._id, // Asocia la tarea al usuario creado
      },
      {
        title: "Tarea 2",
        description: "Descripción de la tarea 2",
        completed: true,
        createdAt: new Date(),
        user: user._id, // Asocia la tarea al usuario creado
      },
    ];

    await Task.insertMany(tasks);

    console.log("Datos iniciales cargados con éxito");
  } catch (error) {
    console.error("Error al cargar datos iniciales:", error);
  }
};

module.exports = seedDatabase;
