const express = require('express');
const router = express.Router();
const todoController = require('../Controllers/todoController');

router.get("/", todoController.getTodos);

module.exports = router;