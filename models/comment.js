import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    sub_comments: {
      type: Map,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    like: {
      type: Map,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
