import mongoose from "mongoose";

const MainContainerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    },
  },
  { timestamps: true }
);

const MainContainer = mongoose.model("MainContainer", MainContainerSchema);
export default MainContainer;
