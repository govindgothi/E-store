import { NextFunction, Request, Response } from "express";
import Review from "../models/review.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addReview = asyncHandler( async(req:Request,res:Response,next:NextFunction)=>{
 try{
    const {rating,review}=req.body
    if(rating<=0 || rating>=6){
      return res.status(401).json({message:'rating must lie  [0,5]'})
    }
    if(review?.length>200) return res.status(301).json({message:"length of review is less then 200 word"}) 

    const addedReview = await Review.create({
        rating,
        review,
    })
    if(!addedReview) return res.status(301).json({message:'review is not added'})
        return res.json(addedReview)
 }catch(err){      

 }
})


export {
    addReview
}