// import Book model
const Book = require("../models/Book.js");
const { all } = require("../routes/book-routes.js");

// get all books from the database
const getAllBooks = async (req, res) => {
  try {
    // retrieve all books from database
    const allBooks = await Book.find({});

    // send success response, if books found
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: "Books fetched successfully",
        data: allBooks,
      });
    }
  } catch (err) {
    // log error and send failure respond
    console.error("Fetch all books error ->", err.message);
    res.status(500).json({
      success: false,
      message: "Couldn't fetch books",
    });
  }
};

// get a single book by id
const getSingleBook = async (req, res) => {
  // todo: implement getSingleBook logic
};

// add a new book to the database
const addBook = async (req, res) => {
  try {
    // extract form data from the request body
    const bookData = req.body;

    // create a new document in the database
    const newBook = await Book.create(bookData);

    // send success response if book created
    if (newBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newBook,
      });
    }
  } catch (err) {
    // log error and send back failure response
    console.error("Add new book error -> ", err.message);
    res.status(500).json({
      success: false,
      message: "Couldn't add new book",
    });
  }
};

// update an existing book by id
const updateBook = async (req, res) => {
  // todo: implement updateBook logic
};

// delete a book by id
const deleteBook = async (req, res) => {
  // todo: implement deleteBook logic
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
};
