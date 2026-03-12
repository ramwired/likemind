const jwt = require("jsonwebtoken");
const User = require("../models/user");
const JWT_SECRET = process.env.JWT_SECRET;

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Pls login!!");
    }
    const decodedData = jwt.verify(token, JWT_SECRET);
    const userData = await User.findById(decodedData._id);
    if (!userData) {
      throw new Error("User not found");
    }
    req.user = userData;
    next();
  } catch (err) {
    res.status(401).send("Authentication failed " + err.message);
  }
};
module.exports = userAuth;
