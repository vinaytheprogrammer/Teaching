const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
