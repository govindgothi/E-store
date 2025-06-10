import { IProduct, Product } from "../models/product.model.js";

export const createProductService = async (productData: IProduct) => {
  try {
    const {
      userId,
      name,
      category,
      description,
      price,
      discountPercentage,
      thumbNailImage,
      imageList,
      stock,
      quantity,
      WeightIn,
    } = productData;

    if (!(Object.keys(productData).length > 2)) {
      return {
        message: "product data is not found",
        code: 401,
        success: false,
        data: null,
      };
    }
    let emptyFields: Record<string, string> = {};

    for (const [key, value] of Object.entries(productData)) {
      const isEmpty =
        value === undefined ||
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0);

      if (isEmpty) {
        emptyFields[key] = `${key} is required`;
      }
    }
    if (Object.keys(emptyFields).length !== 0) {
      return {
        message: "product is not created",
        code: 401,
        success: false,
        data: emptyFields,
      };
    }

    if (!(stock > 1) || !(description.length > 100)) {
      return {
        message: "stock or description is not mention",
        code: 401,
        success: false,
        data: null,
      };
    }

    const product = await Product.create({
      userId,
      name,
      category,
      description,
      price,
      discountPercentage,
      thumbNailImage,
      imageList,
      stock,
      quantity,
      WeightIn,
    });

    return {
      message: "product is created",
      code: 401,
      success: false,
      data: { name, category, price },
    };
  } catch (error) {
    console.log("error product creating 401");
    return {
      message: "product is not created",
      code: 401,
      success: false,
      data: null,
    };
  }
};

export const getAllProductsService = async (
  page: number,
  limit: number,
  skip: number
) => {
  try {
    if (!(skip >= 0 && limit > 0 && page > 0)) {
      return {
        message: "value inside skip,page,limit is not true",
        code: 401,
        success: false,
        data: null,
      };
    }
    const products = await Product.find().skip(skip).limit(Number(limit));
    const total = await Product.countDocuments();

    return {
      message: "Products fetched successfully",
      data: {
        products,
        total,
        page: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
      },
      code: 201,
      success: true,
    };
  } catch (error) {
    return {
      message: "Products not fetched due to error",
      data: null,
      code: 501,
      success: false,
    };
  }
};

export const getProductByIdService = async (id: string) => {
  try {
    if (!id) {
      return {
        message: "product id is not found",
        data: null,
        code: 401,
        success: false,
      };
    }
    const product = await Product.findById({ _id: id });
    if (!product) {
      return {
        message: "Products not found",
        data: {},
        code: 301,
        success: true,
      };
    }
    return {
      message: "Products is fetched successfully",
      data: product,
      code: 201,
      success: true,
    };
  } catch (error) {
    return {
      message: "Products not fetched due to error",
      data: null,
      code: 501,
      success: false,
    };
  }
};
