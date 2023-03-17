const taskSchema = require("../model/TasksSchema.js");

// GET all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskSchema.find({});

    res.json({
      success: true,
      tasks: tasks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new task
const createTask = async (req, res) => {
  const { title, description, priority, isEditing } = req.body;

  const newTask = new taskSchema({
    title,
    description,
    priority,
    isEditing,
  });

  try {
    const task = await taskSchema.create(newTask);

    res.status(201).json({
      success: true,
      task: task,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET a task by id
const getTaskById = async (req, res) => {
  try {
    const task = await taskSchema.findById(req.params.id);

    res.json({
      success: true,
      task: task,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE a task by id
const updateTaskById = async (req, res) => {
  const { title, description, priority, isEditing } = req.body;

  try {
    const task = await taskSchema.findById(req.params.id);

    title && (task.title = title);

    description && (task.description = description);

    priority && (task.priority = priority);

    isEditing && (task.isEditing = isEditing);

    const updatedTask = await task.save();

    res.json({
      success: true,
      task: updatedTask,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a task by id
const deleteTaskById = async (req, res) => {
  try {
    await taskSchema.findById(req.params.id).deleteOne();

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE all tasks
const deleteAllTasks = async (req, res) => {
  try {
    await taskSchema.deleteMany({});

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  deleteAllTasks,
};
