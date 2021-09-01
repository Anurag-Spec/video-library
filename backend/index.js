const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("conn successfull"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
