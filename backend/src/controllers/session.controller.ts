import { Request, Response } from "express";
import { addToCartGuestService, removeFromCartGuestService, updateCartGuestService } from "../services/session.service.js";

export const addToCartGuest = async (req: Request, res: Response) => {
  try {
    const {_id,quantity,sid} = req.body
    // const sid = req.signedCookies.sid
    // console.log("object",sid)
    const response = await addToCartGuestService(_id,quantity,sid);
    return true;
  } catch (error) {}
};
export const removeFromCartGuest = async (req: Request, res: Response) => {
  try {
     const {sid} = req.body
     const cartItemId = req.params.id
      // const sid = req.signedCookies.sid
    // console.log("object",sid)
    const response = await removeFromCartGuestService(cartItemId,sid)
  } catch (error) {
    
  }

};
export const updateCartGuest = async (req: Request, res: Response) => {
  try {
    const {sid} = req.body
    const cartItemId = req.params.id.toString()
    const { value = 'dec' } = req.query
    const response = await updateCartGuestService(  sid, cartItemId, value?.toString())
    console.log(response)
  } catch (error) {
    
  }
};
