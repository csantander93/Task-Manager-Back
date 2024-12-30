const taskServiceImpl = require("../services/implements/TaskServiceImpl");

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único de la tarea.
 *         title:
 *           type: string
 *           description: Título de la tarea.
 *         description:
 *           type: string
 *           description: Descripción de la tarea.
 *         completed:
 *           type: boolean
 *           description: Indica si la tarea está completa o pendiente.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de actualización.
 */


/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crea una nueva tarea.
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - user
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la tarea.
 *               description:
 *                 type: string
 *                 description: Descripción de la tarea.
 *               user:
 *                 type: string
 *                 description: ID del usuario al que pertenece la tarea.
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la tarea creada.
 *                 userId:
 *                   type: string
 *                   description: ID del usuario asociado.
 *                 title:
 *                   type: string
 *                   description: Título de la tarea.
 *                 description:
 *                   type: string
 *                   description: Descripción de la tarea.
 *                 completed:
 *                   type: boolean
 *                   description: Indica si la tarea está completada (por defecto, false).
 *       400:
 *         description: Error en los datos de entrada.
 */
/**
 * Controlador para crear una nueva tarea.
 * @param {Object} req - Solicitud HTTP.
 * @param {Object} res - Respuesta HTTP.
 */
const createTask = async (req, res) => {
  try {
    const taskData = req.body;
    const newTask = await taskServiceImpl.createTask(taskData);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


/**
 * @swagger
 * /tasks/{taskId}:
 *   put:
 *     summary: Actualiza una tarea existente.
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente.
 *       404:
 *         description: Tarea no encontrada.
 *       400:
 *         description: Error en los datos de entrada.
 */
/**
 * Actualiza una tarea por su ID.
 * @param {Request} req - Petición HTTP.
 * @param {Response} res - Respuesta HTTP.
 */
const updateTaskById = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, completed } = req.body;

  try {
    const updatedTask = await taskServiceImpl.updateTaskById(taskId, { title, description, completed });
    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada." });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


/**
 * @swagger
 * /tasks/{userId}:
 *   get:
 *     summary: Obtiene todas las tareas de un usuario.
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario.
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Error en el servidor.
 */
/**
 * Controlador para obtener todas las tareas de un usuario por su ID.
 * @param {Request} req - Objeto de la solicitud.
 * @param {Response} res - Objeto de la respuesta.
 */
const getTasksByUserId = async (req, res) => {
  try {
    const { userId } = req.params; 
    const tasks = await taskServiceImpl.getTasksByUserId(userId);
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /tasks/id/{taskId}:
 *   get:
 *     summary: Obtiene una tarea por su ID.
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea.
 *     responses:
 *       200:
 *         description: Tarea obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Error en los datos de entrada.
 */
/**
 * Controlador para obtener una tarea por su ID.
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 */
const getTaskById = async (req, res) => {
  try {
    const { taskId } = req.params; 
    const task = await taskServiceImpl.getTaskById(taskId);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @swagger
 * /tasks/{taskId}:
 *   delete:
 *     summary: Elimina una tarea por su ID.
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea.
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente.
 *       400:
 *         description: Error en los datos de entrada.
 */
/**
 * Controlador para eliminar una tarea por su ID.
 * @param {Request} req - Petición HTTP.
 * @param {Response} res - Respuesta HTTP.
 */
const deleteTaskById = async (req, res) => {
  const { taskId } = req.params;

  try {
    const deletedTask = await taskServiceImpl.deleteTaskById(taskId);
    res.status(200).json({
      message: "Tarea eliminada exitosamente.",
      task: deletedTask,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTask,
  updateTaskById,
  getTasksByUserId,
  getTaskById,
  deleteTaskById
};
