import { NextFunction, Request, Response } from "express";
import Product from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import multer from 'multer'
import path from 'path'
import { uploadToCloudinary } from "../utils/cloudinary.js";

const ListNewProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {userId, name, type, description, price, discountPercentage, thumbNailImage, imageList, stock, quantity } = req.body;
      
      if (!userId || !name || !type || !price || !discountPercentage || !thumbNailImage || !stock || !quantity) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }
      
      const newProduct = await Product.insertMany({
        userId,
        name,
        type,
        description,
        price,
        discountPercentage,
        thumbNailImage,
        imageList,
        stock,
        quantity
      });

      if(!newProduct) return  res.status(401).json({success:false,message:'product is not added'})

      res.status(201).json({ success: true, message: "Product added successfully", data: newProduct });

    } catch (err) {
      console.log(err, "err");
    }
  }
);

const updateProduct = asyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    try{
        // const _id:string ='67de1e3317b15f9310714c25'
        // const updatedFields = req.body;
        const { _id } = req.params; 
        const updateFields = req.body
        if (!Object.keys(updateFields).length) {
          return res.status(400).json({ success: false, message: "No fields provided to update" });
        }
        const updatedDoc = await Product.findByIdAndUpdate(
            _id,
            { $set: updateFields }, 
            {
                new: true, 
                runValidators: true,
            }
        );
        if (!updatedDoc) {
          return res.status(404).json({ success: false, message: "Contact not found" });
        }
    
        res.status(200).json({ success: true, message: "Contact updated", data: updatedDoc });
      } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
      }
})


// const storage = multer.diskStorage({
//     destination: function (req:Request, file, cb) {
//         // console.log("object",req)
//         cb(null, "src/public/uploads/"); // Store files in 'public/uploads/'
//     },
//     filename: function (req:Request, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//     }
// });
const storage = multer.memoryStorage()

// Initialize multer
const upload = multer({ storage });

const uploadProduct = asyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
    console.log("storage",upload)
    const data = req.file?.buffer
    console.log(data,"buffer")
    const result = await uploadToCloudinary(req.file?.buffer, req.file?.originalname);
    return res.json(req.body)
})


export { 
    ListNewProduct,
    updateProduct,
    uploadProduct,
    upload,
 };
