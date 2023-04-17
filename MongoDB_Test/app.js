// app.js

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');

// Create express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });

// Use routers
app.use('/users', userRouter);
app.use('/posts', postRouter);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
