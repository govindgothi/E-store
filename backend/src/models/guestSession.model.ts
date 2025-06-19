import { Schema, model } from "mongoose";

interface IGuestSession extends Document {
  cartItem: {id:string,quantity:number}[],
  createdAt:Date
}


const guestSessionSchema = new Schema<IGuestSession>({

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

const GuestSession = model("GuestSession", guestSessionSchema);

export { GuestSession, IGuestSession};
