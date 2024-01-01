import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide subcategory"],
      trim: true,
    },
    categoryId: {
      type: String,
      required: [true, "Please provide category"],
      trim: true,
    },
    imageName: {
      type: String,
      required: [true, "Please provide imageName"],
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("SubCategory", SubCategorySchema);
