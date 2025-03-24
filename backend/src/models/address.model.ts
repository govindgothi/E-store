import mongoose ,{Schema,model} from "mongoose";

interface IAddressUser extends Document{
    userId:Schema.Types.ObjectId,
    userEmail:Schema.Types.ObjectId,
    shippingAddress: {
        fullName: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
      };
}