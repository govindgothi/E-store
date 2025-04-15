import mongoose ,{Schema,model} from "mongoose";

interface IAddress extends Document{
    userId:Schema.Types.ObjectId,
    userEmail:Schema.Types.ObjectId,
    shippingAddress: {
        address: string;
        city: string;
        state: string;
        zipCode: number;
        country: string;
      };
}

const addressSchema = new Schema<IAddress>({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'user id is require']
    },
    userEmail:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'email is required']
    },
    shippingAddress:{
        address:{
             type:String,
             maxLength:100,
             required:[true,'address is require']
            },
        city:{ 
            type:String,
            required:[true,'city is require']
        },
        state: { 
            type:String,
            required:[true,'state is require']
        },

        zipCode:{ 
            type:Number,
            required:[true,'zipcode is require'],
            max:6
        },
        country:{ 
            type:String,
            required:[true,'zipcode is require'],
        }
    }
})

const Address = model('Address',addressSchema)
 
 export {Address,IAddress }