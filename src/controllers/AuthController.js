const { authenticateUser } = require("../services/implements/AuthService");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica que el email y la contraseña hayan sido proporcionados
    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son requeridos." });
    }

    // Llama al servicio para autenticar al usuario
    const userDTO = await authenticateUser(email, password);

    // Devuelve el DTO con los datos del usuario (sin la contraseña) y el token
    res.status(200).json(userDTO);
  } catch (error) {
    // Si hay un error, responde con un mensaje claro
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginController };
