import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { IGuestSession, GuestSession } from "../models/guestSession.model.js";
interface AuthRequest extends Request {
  guestSession?: any;
}
export const verifyGuestSession = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const gsid = req.signedCookies.gsid;
      if (!gsid) {
        res.clearCookie("gsid");
        const response = new ApiResponse(
          404,
          "Guest session id is not found",
          false,
          null
        );
        return res.status(404).json(response);
      }
      const session: IGuestSession | null = await GuestSession.findById(gsid);
      if (!session || session === null) {
        res.clearCookie("gsid");
        const response = new ApiResponse(
          404,
          "Session has not found",
          false,
          null
        );
        return res.status(404).json(response);
      }
      req.guestSession = session;
      next();
    } catch (error) {
      const response = new ApiResponse(
        501,
        "Internal Error not found gsid",
        false,
        null
      );
      return res.status(501).json(response);
    }
  }
);
