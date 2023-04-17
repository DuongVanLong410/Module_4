// routers/postRouter.js

const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

// Create a new post
router.post('/', postController.createPost);

module.exports = router;
