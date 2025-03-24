import { NextFunction, Request, Response } from "express";
import { User,IUser } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

interface AuthRequest extends Request {
    user?: any; // Define `user` as needed
  }

  type TokenResponse = {
    accessToken?: string;
    refreshToken?: string;
  };

const generateAccessAndRefereshTokens = async (userId:string|undefined|null|unknown) => {
  try {
    const user: IUser|null = await User.findById(userId);
    if(user === null) return
    const accessToken:string|undefined = user?.generateAccessToken();
    const refreshToken:string|undefined = user?.generateRefreshToken();
    
    user.refreshToken = refreshToken;
    await user?.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return next(
        new ApiError(
          400,
          "All fields (username, email, and password) are required."
        )
      );
    }
    const existedUser = await User.findOne({ email });
    // console.log(existedUser)
    if (existedUser) {
      return next(new ApiError(301, "user is already register."));
    }
    const user = await User.create({
      username: username.toLowerCase(),
      email,
      password,
    });
    const userset = await User.findById(user._id);
    if (!userset) {
      return next(new ApiError(401, "error in registration."));
    }
    return res.json(userset);
  } catch {}
};

const loginUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ApiError(401, "credentials are missing."));
    }
    const existedUser:IUser|null = await User.findOne({ email });
    if (!existedUser) {   // to check user is register or not 
      return next(new ApiError(401, "user is not register."));
    }
    const isPasswordValid = await existedUser.isPasswordCorrect(password);// this function is in the user model and verify saved password and user send password using bcrypt
    // console.log(isPasswordValid);
    if (!isPasswordValid) return res.json(new ApiError(401, "credential are not match"));

    // const { accessToken, refreshToken }= await generateAccessAndRefereshTokens(existedUser._id);  //  this function is call for generate token to set cookie
    const tokens = await generateAccessAndRefereshTokens(existedUser._id)
    const accessToken = tokens?.accessToken ?? "No Access Token";
    const refreshToken = tokens?.refreshToken ?? "No Refresh Token";
    
    // if(typeof accessToken == undefined || typeof refreshToken == undefined ) return res.json(new ApiError(401,'token are not found'))
    const loggedInUser = await User.findById(existedUser._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true, //Setting httpOnly to true makes the cookie inaccessible to JavaScript running in the browser. This is primarily a security feature that helps prevent Cross-Site Scripting (XSS) attacks.
      secure: true, //Setting secure to true ensures the cookie is only sent over HTTPS connections, not plain HTTP. This helps protect the cookie from being intercepted in transit, which is crucial for security,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          "User logged In Successfully"
        )
      );
  } catch {
    return res.json(new ApiError(501, "something is wrong"));
  }
};

const logoutUser = async (req:AuthRequest, res:Response, next:NextFunction) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }
    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
}

export { registerUser, loginUser,logoutUser };