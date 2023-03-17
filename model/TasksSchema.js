const mongoose = require("mongoose");
// const { v4: uuidv4 } = require("uuid");

const TasksSchema = new mongoose.Schema({
  // id: { type: String, default: uuidv4 },
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  isEditing: { type: Boolean, default: true },
  isCompleted: { type: Boolean, required: true, default: false },
  dateCreated: { type: Date, default: Date.now },
  dateCompleted: { type: Date },
});

const Tasks = mongoose.model("tasks", TasksSchema);

module.exports = Tasks;
