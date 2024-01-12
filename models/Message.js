import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    objectId: {
      type: String,
      required: [true, "Please provide objectId"],
    },
    name: {
      type: String,
      required: [true, "Please provide objectId"],
    },
    message: {
      type: String,
      required: [true, "Please provide objectId"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
