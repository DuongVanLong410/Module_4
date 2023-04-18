// models/users.js

const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
