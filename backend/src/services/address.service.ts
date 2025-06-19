import mongoose from "mongoose";
import { Address } from "../models/address.model.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
interface shipAdd {
  district: string;
  address: string;
  city: string;
  town: string;
  state: string;
  pinCode: number;
  country: string;
};
type Rule =
  | { required: true; message: string }
  | { pattern: RegExp; message: string }
  | { minLength: number; message: string };


export const createAddressService = async (
  userId: string,
  shippingAddress: {
    district: string;
    address: string;
    city: string;
    town: string;
    state: string;
    pinCode: number;
    country: string;
  }
) => {
  try {
    if (!userId) {
      return new ApiResponse(401, "userId is not found", false, null);
    }
    const user = await User.findById({ _id: userId });
    if (!user?._id) {
      return new ApiResponse(401, "userId is not found", false, null);
    }
    const configAddress = {
      district: [
       { require:true,message:'district is required'}
      ],
      address: [],
      city: [],
      town: [],
      state: [],
      pinCode: [],
      country: [],
    };
    let error: {};
    const validateAdrress = (shippingAddress: shipAdd) => {
      Object.entries(shippingAddress).forEach(([key, value]) => {
        const fieldKey = key as keyof typeof configAddress;
        configAddress[fieldKey].some((rule: any) => {
          if (rule.required && !value) {
            error[key] = rule.message;
            return true;
          }
          if (rule.pattern && !rule.pattern.test(value)) {
            errData[key] = rule.message;
            return true;
          }
          if (rule.minLength && value.length < 8) {
            errData[key] = rule.message;
            return true;
          }
        });
      });
      return errData;
      });
    };
    const err = validateAdrress(shippingAddress);
    const address = await Address.findOne({ userId: userId });
    if (address || address !== null) {
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

export const getAddressById = async () => {
  try {
    return {
      address: "",
      code: 401,
      success: false,
      data: null,
    };
  } catch (error) {
    console.log("error while getting address", error);
    return {
      address: "",
      code: 401,
      success: false,
      data: null,
    };
  }
};
export const listOfAddressService = async () => {};
export const updateAddressByIdService = async () => {};
export const deleteAddressByIdService = async () => {};
