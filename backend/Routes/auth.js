const router = require("express").Router();

const User = require("../Models/User");

//Register

router.post("/register", (req, res) => {
  console.log(req.body, "req");
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  const user = newUser.save();
  res.json(user);
});

module.exports = router;
