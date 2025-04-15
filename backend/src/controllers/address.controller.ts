import { Request, Response } from "express";
import {Address,IAddress }from "../models/address.model.js";

const createAddress = async (req: Request, res: Response) => {
    try {
      const { userId, userEmail, shippingAddress } = req.body;
      const { address, city, state, zipCode, country } = shippingAddress;
  
      if (!userId || !userEmail || !address || !city || !state || !zipCode || !country) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }
      const newAddress = await Address.create({
        userId,
        userEmail,
        shippingAddress: { address, city, state, zipCode, country }
      });
  
      res.status(201).json({ success: true, data: newAddress });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  };
  
const getAllAddresses = async (_req: Request, res: Response) => {
  try {
    const addresses = await Address.find().populate("userId");
    res.status(200).json({ success: true, data: addresses });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const getAddressById = async (req: Request, res: Response) => {
  try {
    const address = await Address.findById(req.params.id).populate("userId");
    if (!address) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }
    res.status(200).json({ success: true, data: address });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const updateAddress = async (req: Request, res: Response) => {
  try {
    const add_Id =req.params.id
    const updatedData = req.body
    if(!add_Id) return res.status(404).json({success:false,message:'Id is not found'})
    const updatedAddress = await Address.findByIdAndUpdate(add_Id, updatedData, { new: true, runValidators: true });
    if (!updatedAddress) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }
    return res.status(200).json({ success: true, data: updatedAddress });
  } catch (err: any) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

const deleteAddress = async (req: Request, res: Response) => {
  try {
    const add_Id =req.params.id
    if(!add_Id) return res.status(404).json({success:false,message:'Id id not found'})
    const deletedAddress = await Address.findByIdAndDelete(add_Id);
    if (!deletedAddress) {
      return res.status(404).json({ success: false, message: "Address not found" });
    }
    return res.status(200).json({ success: true, message: "Address deleted successfully" });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
};


export {
  createAddress,
  getAddressById,
  getAllAddresses,
  updateAddress,
  deleteAddress,
}