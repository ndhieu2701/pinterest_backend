import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image_urls: {
      type: Map,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
      },
    },
    public: {
      type: Boolean,
      default: true,
    },
    collab: {
      type: Array,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    comments: {
      type: Map,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    },
    default_collection: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Collection = mongoose.model("Collection", CollectionSchema);
export default Collection;
