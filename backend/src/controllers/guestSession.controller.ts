import { Request, Response } from "express";
import { addToCartGuestService, removeFromCartGuestService, updateCartGuestService } from "../services/guestSession.service.js";
interface AuthRequest extends Request {
  guestSession?: any;
}
export const addToCartGuest = async (req: AuthRequest, res: Response) => {
  try {
    const gsid = req.guestSession._id
    const {_id,quantity} = req.body
    const response = await addToCartGuestService(_id,quantity,gsid);
    return true;
  } catch (error) {}
};
export const removeFromCartGuest = async (req:AuthRequest, res: Response) => {
  try {
     const gsid = req.guestSession._id
     const cartItemId = req.params.id
    const response = await removeFromCartGuestService(cartItemId,gsid)
  } catch (error) {
    
  }

};
export const updateCartGuest = async (req: AuthRequest, res: Response) => {
  try {
     const gsid = req.guestSession._id
    const cartItemId = req.params.id.toString()
    const { value = 'dec' } = req.query
    const response = await updateCartGuestService(  gsid, cartItemId, value?.toString())
    console.log(response)
  } catch (error) {
    
  }
};
