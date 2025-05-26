// import Book model
const book = require("../../../../NodeJS/NodeJS Sangam/chapter-7/2.bookstore-api/models/book.js");
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
  try {
    // extract book-id from route parameters
    const bookId = req.params.id;

    // find book by id in the database
    const foundBook = await Book.findById(bookId);

    // return 404 if book not found
    if (!foundBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found with the given ID",
      });
    }

    // send success response, if book found
    res.status(200).json({
      success: true,
      message: "Book found successfully",
      data: foundBook,
    });
  } catch (err) {
    // log error and send back failure response
    console.error("Get single book error ->", err);
    res.status(500).json({
      success: false,
      message: "Couldnt' fetch the book",
    });
  }
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
  try {
    // extract book-id from route parameters
    const bookId = req.params.id;

    // get updated form data from the request body
    const updateBookData = req.body;

    // update book document, return updated version and run validators
    const updatedBook = await Book.findByIdAndUpdate(bookId, updateBookData, {
      new: true,
      runValidators: true,
    });

    // return 404 if book not found
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found with the given id",
      });
    }

    // send success response, if book updated
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (err) {
    // log error and send back failure response
    console.error("Update book error ->", err.message);
    res.status(500).json({
      success: false,
      message: "Couldn't update the book",
    });
  }
};

// delete a book by id
const deleteBook = async (req, res) => {
  try {
    // extract book-id from route parameters
    const bookId = req.params.id;

    // delete the book document form the database
    const deletedBook = await Book.findByIdAndDelete(bookId);

    // return 404, if book not found
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found with given id",
      });
    }

    // send success response, if book deleted
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (err) {
    // log error and send back failure response
    console.error("Delete book error ->", err.message);
    res.status(500).json({
      success: false,
      message: "Couldn't delete the book",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
};
