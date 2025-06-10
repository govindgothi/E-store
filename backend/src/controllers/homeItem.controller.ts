import { Request, Response } from "express";
import { ItemListService } from "../services/homeItem.service.js";

export const ItemList = async (req: Request, res: Response) => {
  try {
    const sid = req.signedCookies.sid
    console.log("object",sid)
    const response = await ItemListService(sid)
    
    if(response?.auth){
      console.log(response.auth.sid,response.auth.sessionId,response.auth.option)
      const {message,code,success,data} = response
      res.cookie("sid",response.auth.sessionId,response.auth.option)
      return res.status(response?.code).json({
        message,
        code,
        success,
        data
      })
    }
    console.log(response)
    return res.status(response?.code).json(response);
  } catch (err) {
    console.log(err, "ItemList");
    return res.status(501).json({});
  }
};
