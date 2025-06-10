import mongoose, { Schema } from "mongoose";

interface ICategories extends Document {
  categoryName:string,
  thumbImageUrl:string,
  imageList:string[],
  fromPrice:number,
  totalItems:number,
  top:boolean
}

const categoriesSchema = new Schema<ICategories>({
  categoryName:{
    type:String,
  },
  thumbImageUrl:{
    type:String,
  },
  imageList:[
    {
        type:String,
    }
  ],
  fromPrice:{
   type:Number
  },
  totalItems:{
    type:Number,
    default:1,
  },
  top:{
    type:Boolean,
    default:true
  }
})

const Categories = mongoose.model('Categories',categoriesSchema)

export {Categories,ICategories}