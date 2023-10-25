const express = require("express");
const connectDB = require("./database");
const router = require("./api/books/routers");

const app = express();
PORT = 8000;
app.use(express.json());

app.use("/api", router);

connectDB();
app.listen(PORT, () => {
  console.log(
    "Server is Successfully Running, and App is listening on port ",
    PORT
  );
});
