// services/userService.js

const User = require('../models/user');

// Get all users
exports.getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch
        (err) {
        throw new Error(err.message);
    }
};

// Get user by ID
exports.getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
};