const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
dotenv.config();
const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("conn successfull"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
