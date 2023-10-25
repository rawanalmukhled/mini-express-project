const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 5,
  },
  image: {
    type: String,
    default:
      "https://images.saymedia-content.com/.image/t_share/MTc0NDYxMDcxNzM3NDMxNjg2/1994-fun-facts-trivia-and-history.jpg",
  },
});

module.exports = mongoose.model("Book", BookSchema);
