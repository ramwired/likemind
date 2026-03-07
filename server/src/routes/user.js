const express = require("express");
const userRouter = express.Router();
const userAuth = require("../middlewares/userAuth");
const ConnectionRequest = require("../models/connection");
const User = require("../models/user");
const USER_DATA = "firstName lastName gender profile about skills";

userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {
    const connectionRequest = await ConnectionRequest.find({
      toUserId: req.user._id,
      status: "interested",
    }).populate("fromUserId", "firstName lastName");
    res.json({
      data: connectionRequest,
    });
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
});
userRouter.get("/user/connections", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const connectionRequest = await ConnectionRequest.find({
      $or: [
        { fromUserId: loggedInUser, status: "accepted" },
        { toUserId: loggedInUser, status: "accepted" },
      ],
    })
      .populate("fromUserId", "firstName lastName")
      .populate("toUserId", "firstName lastName");
    const connections = connectionRequest.map((field) => {
      if (loggedInUser._id.equals(field.toUserId._id)) {
        return field.fromUserId;
      } else {
        return field.toUserId;
      }
    });
    res.json({
      data: connections,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
userRouter.get("/user/feed", userAuth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    limit = limit > 50 ? 50 : limit;
    let skip = (page - 1) * limit;
    const loggedInUser = req.user;
    const dataSet = new Set();
    const connectionRequest = await ConnectionRequest.find({
      $or: [{ fromUserId: loggedInUser._id }, { toUserId: loggedInUser._id }],
    }).select("fromUserId toUserId");
    connectionRequest.forEach((field) => {
      dataSet.add(field.fromUserId.toString());
      dataSet.add(field.toUserId.toString());
    });
    dataSet.add(loggedInUser._id.toString());
    const feedUsers = await User.find({
      _id: { $nin: [...dataSet] },
    })
      .select(USER_DATA)
      .skip(skip)
      .limit(limit);
    res.json({
      data: feedUsers,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = userRouter;
