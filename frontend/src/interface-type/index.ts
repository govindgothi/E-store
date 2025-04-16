type Product ={
    id:number,
    name:string,
    image:string[]
 }
 
 type ProductJson ={
     _id:string,
     productOwner:string,
     productName: string,
     productImageUrl:string,
     productMultipleImage:string[],
     productPackageSize:string[],
     productDescription:string[],
     productPrice:number,
     discountedPercentage:number,
     deliveryTpe:string[],
     isFreeDelivery: boolean,
     InStock:number,
     createdAt:string,
     updatedAt:string,
     __v: number,
   }
  type CounterState = {
     _id: string;
     productPrice: number;
     InStock: number;
     isFreeDelivery: boolean;
     productName: string;
     productImageUrl: string;
   };
   
   type loginInput ={
        email:string;
        password:string;
   }
   type signInInput ={
     username:string;
     email:string;
     password:string;
     otp:number;
 }
 
 export type {
     ProductJson,
     Product,
     CounterState,
     loginInput,
     signInInput,
 }