const mongoose = require("mongoose");

// define schema for book document
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
    maxLength: [100, "Book title can't be more then 100 charecters"],
    minLength: [10, "Book title should be at least 10 charecters"],
  },
  author: {
    type: String,
    required: [true, "Author name is rquired"],
    trim: true,
    maxLength: [50, "Author name can't be more then 50 charecters"],
    minLength: [5, "Author name should be at least 5 charecters"],
  },
  pages: {
    type: Number,
    required: [true, "Number of pages is required"],
  },
  publishedYear: {
    type: Number,
    required: [true, "Publication year is required"],
    min: [1000, "Publication year should be at least 1000"],
    max: [new Date().getFullYear(), "Publication year can't be in the future"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// export the book model
module.exports = mongoose.model("Book", bookSchema);
