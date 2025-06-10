import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
  sessionId: {
    type: String,
  },
  cartItem: [
    {
      id: { type: String, required: true },
      quantity: { type: Number },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 60, // ⏱️ auto-delete after 60 seconds
  },
});

const Session = model("Session", sessionSchema);

export { Session };
