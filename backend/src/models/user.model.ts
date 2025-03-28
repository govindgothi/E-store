import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Define User Interface
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  contact?: number;
  address?: string[];
  gender?: "Male" | "Female" | "Other";
//   ourProduct?: mongoose.Types.ObjectId[];
  refreshToken:string,
  order: Schema.Types.ObjectId,
  addReview:Schema.Types.ObjectId,
  generateAccessToken(): string;
  generateRefreshToken(): string;
  isPasswordCorrect(password: string): Promise<boolean>;
}

// Load environment variables with correct types
const AccessTokenSecret: string =
  process.env.ACCESS_TOKEN_SECRET || "default_access_secret";
const RefreshTokenSecret: string =
  process.env.REFRESH_TOKEN_SECRET || "default_refresh_secret";
  const ExpireAccessToken: number | undefined = process.env.ACCESS_TOKEN_EXPIRY 
  ? parseInt(process.env.ACCESS_TOKEN_EXPIRY) 
  : undefined;

const ExpireRefreshToken:  number | undefined = process.env.ACCESS_TOKEN_EXPIRY 
? parseInt(process.env.ACCESS_TOKEN_EXPIRY) 
: undefined;


// Define User Schema
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 20,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      maxlength: 50,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
      validate: {
        validator: function (value: string) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        },
        message:
          "Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one number, and one special character.",
      },
    },
    contact: {
      countryCode:{
        type:Number,
        
      },
      mobileNumber:{
        type: Number,
        trim: true,
        // max:10,
        // min:10,
      },
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    address: [
        {
          type: Schema.Types.ObjectId,
          ref:'Address',
        },
     ],
    order:[
        {
        type:Schema.Types.ObjectId,
        ref:'Order'
        } 
    ],
    addReview:[
        {
            type:Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
  },
  {
    timestamps: true,
  }
);

// 🔹 Hash password before saving
userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// 🔹 Check if password is correct
userSchema.methods.isPasswordCorrect = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

// 🔹 Generate Access Token
userSchema.methods.generateAccessToken = function (): string {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    AccessTokenSecret,
    { expiresIn: 3600 } //ExpireAccessToken
  );
};

// 🔹 Generate Refresh Token
userSchema.methods.generateRefreshToken = function (): string {
  return jwt.sign(
    { _id: this._id },
    RefreshTokenSecret,
    { expiresIn: 7200 } //ExpireRefreshToken
  );
};

// Define User Model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export { User, IUser };



