// utils/encryptPassword.js
const bcrypt = require('bcryptjs');

// Función para encriptar la contraseña
const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); // Genera un "salt" con 10 rondas de salado
  const hashedPassword = await bcrypt.hash(password, salt); // Encripta la contraseña
  return hashedPassword;
};

// Función para comparar la contraseña ingresada con el hash almacenado
const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword); // Compara la contraseña ingresada con el hash
  return isMatch;
};

// Exportar ambas funciones individualmente
module.exports = { encryptPassword, comparePassword };
