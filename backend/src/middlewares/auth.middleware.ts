import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
dotenv.config()
const AccessTokenSecret: string =
  process.env.ACCESS_TOKEN_SECRET || "jsdhjsdchcdhsvcv";


  interface AuthRequest extends Request {
    user?: any; // Define `user` as needed
  }

 const verifyJWT = async(req: AuthRequest, res:Response, next:NextFunction) => {
    try {
        const token = req.body.cookies //?.accessToken // take token from web to saved cookie 
        
         console.log(token);
        if (!token) {
            return res.json(new ApiError(401, "Unauthorized request"))
        }
    
        const decodedToken:string| jwt.JwtPayload = jwt.verify(token, AccessTokenSecret) // verify and match the token from .env

        if(typeof decodedToken === 'string') return res.json(new ApiError(401, "Invalid access token"));
        
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
         // select means send user detail without  saved  "-password -refreshToken"
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
          
         req.user = user;
         //  console.log(req.user) 
        next() // and calling for next to execute 
    }catch (error: unknown) {
        if (error instanceof Error) {
            throw new ApiError(401, error.message || "Invalid access token");
        } else {
            throw new ApiError(401, "Invalid access token");
        }
    }
    
}
export {verifyJWT}