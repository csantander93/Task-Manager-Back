const express = require("express");
const taskController = require("../controllers/TaskController");
const { validateCreateTask, validateResults } = require('../validators/TaskValidator');

const router = express.Router();

router.post("/",validateCreateTask, validateResults, taskController.createTask); // Endpoint para crear una nueva tarea

router.get("/:userId", taskController.getTasksByUserId); // Ruta para obtener todas las tareas de un usuario

router.get("/id/:taskId", taskController.getTaskById); // Ruta para obtener una tarea específica de un usuario por su ID

router.put("/:taskId", taskController.updateTaskById); // Endpoint para actualizar una tarea

router.delete("/:taskId", taskController.deleteTaskById); // Endpoint para eliminar una tarea.

module.exports = router;
