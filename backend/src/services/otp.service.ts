import { verify } from "jsonwebtoken";
import { VerifyOtp } from "../models/otp.model.js";

export const sendOtpService = async (email: string, contact: number) => {
  try {
    const generateOTP = () => {
      return Math.floor(100000 + Math.random() * 900000);
    };
    const sendOtp = generateOTP();
    const savedOtp = await VerifyOtp.create({
      email,
      contact,
      sendOtp,
    });
    if (!savedOtp) {
    }
    return {
      message: "otp is sent on your mobile number",
      code: 201,
      success: true,
      data: sendOtp,
    };
  } catch (error) {
    return {
      message: "error while generating otp",
      code: 501,
      success: false,
      data: null,
    };
  }
};

export const verifyOtpService = async (
  otp: number,
  contact: number,
  email: string
) => {
  try {
    const otpFind = await VerifyOtp.findOne({
      $or: [{ email: email }, { contact: contact }],
    });
    if (otpFind?.sendOtp !== otp) {
      return {
        message: "otp is not matched",
        success: true,
        code: 301,
        data: null,
      };
    }
    return {
      message: "otp is matched",
      success: true,
      code: 201,
      data: null,
    };
  } catch (error) {
    return {
      message: "error while verifying otp",
      code: 401,
      success: false,
      data: null,
    };
  }
};
