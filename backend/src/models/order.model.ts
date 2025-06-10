import mongoose, { Schema, Document } from "mongoose";

interface IOrder extends Document {
  userName: string;
  email:mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId;
  products: {
    productId: mongoose.Schema.Types.ObjectId;
    name: string;
    price: number;
    quantity: number;
  }[];
  totalAmount: number;
  paymentStatus: "pending" | "paid" | "failed";
  paymentMethod: "COD" | "Credit Card" | "UPI" | "PayPal";
  orderStatus: "pending" | "confirmed" | "shipped" | "delivered" | "canceled";
  shippingAddress: {
    pinCode: number;
    district: string;
    state: string;
    country: string;
    town: string;
    city: string;
    address: string;
  };
  placedAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    userName: {
      type: String,
      ref: "User",
      required: [true, "user name is must"],
      trim: true,
    },
    email: {
      type: String,
      ref: "User",
      required: [true, "email name is must"],
      trim: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user Id is must"],
      trim: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: {
          type: String,
          trim: true,
          required: [true, "product name is must"],
          validate: {
            validator: function (value: string) {
              return value?.length < 150;
            },
            message: (props: any) =>
              `length of name is less than 150. Provided: ${props.value}`,
          },
        },
        price: {
          type: Number,
          required: [true, "price is need for order completation"],
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
      validate: {
        validator: function (value: number) {
          let p: number = 0;
          this.products.map((item) => {
            p = p + item.price * item.quantity;
          });
          return p === value;
        },
        message: (props: any) =>
          `price should not match from ordered value: ${props.value}`,
      },
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "Credit Card", "UPI", "PayPal"],
      required: [true, "payment method is needed"],
    },

    orderStatus: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "canceled"],
      default: "pending",
    },

    shippingAddress: {
      pinCode: { type: Number, required: true },
      district: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      town: { type: String, required: true },
      city: { type: String, required: true },
      address: { type: String, required: true },
    },
    placedAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model<IOrder>("Order", OrderSchema);
export { Order, IOrder};
