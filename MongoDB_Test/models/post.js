// models/post.js

const mongoose = require('mongoose');

// Define Post schema
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

// Create Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
