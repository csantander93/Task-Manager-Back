const taskRepository = require("../../repositories/TaskRepository");

/**
 * Crea una nueva tarea.
 * @param {Object} taskData - Datos de la tarea.
 * @returns {Promise<Object>} - Tarea creada.
 */
const createTask = async (taskData) => {
  
  if (!taskData.title) {
    throw new Error("El 'titulo' es obligatorio.");
  }

  return await taskRepository.createTask(taskData);
}

/**
 * Implementa el servicio para obtener las tareas de un usuario por su ID.
 * @param {String} userId - ID del usuario.
 * @returns {Promise<Array>} - Lista de tareas del usuario.
 */
const getTasksByUserId = async (userId) => {
  if (!userId) {
    throw new Error("El ID del usuario es obligatorio.");
  }

  const tasks = await taskRepository.findTasksByUserId(userId);
  return tasks;
};

/**
 * Servicio para obtener una tarea por su ID.
 * @param {String} taskId - ID de la tarea.
 * @returns {Promise<Object>} - La tarea encontrada.
 */
const getTaskById = async (taskId) => {
  if (!taskId) {
    throw new Error("El ID de la tarea es obligatorio.");
  }

  const task = await taskRepository.findTaskById(taskId);

  if (!task) {
    throw new Error("Tarea no encontrada.");
  }

  return task;
};

/**
 * Actualiza una tarea por su ID.
 * @param {String} taskId - ID de la tarea.
 * @param {Object} updateData - Datos a actualizar.
 * @returns {Promise<Object>} - La tarea actualizada.
 */
const updateTaskById = async (taskId, updateData) => {
  if (!taskId) {
    throw new Error("El ID de la tarea es obligatorio.");
  }

  // Validar que al menos un campo es diferente
  const currentTask = await taskRepository.findTaskById(taskId);
  if (!currentTask) {
    throw new Error("Tarea no encontrada.");
  }

  const fieldsToUpdate = {};
  if (updateData.title && updateData.title !== currentTask.title) {
    fieldsToUpdate.title = updateData.title;
  }
  if (updateData.description && updateData.description !== currentTask.description) {
    fieldsToUpdate.description = updateData.description;
  }
  if (updateData.completed !== undefined && updateData.completed !== currentTask.completed) {
    fieldsToUpdate.completed = updateData.completed;
  }

  // Si no hay cambios, devolver la tarea actual
  if (Object.keys(fieldsToUpdate).length === 0) {
    return currentTask;
  }

  return await taskRepository.updateTaskById(taskId, fieldsToUpdate);
};

/**
 * Elimina una tarea por su ID.
 * @param {String} taskId - ID de la tarea a eliminar.
 * @returns {Promise<Object|null>} - Tarea eliminada o null si no existe.
 */
const deleteTaskById = async (taskId) => {
  if (!taskId) {
    throw new Error("El ID de la tarea es obligatorio.");
  }

  const deletedTask = await taskRepository.deleteTaskById(taskId);
  if (!deletedTask) {
    throw new Error("No se encontró la tarea con el ID proporcionado.");
  }

  return deletedTask;
};

module.exports = {
  createTask,
  updateTaskById,
  getTasksByUserId,
  getTaskById,
  deleteTaskById
};
