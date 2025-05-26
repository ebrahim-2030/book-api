const mongoose = require("mongoose");

// function to connect Mongodb using Mongoose
const connectToDB = async (DB_URI) => {
  try {
    // attempt to establish connection with the provided URI
    await mongoose.connect(DB_URI);
    console.log("Connected to DB Successfully");
  } catch (err) {
    // log error and terminate process if connection fails
    console.log("Couldn't connect to DB:", err.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
