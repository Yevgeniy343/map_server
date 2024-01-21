import mongoose from "mongoose";

const ObjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide object name"],
      trim: true,
    },
    subcategory: {
      type: String,
    },
    address: {
      type: String,
    },
    contacts: {
      type: String,
    },
    reviews: {
      r1: {
        type: Number,
      },
      r2: {
        type: Number,
      },
      r3: {
        type: Number,
      },
      r4: {
        type: Number,
      },
      r5: {
        type: Number,
      },
      r6: {
        type: Number,
      },
    },
    location: {
      lat: {
        type: Number,
      },
      long: {
        type: Number,
      },
    },
    info1: {
      type: Array,
    },
    info2: {
      type: Array,
    },
    image: {
      type: Array,
    },
    services: {
      type: String,
    },
    programs: {
      type: String,
    },
    breeds: {
      type: String,
    },
    shops: {
      type: String,
    },
    coffee: {
      type: String,
    },
    organisations: {
      type: String,
    },
    where: {
      type: String,
    },
    what: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Object", ObjectSchema);
