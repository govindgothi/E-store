import { Schema,model } from "mongoose";

interface verifyOtpType extends Document{
  email:string,
  contact:number,
  sendOtp:number,
  exp:Date
}

const verifyOtpSchema = new Schema<verifyOtpType>({
   email:{
    type:String,
   },
   contact:{
    type:Number
   },
   sendOtp:{
    type:Number,
   },
   exp:{
    type: Date,
    default: Date.now, // Store current timestamp
    expires: 120, // Automatically delete after 120 seconds (2 minutes)
   }
})

const VerifyOtp = model('VerifyOtp',verifyOtpSchema)

export {VerifyOtp}