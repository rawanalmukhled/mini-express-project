const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("CONNECTED TO DATABASE");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
