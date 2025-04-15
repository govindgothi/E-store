import { NextFunction, Request, Response } from "express";
import Product from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import multer from "multer";
import path from "path";
import { uploadToCloudinary } from "../utils/cloudinary.js";

const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      name,
      type,
      description,
      price,
      discountPercentage,
      thumbNailImage,
      imageList,
      stock,
      quantity,
    } = req.body;

    if (!userId || !name || !price) {
      return res
        .status(400)
        .json({ error: "User ID, Name & Price are required" });
    }

    const newProduct = await Product.create({
      userId,
      name,
      type,
      description,
      price,
      discountPercentage,
      thumbNailImage,
      imageList,
      stock,
      quantity,
    });

    res
      .status(201)
      .json({ message: "Product created successfully", data: newProduct });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const products = await Product.find().skip(skip).limit(Number(limit));
    const total = await Product.countDocuments();

    res.json({
      message: "Products fetched successfully",
      data: products,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
    });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: error.message });
  }
};


const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Product found", data: product });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Error fetching product", details: error.message });
  }
};

// ✅ UPDATE PRODUCT (Partial Update)
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct)
      return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Product updated successfully", data: updatedProduct });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Error updating product", details: error.message });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Product deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Error deleting product", details: error.message });
  }
};

const ListNewProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        userId,
        name,
        type,
        description,
        price,
        discountPercentage,
        thumbNailImage,
        imageList,
        stock,
        quantity,
      } = req.body;

      if (
        !userId ||
        !name ||
        !type ||
        !price ||
        !discountPercentage ||
        !thumbNailImage ||
        !stock ||
        !quantity
      ) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }

      const newProduct = await Product.create({
        userId,
        name,
        type,
        description,
        price,
        discountPercentage,
        thumbNailImage,
        imageList,
        stock,
        quantity,
      });

      if (!newProduct)
        return res
          .status(401)
          .json({ success: false, message: "product is not added" });

      res
        .status(201)
        .json({
          success: true,
          message: "Product added successfully",
          data: newProduct,
        });
    } catch (err) {
      console.log(err, "err");
    }
  }
);

// const updateProduct = asyncHandler(async(req: Request, res: Response, next: NextFunction)=>{
//     try{
//         // const _id:string ='67de1e3317b15f9310714c25'
//         // const updatedFields = req.body;
//         const { _id } = req.params;
//         const updateFields = req.body
//         if (!Object.keys(updateFields).length) {
//           return res.status(400).json({ success: false, message: "No fields provided to update" });
//         }
//         const updatedDoc = await Product.findByIdAndUpdate(
//             _id,
//             { $set: updateFields },
//             {
//                 new: true,
//                 runValidators: true,
//             }
//         );
//         if (!updatedDoc) {
//           return res.status(404).json({ success: false, message: "Contact not found" });
//         }

//         res.status(200).json({ success: true, message: "Contact updated", data: updatedDoc });
//       } catch (error: any) {
//         res.status(500).json({ success: false, error: error.message });
//       }
// })

// const storage = multer.diskStorage({
//     destination: function (req:Request, file, cb) {
//         // console.log("object",req)
//         cb(null, "src/public/uploads/"); // Store files in 'public/uploads/'
//     },
//     filename: function (req:Request, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//     }
// });
const storage = multer.memoryStorage();

// Initialize multer
const upload = multer({ storage });

const uploadProduct = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("storage", upload);
    const data = req.file?.buffer;
    console.log(data, "buffer");
    const result = await uploadToCloudinary(
      req.file?.buffer,
      req.file?.originalname
    );
    return res.json(req.body);
  }
);

export { ListNewProduct, updateProduct, uploadProduct, upload };
