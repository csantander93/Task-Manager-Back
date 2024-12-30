const userRepository = require('../../repositories/UserRepository');

const userService = {
  /**
   * Obtiene un usuario por ID.
   * @param {String} id - ID del usuario.
   * @returns {Promise<Object>} - Usuario encontrado.
   */
  async getUserById(id) {
    const user = await userRepository.findUserById(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return user;
  },
};

module.exports = userService;
