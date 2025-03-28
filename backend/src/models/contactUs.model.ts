import mongoose, { Schema, Document } from "mongoose";

interface IContact extends Document {
  email: string;
  firstName?: string;
  lastName?: string;
  message?: string;
  phoneNo: number;
  countryCode?: string;
  description?: string;
}

const ContactSchema = new Schema<IContact>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (value: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    message: { type: String, trim: true },
    phoneNo: {
      type: Number,
      required: [true, "Phone number is required"],
      validate: {
        validator: function (value: number) {
          return value.toString().length === 10; 
        },
        message: "Invalid phone number",
      },
    },
    countryCode: { type: String, trim: true },
    description: { type: String, trim: true },
  },
  { timestamps: true }
);

// Create and export model
const Contact = mongoose.model<IContact>("Contact", ContactSchema);
export {Contact,IContact};