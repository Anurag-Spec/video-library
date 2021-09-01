const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const movieRoute = require("./Routes/movies");
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
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);

app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});
