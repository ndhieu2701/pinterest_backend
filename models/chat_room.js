import mongoose from "mongoose";

const ChatRoomSchema = new mongoose.Schema(
  {
    room_key_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: Array,
      of: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    },
  },
  {
    timestamps: true,
  }
);

const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema);
export default ChatRoom;
