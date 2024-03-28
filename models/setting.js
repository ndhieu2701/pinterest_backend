import mongoose from "mongoose";

const SettingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    theme: {
      type: Number,
      default: 1,
      enum: [0, 1],
    },
  },
  { timestamps: true }
);

const Setting = mongoose.model("Setting", SettingSchema);
export default Setting;
