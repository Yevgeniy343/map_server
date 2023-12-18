import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide category"],
      trim: true,
      unique: [true, "Please provide uniq category"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
