import { Schema,model } from "mongoose";

const reviewSchema = new Schema({
rating:{
    type:Number,
    required:[true,'rating is important'],
    max:5,
    min:1,
    validate: {
        validator: function (value: number) {
          return value >= 1 && 5 >= value 
        },
        message: (props: any) => `${props.value<=6? `${props.value>=1? null:'value is less then limit 1'}`:'value is greater than limit 5'}`,
      },
},
review:{
    type:String,
    maxLength:200,
    trim:true,
}
},
{
    timestamps:true
})

const Review = model('Review',reviewSchema)

export default Review