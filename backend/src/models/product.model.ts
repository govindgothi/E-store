import { model, Schema } from "mongoose";

interface IProduct extends Document {
  userId:Schema.Types.ObjectId
  name: string;
  category:string
  description: string[];
  price: number;
  discountPercentage: number;
  thumbNailImage: string;
  imageList: string[];
  stock: number;
  quantity: string;
  WeightIn:string;
}

const productSchema = new Schema<IProduct>({
  userId:{
    type:Schema.Types.ObjectId,
    ref:'User',
  },
  name: {
    type: String,
    maxLength: 100,
    trim: true,
    required: [true, "Name is required"],
  },
  category: {
    type: String,
    enum: [
      "Ghee",
      "Honey",
      "Pickel",
      "Turmaric",
      "Pulse",
      "Peanut",
      "Jaggery",
      "Oil",
      "All",
    ],
    default: "All",
  },
  description: [
    {
      type: String,
      required: true,
      maxLength: 100,
    },
  ],
  price: {
    type: Number,
    required: [true, "Price is required"],
    validate: {
      validator: function (value: number) {
        return value > 499;
      },
      message: (props: any) =>
        `Price must be greater than 499. Provided: ${props.value}`,
    },
  },
  discountPercentage: {
    type: Number,
    required: [true, "Set a minimum 5% discount to increase sales"],
    validate: {
      validator: function (value: number) {
        if (!this.price) return false;
        return this.price - (this.price / 100) * value > 499;
      },
      message: (props) =>
        `Price should be greater than 499 after applying discount. Provided discount: ${props.value}%`,
    },
  },
  thumbNailImage: {
    type: String,
    required: [true, "thumbnail image is must for listing product"],
  },

  imageList: {
    type: [String],
    validate: {
      validator: function (value: string[]) {
        return value.length <= 5; 
      },
      message: (props: any) =>
        `Image list must have 5 or fewer images. Provided: ${props.value.length}`,
    },
  },
  stock: {
    type: Number,
    trim: true,
    default: 0,
    required: true,
    validate: {
      validator: function () {
        return this.stock > 0;
      },
      message: "stock should be greater than 0",
    },
  },
  quantity: {
    type: String,
    trim: true,
    required: [true, "quantity of product is must"],
    validate: {
      validator: function () {
        return this.quantity.length > 0;
      },
      message: "quantity is must to list product",
    },
  },
  WeightIn:{
    type:String,
    enum: [
      "kg",
      "ml",
    ],
    default:"Kg"    
  }
});

const Product = model("Product", productSchema);

export { Product, IProduct};
