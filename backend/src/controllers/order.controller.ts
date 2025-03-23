import { NextFunction, Request, Response } from "express";
import Order from "../models/order.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createOrder = asyncHandler(async (req:Request,res:Response,next:NextFunction) => {
  try {
    const newOrder = await Order.create({
      userName: "govind gothi", // Replace with actual user ID
      userId:'65fa123456789abc12345678',
      products: [
        {
          productId: "65fa987654321cba87654321", // Replace with actual product ID
          name: "Wireless Headphones",
          price: 2000,
          quantity: 3,
        },
      ],
      totalAmount: 6000, // 2 x 2999
      paymentStatus: "pending",
      paymentMethod: "Credit Card",
      orderStatus: "pending",
      shippingAddress: {
        fullName: "John Doe",
        address: "123 Street, Green Avenue",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA",
      },
    });

    console.log("Order Created Successfully:", newOrder);
    return res.json(newOrder)
  } catch (error) {
    console.error("Error creating order:", error);
  }
})

export {
    createOrder
}
