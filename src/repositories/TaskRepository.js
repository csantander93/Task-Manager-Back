const Task = require("../models/Task");
const mongoose = require('mongoose');


/**
 * Crea una nueva tarea en la base de datos.
 * @param {Object} taskData - Datos de la tarea.
 * @returns {Promise<Object>} - Tarea creada.
 */
const createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

/**
 * Obtiene todas las tareas de un usuario por su ID.
 * @param {String} userId - ID del usuario.
 * @returns {Promise<Array>} - Lista de tareas asociadas al usuario.
 */
const findTasksByUserId = async (userId) => {
  return await Task.find({ user: userId });
};

/**
 * Busca una tarea por su ID.
 * @param {String} taskId - ID de la tarea.
 * @returns {Promise<Object>} - La tarea encontrada.
 */
const findTaskById = async (taskId) => {
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    throw new Error("ID de tarea inválido");
  }
  return await Task.findById(taskId);
};

/**
 * Actualiza una tarea por su ID.
 * @param {String} taskId - ID de la tarea a actualizar.
 * @param {Object} updateData - Datos a actualizar.
 * @returns {Promise<Object>} - La tarea actualizada.
 */
const updateTaskById = async (taskId, updateData) => {
  return await Task.findByIdAndUpdate(taskId, updateData, { new: true });
};

/**
 * Elimina una tarea por su ID.
 * @param {String} taskId - ID de la tarea a eliminar.
 * @returns {Promise<Object|null>} - Tarea eliminada o null si no existe.
 */
const deleteTaskById = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};

module.exports = {
  createTask,
  updateTaskById,
  findTasksByUserId,
  findTaskById,
  deleteTaskById
};
