// load environment variables
require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db.js");

const app = express();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

// establish connection to MongoDB using Mongoose
connectToDB(DB_URI);

// parse incoming JSON requests
app.use(express.json());

// start express server and listen on defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
