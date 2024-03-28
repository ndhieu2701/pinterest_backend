import mongoose from "mongoose";
import config from "../config/config.js";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    gender: {
      type: Number,
      required: true,
      enum: [0, 1, 2],
    },
    avatar: {
      type: String,
      required: false,
      default: config.defaultAvatar,
    },
    favorite: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MainContent",
      },
    ],
    following: {
      type: Map,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    collection: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
      },
    ],
    setting: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Setting",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
