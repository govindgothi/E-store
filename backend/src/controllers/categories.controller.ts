import { Request, Response } from "express";
import { Categories } from "../models/categories.model.js";
import { createCategoryService, getCategoryListService } from "../services/categories.service.js";

export const createCategory = async(req: Request, res: Response) => {
  try {
    const userId = req.params._id
    const bodyData = req.body
    const response = await createCategoryService(bodyData,userId)
    return res.status(response?.code).json(response)
  } catch (error) {
    console.log("creat category error",error)
    return res.status(501).json({message:"internal server error",code:501,success:false})
  }
};

export const getCategoryList = async(req: Request, res: Response) => {
   try {
    // const userId = req.params._id
    const response = await getCategoryListService()
    return res.status(response?.code).json(response)
  } catch (error) {
    console.log("creat category error",error)
    return res.status(501).json({message:"internal server error",code:501,success:false})
  }
};

export const getCategoryById = (req: Request, res: Response) => {

};

export const getAllProductInCategoryById = (req: Request, res: Response) => {};
export const deleteCategoryById = (req: Request, res: Response) => {};
export const updateCategoriesById = (req: Request, res: Response) => {};
