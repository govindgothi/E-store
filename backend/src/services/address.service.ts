import mongoose from "mongoose";
import { Address } from "../models/address.model.js";
import { User } from "../models/user.model.js";

export const createAddressService = async (
  userId: string,
  shippingAddress: {
    district: string;
    address: string;
    city: string;
    state: string;
    pinCode: number;
    country: string;
  }
) => {
  try {
    if (!userId) {
      return {
        success: false,
        code: 401,
        message: "userId is not found",
      };
    }
    const user = await User.findById({ _id: userId });
    if (!user?._id) {
      return {
        success: false,
        code: 401,
        message: "userId is not found",
      };
    }
    const address = await Address.findOne({ userId: userId });
    if (address) {
      console.log("1");
      const addAddress = await Address.findOneAndUpdate(
        { userId },
        {
          $push: {
            shippingAddress: shippingAddress,
          },
        }
      );
      if (addAddress?._id) {
        return {
          code: 201,
          success: true,
          message: "add address successfuly",
        };
      } else {
        const addAddress = await Address.create({
          userId: new mongoose.Types.ObjectId(userId),
          shippingAddress: [shippingAddress],
        });
        if (addAddress._id) {
          return {
            code: 201,
            success: true,
            message: "add address successfuly",
          };
        }
      }
    }

    return {
      code: 401,
      success: false,
      message: "address is not added",
    };
  } catch (error) {
    console.log("error from creating address", error);
    return {
      success: false,
      code: 501,
      message: "userId is not found",
    };
  }
};

export const getAddressById = async () =>{
  try {
     return {
      address:'',
      code:401,
      success:false,
      data:null
    }
  } catch (error) {
    console.log("error while getting address",error)
    return {
      address:'',
      code:401,
      success:false,
      data:null
    }
  }
}
export const listOfAddressService = async () => {};
export const updateAddressByIdService = async () => {};
export const deleteAddressByIdService = async () => {};
