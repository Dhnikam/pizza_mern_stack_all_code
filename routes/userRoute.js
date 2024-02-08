const express = require("express");
const router = express.Router();
const User = require('../models/userModel');

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration success",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      const currentUser = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
    });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.post("/deleteUser", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findByIdAndDelete(userid);
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

module.exports = router;
