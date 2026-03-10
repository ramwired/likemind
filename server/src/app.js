const express = require("express");
require("dotenv").config();
const ConnectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

ConnectDB()
  .then(() => {
    console.log("Database Connection established!!!");
    app.listen(PORT, () => {
      console.log("Server running successfully at port 3000!");
    });
  })
  .catch((err) => {
    console.log("Database Connection Failed!");
  });
