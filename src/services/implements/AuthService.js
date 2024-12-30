const jwt = require("jsonwebtoken");
const { findUserByEmail } = require("../../repositories/UserRepository");
const { comparePassword } = require("../../utils/passwordUtils");
const UserDTO = require("../../models/dtos/req/UserDto");

const JWT_SECRET  = "my$uper$ecret!Key1234567890";

const authenticateUser = async (email, password) => {
  try {
    // Verifica que el email y la contraseña estén presentes
    if (!email || !password) {
      throw new Error("Email y contraseña son requeridos.");
    }

    // Busca el usuario por su email
    const user = await findUserByEmail(email);

    // Si no se encuentra el usuario, lanza un error
    if (!user) {
      throw new Error("Usuario no encontrado.");
    }

    // Compara la contraseña proporcionada con la almacenada
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Contraseña incorrecta.");
    }
    
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    // Crea el DTO con los datos del usuario (sin la contraseña) y agrega el token
    const userDTO = new UserDTO(user);
    userDTO.token = token;

    // Retorna el DTO con el token
    return userDTO;
  } catch (error) {
    // Propaga el error para que sea manejado en el controlador
    throw new Error(error.message);
  }
};

module.exports = { authenticateUser };
