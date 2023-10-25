const Book = require("../../models/Book");

const getAllBooks = async (req, res) => {
  const allBooks = await Book.find();
  res.status(200).json(allBooks);
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  const foundBook = await Book.findById(id);
  res.status(200).json(foundBook);
};

const createBook = async (req, res) => {
  try {
    if (!req.body.title && !req.body.author) {
      return res.json("Fill the missing fields");
    }
    const newBook = await Book.create(req.body);

    res.status(200).json(newBook);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;

  const foundBook = await Book.findByIdAndDelete(id);
  res.status(204).end();
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
