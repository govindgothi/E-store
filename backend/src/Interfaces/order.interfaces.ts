
export enum PaymentMethodEnum {
  COD = 'COD',
  NET_BANKING = 'NET_BANKING',
  UPI = 'UPI',
}

export interface OrderProduct {
  productId: string;
  productName: string;
  productPrice: number;
  productQuantity: number;
}

export interface OrderAddress {
  pinCode: number;
  district: string;
  state: string;
  country: string;
  town: string;
  city: string;
  address: string;
}

export interface OrderProto {
  email: string;
  contact: number;
  currency: 'INR';
  shippingAddress: OrderAddress;
  product: OrderProduct[];
  totalPrice: number;
  dateOfDelivery: Date;
  paymentMethod: PaymentMethodEnum;
  orderStatus: string;
  paymentDone: boolean;
}


// export interface orderProto {
//   email: string;
//   contact: number;
//   currency:'INR',
//   shippingAddress: {
//     pinCode:number,
//     district:string,
//     state:string,
//     country:string,
//     town:string,
//     city:string
//     address:string
//   };
//   product: [
//     {
//       productId: string;
//       productName:string,
//       productPrice:number,
//       productQuantity:number,
//     }
//   ];
//   totalPrice:number
//   dateOfDelivery:Date,
//   paymentMethod:string,
//   orderStatus:string,
//   paymentDone:boolean
// }
