import { Request, Response } from "express";
import { ItemListService } from "../services/homeItem.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const ItemList = asyncHandler(async (req: Request, res: Response) => {
  try {
    //gsid->guestSecureId
    const gsid = req.signedCookies.gsid;
    const response = await ItemListService(gsid);
    if (!response) {
      return new ApiResponse(500, "Internal Server Error", false, null);
    }
    if (response?.data?.auth) {
      const { sgid, option } = response.data.auth;
      res.cookie("gsid", sgid, option);
      const data = response.data.responsePayload;
      return res
        .status(response.statusCode)
        .json(new ApiResponse(201, "data fetched succesfully", true, data));
    }
    return res.status(response?.statusCode).json(response);
  } catch (error) {
    console.log("error on home Itmelist ", error);
    return new ApiResponse(500, "Internal Server Error", false, null);
  }
});
