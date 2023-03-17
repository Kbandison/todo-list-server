var express = require("express");
var router = express.Router();
const todoController = require("../controller/todoController");

/* GET users listing. */
// router.get("/tasks", function (req, res, next) {
//   res.send("respond with a resource");
// });

/********************MAIN ROUTES********************/

// GET all tasks
router.get("/tasks", todoController.getAllTasks);

// POST a new task
router.post("/new-task", todoController.createTask);

// GET a task by id
router.get("/tasks/:id", todoController.getTaskById);

// PUT a task by id
router.put("/update-task/:id", todoController.updateTaskById);

// DELETE a task by id
router.delete("/delete-task/:id", todoController.deleteTaskById);

// DELETE all tasks
router.delete("/delete-tasks", todoController.deleteAllTasks);

module.exports = router;
