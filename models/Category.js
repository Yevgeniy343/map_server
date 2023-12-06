import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide category"],
      trim: true,
    },
    parentId: {
      type: String,
      // required: [true, "Please provide parentId"],
      trim: true,
    },
    // type: {
    //   type: String,
    //   required: [true, "Please provide type"],
    //   trim: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
