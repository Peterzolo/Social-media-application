import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ImageSchema = mongoose.Schema(
  {
    cloudinary_id: {
      type: String,
    },

    image: {
      type: String,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("image", ImageSchema);

export default Image;
