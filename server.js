const express = require("express");
const dotnev = require("dotenv");
const mongoose = require("mongoose");

dotnev.config();
const app = express();

app.use(express.json())

mongoose
  .connect(process.env.MONGO_CONNECTION_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));
