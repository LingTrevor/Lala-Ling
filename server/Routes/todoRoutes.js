const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todoController');

router.get("/todos", todoController.getTodos);
router.get("/todo/:id", todoController.getTodo);
router.post("/todo/add", todoController.postTodo);
router.delete("/todo/:id", todoController.deleteTodo);
router.put("/todo", todoController.updateTodo);

module.exports = router;