import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: [true, "Please provide email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", AdminSchema);
