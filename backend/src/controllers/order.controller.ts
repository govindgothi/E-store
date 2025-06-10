import { Request, Response } from "express";
import { createorderService } from "../services/order.service.js";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const response = await createorderService(orderData);
    return res.status(response?.code).json(response)
  } catch (error) {
    console.log("error when creating order", error);
    return {
      code: 501,
      message: "unauthorise error when order creating",
      success: true,
      data: null,
    };
  }
};
