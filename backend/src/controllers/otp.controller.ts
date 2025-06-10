import { Request, response, Response } from "express";
import { sendOtpService, verifyOtpService } from "../services/otp.service.js";

export const sendOtp = async (req: Request, res: Response) => {
  try {
    const { email, contact } = req.body;
    const response = await sendOtpService(email, contact);
    return res.status(response?.code).json(response);
  } catch (error) {
    return res.status(501).json({
      message: "server error, otp is not sending",
      code: 501,
      success: false,
      data: null,
    });
  }
};
export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { otp, email, contact } = req.body;
    const response = await verifyOtpService(otp, contact, email);
    return res.status(response?.code).json(response);
  } catch (error) {
    return res.status(501).json({
      message: "server error, otp is not verifying",
      code: 501,
      success: false,
      data: null,
    });
  }
};
