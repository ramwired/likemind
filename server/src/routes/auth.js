const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

authRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password,skills,about,gender } = req.body;
    const passwordhash = await bcrypt.hash(password, 10);
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      password: passwordhash,
      skills: skills,
      about: about,
      gender: gender
    });
    await user.save();
    res.send("User registered successfully!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const validUser = await User.findOne({ emailId: emailId });
    if (!validUser) {
      throw new Error("Invalid credentials");
    }
    const isValidPassword = await validUser.validatePassword(password);
    if (!isValidPassword) {
      throw new Error("Invalid credentials");
    }
    const token = validUser.getJWT();
    res.cookie("token", token);
    res.send("Login successfully!!!");
  } catch (err) {
    res.status(401).send(err.message);
  }
});
authRouter.post("/logout", (req, res) => {
  res.cookie("token",null, {expires: new Date(Date.now())});
  res.send("Logout successfully!!");
});
module.exports = authRouter;
