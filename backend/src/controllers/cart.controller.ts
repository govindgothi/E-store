import { Request, Response } from "express";

export const addToCart = async(req:Request,res:Response) =>{
try {
    return{
     code:501,
      message:'Internal error while adding cart',
      data:null,
      success:false   
    }
} catch (error) {
    return {
      code:501,
      message:'Internal error while adding cart',
      data:null,
      success:false 
    }
}
}
export const removeFromCart = async(req:Request,res:Response) =>{
try {
    return{
     code:501,
      message:'Internal error while adding cart',
      data:null,
      success:false   
    }
} catch (error) {
    return {
      code:501,
      message:'Internal error while adding cart',
      data:null,
      success:false 
    }
}
}
export const updateCart = async(req:Request,res:Response)=>{
try {
    return{
     code:501,
      message:'Internal error while adding cart',
      data:null,
      success:false   
    }
} catch (error) {
    return {
      code:501,
      message:'Internal error while adding cart',
      data:null,
      success:false 
    }
}
}
