var express = require("express");
var router = express.Router();
const todoController = require("../controllers/todoController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/********************MAIN ROUTES********************/

// GET all tasks
router.get("/tasks", todoController.getAllTasks);

// POST a new task
router.post("/tasks", todoController.createTask);

// GET a task by id
router.get("/tasks/:id", todoController.getTaskById);

// PUT a task by id
router.put("/tasks/:id", todoController.updateTaskById);

// DELETE a task by id
router.delete("/tasks/:id", todoController.deleteTaskById);

// DELETE all tasks
router.delete("/tasks", todoController.deleteAllTasks);

module.exports = router;
