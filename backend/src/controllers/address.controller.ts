import { Request, Response } from "express";
import { Address, IAddress } from "../models/address.model.js";
import {
  createAddressService,
  deleteAddressByIdService,
  listOfAddressService,
  updateAddressByIdService,
} from "../services/address.service.js";

export const createAddress = async (req: Request, res: Response) => {
  try {
    const {
      address,
      pinCode,
      district,
      town,
      state,
      city,
      country = "India",
    } = req.body;
    const userId = req.params.id;
    const response = await createAddressService(userId, {
      district,
      address,
      city,
      town,
      state,
      pinCode,
      country,
    });
    return res.status(response?.code).json(response);
  } catch (error) {
    return res.status(501).json({
      message: "Unauthorise error when create address",
      success: true,
      code: 501,
    });
  }
};
export const listOfAddress = async (req: Request, res: Response) => {
  try {
    const response = await listOfAddressService();
  } catch (error) {
    return res.status(501).json({
      message: "Unauthorise error when get list of address",
      success: true,
      code: 501,
    });
  }
};
export const updateAddressById = async (req: Request, res: Response) => {
  try {
    const response = await updateAddressByIdService();
  } catch (error) {
    return res.status(501).json({
      message: "Unauthorise error when update address",
      success: true,
      code: 501,
    });
  }
};
export const deleteAddressById = async (req: Request, res: Response) => {
  try {
    const response = await deleteAddressByIdService();
  } catch (error) {
    return res.status(501).json({
      message: "Unauthorise error when delete address",
      success: true,
      code: 501,
    });
  }
};
