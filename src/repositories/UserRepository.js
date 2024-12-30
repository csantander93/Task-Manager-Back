const User = require("../models/User");
const mongoose = require('mongoose');

/**
 * Busca un usuario por su ID.
 * @param {String} userId - ID del usuario.
 * @returns {Promise<Object|null>} - Usuario encontrado o null si no existe.
 */
const findUserById = async (userId) => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("ID de usuario inválido");
  }
  return await User.findById(userId);
};

  // Buscar al usuario por su email
const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Usuario no encontrado"); // Si no lo encuentra, lanza un error
  }

  return user; // Retorna el usuario
};

module.exports = {
  findUserById,
  findUserByEmail,
};
