const express = require("express");
const profileRouter = express.Router();
const userAuth = require("../middlewares/userAuth");
const bcrypt = require("bcrypt");
const {
  isEditDataValidated,
  isChangePasswordData,
} = require("../utils/validation");
const user = require("../models/user");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!isEditDataValidated(req.body)) {
      return res.status(400).send("Bad request");
    }
    const loggedInUser = req.user;
    Object.keys(req.body).forEach(
      (field) => (loggedInUser[field] = req.body[field]),
    );
    await loggedInUser.save();
    res.send("Profile updated successfully!!");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});
profileRouter.patch("/profile/changePassword", userAuth, async (req, res) => {
  try {
    if (!isChangePasswordData(req.body)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid request format",
      });
    }
    if (!(await req.user.validatePassword(req.body.currentPassword))) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid credentials",
      });
    }
    const passwordhash = await bcrypt.hash(req.body.newPassword, 10);
    await user.findByIdAndUpdate(req.user._id, {
      password: passwordhash,
    });
    res.send("Password updated successfully!!");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

module.exports = profileRouter;
