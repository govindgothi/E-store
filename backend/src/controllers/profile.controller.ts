import { Request, Response } from "express";
import { Profile, IProfile } from "../models/profile.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { createProfileService, getProfileService, updateProfileService } from "../services/profile.service.js";

const createProfile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId, userImage, gender, dateOfBirth, about,theme } = req.body;
    const response = await createProfileService({userId, userImage, gender, dateOfBirth, about,theme})
    return res.status(response?.code).json(response)
  } catch (error) {
    return res.status(501).json({message:'unauthorise response'})
  }
});

const getProfile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const response = await getProfileService(userId)
    return res.status(response.code).json(response)
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching profile" });
  }
});

const updateProfile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    const data = req.body
    const response = await updateProfileService(userId, data)
    return res.status(response?.code).json(response)
  } catch (error) {
    return res.status(501).json({ code:501,success: false, message: "Unuathorise data update" });
  }
});

const deleteProfile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const deletedProfile = await Profile.findOneAndDelete({ userId });

    if (!deletedProfile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }

    res.status(200).json({ success: true, message: "Profile deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting profile" });
  }
});

export { createProfile, updateProfile, getProfile, deleteProfile };
