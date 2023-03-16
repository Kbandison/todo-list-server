const taskSchema = require("../model/taskModel");

// GET all tasks

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  deleteAllTasks,
};
