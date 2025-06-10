import { model, Schema } from "mongoose";

const cartSchema = new Schema({
  userId:{
   type:Schema.Types.ObjectId,
   ref:'User'
  },
  data: [
    {
      id: { type: String },
      quantity: { type: Number },
    },
  ],
});

const Cart = model("Cart", cartSchema);
export { Cart };
