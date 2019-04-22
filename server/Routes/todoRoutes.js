const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todoController');

router.get("/", todoController.getTodos);
router.get("/todo/:id", todoController.getTodo);
router.post("/todo/add", todoController.postTodo);

module.exports = router;