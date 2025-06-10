import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,       // Your API key
    api_secret: process.env.CLOUDINARY_API_SECRET, // Your API secret
    secure: true,
  });

const uploadToCloudinary =  async(fileBuffer:Buffer | undefined,filename:string |undefined)=>{
    try {
        
        if(!fileBuffer && !filename) return null
        const uploadResult = cloudinary.uploader.upload_stream(
          { public_id: filename, resource_type: "auto" },
          (error, result) => {
            if (error) {
              console.error("Cloudinary Upload Error:", error);
              return null;
            }
            console.log("Cloudinary Upload Success:", result);
            return result;
          }
        );
    
        //  Write the buffer to the stream
        uploadResult.end(fileBuffer);
    
        return uploadResult;
      } catch (error) {
        console.error("Upload Error:", error);
        return null;
      }
}
export {uploadToCloudinary}