const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ["interested", "ignored", "accepted", "rejected"],
        message: "{VALUE} is not a valid role",
        required: true,
      },
    },
  },
  {
    timeStamp: true,
  },
);
requestSchema.index({ fromUserId: 1, toUserId: 1 });
module.exports = mongoose.model("ConnectionRequest", requestSchema);
