const express = require("express");
const requestRouter = express.Router();
const userAuth = require("../middlewares/userAuth");
const ConnectionRequest = require("../models/connection");
const {
  isSendRequestValidated,
  isReviewRequestValidated,
} = require("../utils/validation");
const User = require("../models/user");

requestRouter.post("/request/send/:status/:id", userAuth, async (req, res) => {
  try {
    if (!isSendRequestValidated(req.params, req.user)) {
      return res.status(401).json({
        message: "Invalid request format",
      });
    }
    const { status, id } = req.params;
    const toUser = await User.findById(id);
    if (!toUser) {
      return res.status(404).json({
        status: "fail",
        message: "User not found!!",
      });
    }
    const userData = await ConnectionRequest.findOne({
      $or: [
        { fromUserId: req.user._id, toUserId: id },
        { fromUserId: id, toUserId: req.user._id },
      ],
    });
    if (userData) {
      return res.status(400).json({
        status: "fail",
        message: "Request already exist!!",
      });
    }
    const request = new ConnectionRequest({
      fromUserId: req.user._id,
      toUserId: id,
      status: status,
    });
    await request.save();
    res.send(
      `${req.user.firstName} ${req.user.lastName} send connection request to ${toUser.firstName} ${toUser.lastName} [${status}]`,
    );
  } catch (err) {
    res.status(500).send("Something went wrong!!");
  }
});
requestRouter.post(
  "/request/review/:status/:id",
  userAuth,
  async (req, res) => {
    try {
      const { status, id } = req.params;
      if (!isReviewRequestValidated(status)) {
        return res.status(401).json({
          message: "Invalid request format",
        });
      }
      const request = await ConnectionRequest.findOne({
        fromUserId: id,
        toUserId: req.user._id,
        status: "interested",
      });
      if (!request) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      request.status = status;
      await request.save();
      res.send(`[${status}]`);
    } catch (err) {
      res.status(500).send("Something went wrong!!");
    }
  },
);
module.exports = requestRouter;
