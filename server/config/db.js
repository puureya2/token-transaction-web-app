const mongoose = require('mongoose');
const { MONGO_URI } = require("./config.js");
const db = MONGO_URI;


const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      serverSelectionTimeoutMS: 5000,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
    
  } catch (err) {
    console.log('MongoDB Connection Error:');
    // console.error('MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


