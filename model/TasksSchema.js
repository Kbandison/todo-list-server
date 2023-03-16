const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  isEditing: { type: Boolean, required: true },
  isCompleted: { type: Boolean, required: true, default: false },
  dateCreated: { type: Date, default: Date.now },
  dateCompleted: { type: Date, default: Date.now },
});

const Tasks = mongoose.model("tasks", TasksSchema);

module.exports = Tasks;
