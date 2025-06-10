import { CreateProfileParams, updateProfileInterface } from "../Interfaces/profile.interfaces.js";
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
export const getProfileService = async (userId:string) => {
  try {
   if(!userId){
    return {
      success:false,
      code:401,
      message:"userId is not found"
    }
   }
   const getProfileData = await Profile.findOne({userId:userId})
   if(!getProfileData?._id){
    return {
      success:false,
      code:402,
      message:"userData is not found"
    }
   }
   return {
      success:true,
      code:201,
      message:"profile data is here"
    }
  } catch (err) {
    return {
      message: "unauthorised error",
      data: null,
      code: 501,
    };
  }
};
//-----------------------------------------------------------------------------------
export const updateProfileService = async (
  userId: string,
  data: {
    gender?: string;
    about?: string;
    theme?: string;
    dateOfBirth?: string;
    userImage?: string;
  }
) => {
  try {
    if(!userId){
      return {
        success:false,
        code:403,
        message:'userId is not found'
      }
    }
    const user = await User.findById({_id:userId})
    if(!user?._id){
        return {
          success:false,
        code:401,
        message:'user is not found'
        }
    }
     console.log(data)
     const profile = await Profile.findOneAndUpdate({ userId }, data, {
       new: true,
     });
     return {
      message:'update successfuly',
      code:201,
      success:true
     }
    
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
