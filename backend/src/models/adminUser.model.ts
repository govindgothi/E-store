import { Schema,model } from "mongoose";

interface IAdminUser extends Document {
    username: string;
    type: string;
    description: string[];
    price: number;
    discountPercentage: number;
    thumbNailImage: string;
    imageList: string[];
    stock: number;
    quantity: string;
  }

const adminUserSchema = new Schema({
    username:{
        type:String,
        trim:true,
        required:[true,'username is must'],
        lowercase: true,
    },
    email:{
        type:String,
        trim:true,
        required:[true,'username is must'],
        lowercase: true,
        unique: true,
        validate: {
          validator: function (value: string) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
          },
          message: "Invalid email format",
        },
    },
    mobile:{
        type:BigInt,
        min:10,
        max:10,
        required:[true,'mobile number is must'],
        validate:{
            validator:function(value:Number){
            return value.toString.length>10
            }
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
          validator: function (value: string) {
            return /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(value);
          },
          message: "Password must be at least 8 characters long and contain at least one special character (!@#$%^&*).",
        },
      },
    address:{
      type:[String]
    },
    order:{},
    productList:{},
    deliverOrder:{},
    cancelOrder:{},
})

const AdminUser = model('AdminUser',adminUserSchema)
export default AdminUser;