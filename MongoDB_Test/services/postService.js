
// services/postService.js

const Post = require('../models/post');

// Get all posts
exports.getAllPosts = async () => {
  try {
    const posts = await Post.find();
    return posts;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Get post by ID
exports.getPostById = async (postId) => {
  try {
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  } catch (err) {
    throw new Error(err.message);
  }
};
