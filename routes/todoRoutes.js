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
