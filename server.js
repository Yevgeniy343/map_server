import express from "express";
import mongoose from "mongoose";
const app = express();
import morgan from "morgan";

import authRouter from "./routes/authRoutes.js";
// import errorHandlerMiddleware from "./midlware/error-handler.js";

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "welcom" });
});

app.use("/api/auth", authRouter);

// app.use(errorHandlerMiddleware);

mongoose.set("strictQuery", false);

mongoose
  .connect(`mongodb+srv://batan:thnnht777@cluster0.4rkyw.mongodb.net/messenger`)
  .then(() => {
    app.listen(1000);
    console.log("Server has been started, DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
