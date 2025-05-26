const express = require("express");
const {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller.js");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
