import express from "express";
import mongoose from "mongoose";
const app = express();
import morgan from "morgan";

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "welcom" });
});

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
