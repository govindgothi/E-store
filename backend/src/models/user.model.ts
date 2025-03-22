import { Schema,model } from "mongoose";

const userSchema = new Schema({
    username:{},
    email:{},
    mobile:{},
    password:{},
    address:{},
    order:{},
    reviewProduct:{},    
})