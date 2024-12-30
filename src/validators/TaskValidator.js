const { check, validationResult } = require('express-validator');

// Validaciones para crear una tarea
const validateCreateTask = [
  check('title')
    .notEmpty()
    .withMessage('El título es obligatorio.')
    .isString()
    .withMessage('El título debe ser una cadena de texto.'),
  check('user')
    .notEmpty()
    .withMessage('El ID del usuario es obligatorio.')
    .isMongoId() 
    .withMessage('El ID del usuario no es válido.'),
];

// Middleware para manejar los resultados de la validación
const validateResults = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateCreateTask,
  validateResults,
};
