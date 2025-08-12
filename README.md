# Express.js Mini Todo API

This is a simple REST API built with Express.js to manage a todo list.  
It allows you to create, read, update, and delete tasks.

Data is stored in memory, so it resets every time the server restarts.  
This project is perfect for learning how to build APIs with Node.js and Express.

## Installation

After cloning the repo, run:

```bash
npm install
node server.js

## API Routes

| Method | Endpoint     | Description              | Body (JSON)                                   |
| ------ | ------------ | ------------------------ | --------------------------------------------- |
| GET    | `/todos`     | Get all todo tasks       | —                                             |
| POST   | `/todos`     | Create a new todo task   | `{ "title": "Task title" }`                   |
| PUT    | `/todos/:id` | Update a todo task by id | `{ "title": "...", "completed": true/false }` |
| DELETE | `/todos/:id` | Delete a todo task by id | —                                             |
```
