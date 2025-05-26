// load environment variables
require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db.js");
const bookRouter = require("./routes/book-routes.js");

const app = express();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

// establish connection to MongoDB using Mongoose
connectToDB(DB_URI);

// parse incoming JSON requests
app.use(express.json());

// register book-related routes under the /api/books
app.use("/api/books", bookRouter);

// start express server and listen on defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
