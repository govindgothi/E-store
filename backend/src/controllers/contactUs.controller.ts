import { Contact } from "../models/contactUs.model.js";
import { Request, Response } from "express";

export const addContact = async (req: Request, res: Response) => {};
export const getAllContactList = async (req: Request, res: Response) => {};


// export const createContact = async (req: Request, res: Response) => {
//     try {
//       const { email, firstName, lastName, message, phoneNo, countryCode, description } = req.body;
  
//       const newContact = await Contact.create({ email, firstName, lastName, message, phoneNo, countryCode, description });
  
//       res.status(201).json({ success: true, data: newContact });
//     } catch (error: any) {
//       res.status(400).json({ success: false, error: error.message });
//     }
//   };
// // admin for sea detail contact 
//   export const getAllContacts = async (req: Request, res: Response) => {
//     try {
//       const page = parseInt(req.query.page as string) || 1;
//       const limit = 10; 
//       const skip = (page - 1) * limit; 
  
//       // Fetch contacts with pagination
//       const contacts = await Contact.find().skip(skip).limit(limit);
  
//       // Get total count for pagination metadata
//       const totalContacts = await Contact.countDocuments();
  
//       res.status(200).json({
//         success: true,
//         page,
//         totalPages: Math.ceil(totalContacts / limit),
//         totalContacts,
//         data: contacts,
//       });
//     } catch (error: any) {
//       res.status(500).json({ success: false, error: error.message });
//     }
//   };