import { Categories } from "../models/categories.model.js";
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { createSessionIfNeeded } from "../utils/guestSession.js";

export const ItemListService = async (gsid: string) => {
  try {
    const [fav, top, topCateg] = await Promise.all([
      Product.find({ favourite: true }, "productImageUrl productName"),
      Product.find({ top: true }, "productImageUrl productName productPrice"),
      Categories.find({ top: true }, "categoryName thumbImageUrl"),
    ]);

    const isSufficientData =
      fav.length > 2 && top.length > 3 && topCateg.length > 3;

    if (!isSufficientData) {
      return new ApiResponse(204, "No data found", false, null);
    }

    const responsePayload: any = {
      fav,
      top,
      topCateg,
    };

    if (!gsid) {
      const sessionAuth = await createSessionIfNeeded();
      return new ApiResponse(201, "Data fetched", true, {
        auth: sessionAuth,
        ...responsePayload,
      });
    }

    return new ApiResponse(201, "Data fetched", true, responsePayload);
  } catch (err) {
    console.error("Error in ItemListService:", err);
    return new ApiResponse(500, "Internal Server Error", false, null);
  }
};
