import { Categories, ICategories } from "../models/categories.model.js";

export const createCategoryService = async (
  bodyData: ICategories,
  userId: string
) => {
  try {
    const { categoryName, thumbImageUrl, imageList, fromPrice, totalItems } =
      bodyData;
    const category = await Categories.findOne({ categoryName });
    if (!category?._id && category !== null) {
      return {
        code: 401,
        success: false,
        message: "Category is all ready here",
      };
    }
    const createCategory = Categories.create({
      categoryName,
      thumbImageUrl,
      imageList,
      fromPrice,
      totalItems,
    });
    if (!createCategory) {
      return {
        code: 401,
        success: false,
        message: "Category is not created",
      };
    }
    return {
      code: 201,
      success: true,
      message: "Category created",
    };
  } catch (error) {
    console.log("createCategory error", error);
    return {
      code: 501,
      success: true,
      message: "Unauthorise request for creating category",
    };
  }
};

export const getCategoryListService = async () => {
  try {
    // if (!userId) {
    //   return {
    //     code: 401,
    //     success: false,
    //     message: "userId is not found",
    //   };
    // }
    const listOfCategory = await Categories.find();
    if (listOfCategory?.length === 0) {
      return {
        code: 201,
        success: false,
        message: "categories is not found",
      };
    }
    return {
      data: listOfCategory || null,
      message: "list of category",
      code: 201,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      message: "unauthorise category error",
      code: 501,
      success: false,
    };
  }
};
