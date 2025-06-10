import { Categories } from "../models/categories.model.js";
import { Product } from "../models/product.model.js";
import { Session } from "../models/session.model.js";
export const ItemListService = async (sid: string) => {
  try {
    const fav = await Product.find(
      { favourite: true },
      "productImageUrl productName"
    );
    const top = await Product.find(
      { top: true },
      "productImageUrl productName productPrice"
    );
    const topCateg = await Categories.find(
      { top: true },
      "categoryName thumbImageUrl"
    );

    if (!(fav.length > 2 && top.length > 3 && topCateg.length > 3)) {
      return {
        message: "no data found",
        code: 301,
        success: true,
        data: null,
      };
    }
    if (!sid) {
      console.log("object sid",sid)
      const sessions = await Session.create({});
      return {
        auth: {
          sid: "sid",
          sessionId: sessions.id,
          option: {
            httpOnly: true,
            signed: true,
            maxAge: 100 * 60 * 60,
          },
        },
        message: "data is succesfully fetched",
        code: 201,
        success: true,
        data: {
          fav,
          top,
          topCateg,
        },
      };
    }
    return {
      message: "data is succesfully fetched",
      code: 201,
      success: true,
      data: {
        fav,
        top,
        topCateg,
      },
    };
  } catch (error) {
    console.log("error while getting data", error);
    return {
      message: "data is not found",
      code: 501,
      success: true,
      data: null,
    };
  }
};
