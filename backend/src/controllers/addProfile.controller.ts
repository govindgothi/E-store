import { Request, Response } from "express";
import { Profile, IProfile } from "../models/profile.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createProfile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId, userImage, gender, dateOfBirth, about } = req.body;
    const profile = await Profile.create({
      userId,
      userImage,
      gender,
      dateOfBirth,
      about,
    });
    if (!profile)
      return res
        .status(500)
        .json({ success: false, message: "Error creating profile" });
    return res.status(201).json({ success: true, data: profile });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error creating profile" });
  }
});

const getProfile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!userId)
      return res
        .status(404)
        .json({ success: false, message: "userId is not found" });
    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching profile" });
  }
});

const updateProfile = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    if (Object.keys(updateData).length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No update fields provided" });
    }
    const profile = await Profile.findOneAndUpdate({ userId }, updateData, {
      new: true,
    });

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }

    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating profile" });
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
