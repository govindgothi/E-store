import { CreateProfileParams } from "../Interfaces/addProfile.interfaces.js";
import { Profile } from "../models/profile.model.js";
import { User } from "../models/user.model.js";

// ---------------------------------------------------------------------------------
export const createProfileService = async ({
  userId,
  userImage,
  gender,
  dateOfBirth,
  about,
  theme,
}: CreateProfileParams) => {
  try {
    const checkUserId = await User.findById({ _id: userId });
    if (!checkUserId) {
      return {
        success: false,
        message: "UserId is not found",
        data: null,
        code: 401,
      };
    }
    const addProfile = await Profile.create({
      userId,
      userImage,
      gender,
      dateOfBirth,
      about,
      theme,
    });
    if (!addProfile._id) {
      return {
        success: false,
        message: "Profile is not added",
        data: null,
        code: 403,
      };
    }
    return {
      success: true,
      message: "Proile successfully added",
      data: null,
      code: 201,
    };
  } catch (err) {
    return {
      message: "unauthorised error",
      data: null,
      code: 501,
    };
  }
};
//-----------------------------------------------------------------------------------
export const getProfileService = async () => {
  try {
  } catch (err) {
    return {
      message: "unauthorised error",
      data: null,
      code: 501,
    };
  }
};
//-----------------------------------------------------------------------------------
export const updateProfileService = async () => {
  try {
  } catch (err) {
    return {
      message: "unauthorised error",
      data: null,
      code: 501,
    };
  }
};
//-----------------------------------------------------------------------------------
export const deleteProfileService = async () => {
  try {
  } catch (err) {
    return {
      message: "unauthorised error",
      data: null,
      code: 501,
    };
  }
};
//-----------------------------------------------------------------------------------
