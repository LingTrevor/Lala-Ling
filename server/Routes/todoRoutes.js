const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todoController');

router.get("/", todoController.getTodos);
router.get("/todo/:id", todoController.getTodo);

module.exports = router;