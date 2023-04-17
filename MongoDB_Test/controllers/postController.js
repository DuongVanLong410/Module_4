// controllers/postController.js

const Post = require('../models/post');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const post = new Post({ title, content, userId });
        await post.save();
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
