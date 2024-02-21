import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import "express-async-errors";
const app = express();
import morgan from "morgan";

import authRouter from "./routes/authRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import auth_adminRouter from "./routes/auth_adminRoutes.js";
import path from "path";

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads/files", express.static(path.join("uploads", "files")));

app.get("/", (req, res) => {
  res.json({ msg: "welcom" });
});

app.use("/api/auth", authRouter);
app.use("/api/auth_admin", auth_adminRouter);
app.use("/api/admin", adminRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

mongoose.set("strictQuery", false);

mongoose
  .connect(
    // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/map`
    `mongodb+srv://frolovaan01:o7iC2W4qqftl8gpT@myraion.rgrsdna.mongodb.net/map`
  )
  .then(() => {
    app.listen(1000);
    console.log("Server has been started, DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
