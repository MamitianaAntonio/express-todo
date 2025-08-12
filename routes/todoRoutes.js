const express = require("express");
const router = express.Router();

let todos = [];

// retrieve all tasks
router.get("/", (req, res) => {
  res.json(todos);
});

// add a new task
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(404).json({ message: "Title is required" });
  }

  const newTodo = { id: Date.now(), title, completed: false };
  todos.push(newTodo);
  res.status(200).json(newTodo);
});

// update a task by id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find((todo) => todo.id == id);
  if (!todo) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// delete a task
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== id);
  res.json({ message: "Task deleted successfully" });
});

module.exports = router;
