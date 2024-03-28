import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    image_url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comment: {
      type: Array,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    },
    src_img_url: String,
    like: {
      type: Map,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    public: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", ImageSchema);
export default Image;
