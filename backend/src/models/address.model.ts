import mongoose, { Schema, model } from "mongoose";

interface IAddress extends Document {
  userId: Schema.Types.ObjectId;
  shippingAddress: {
    district: string;
    town:string,
    address: string;
    city: string;
    state: string;
    pinCode: number;
    country: string;
  }[];
}

const addressSchema = new Schema<IAddress>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user id is require"],
  },
  shippingAddress: [
    {
      district: {
        type: String,
        required: true,
      },
       town: {
        type: String,
        // required: true,
      },
      address: {
        type: String,
        maxLength: 100,
        required: [true, "address is require"],
      },
      city: {
        type: String,
        required: [true, "city is require"],
      },
      state: {
        type: String,
        required: [true, "state is require"],
      },

      pinCode: {
        type: Number,
        required: [true, "pipCode is require"],
        validate: {
          validator: function (value: number) {
            return /^\d{6}$/.test(value.toString());
          },
          message: "PIN code must be exactly 6 digits",
        },
      },
      country: {
        type: String,
        default:'India'
      },
    },
  ],
});

const Address = model("Address", addressSchema);

export { Address, IAddress };
