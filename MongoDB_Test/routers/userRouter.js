// routers/userRouter.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Create a new users
router.post('/', userController.createUser);

module.exports = router;
