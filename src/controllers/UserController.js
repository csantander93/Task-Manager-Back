const userService = require('../services/implements/UserServiceImpl');

const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getUserByIdController };
