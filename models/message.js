import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: () => !this.image_url,
    },
    image_url: {
      type: String,
      required: () => !this.image_url,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    chatbot_message: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", MessageSchema);
export default Message;
