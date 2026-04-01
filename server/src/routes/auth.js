const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { ageValidation } = require("../utils/validation");

authRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password, dob, gender } = req.body;
    if (!ageValidation(dob)) {
      return res.status(401).send("Age must be above 18");
    }
    const passwordhash = await bcrypt.hash(password, 10);
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      password: passwordhash,
      dob: dob,
      gender: gender,
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
      return res.status(401).send("Invalid credentials");
    }
    const isValidPassword = await validUser.validatePassword(password);
    if (!isValidPassword) {
      return res.status(401).send("Invalid credentials");
    }
    const token = validUser.getJWT();
    res.cookie("token", token, { httpOnly: true });
    res.send("Login successfull!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});
authRouter.post("/logout", (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("Logout successfully!!");
});
module.exports = authRouter;
