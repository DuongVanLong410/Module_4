// connect to database
const mongoose = require("mongoose");

async function connectDB() {
  // await mongoose.connect(
  //   `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.k7qck.mongodb.net/k14shop?retryWrites=true&w=majority`
  // );
  await mongoose.connect("mongodb://127.0.0.1:27017/my_database");
}

connectDB();
