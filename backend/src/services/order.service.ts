import { IOrder, Order } from "../models/order.model.js";
import { shippingAdd } from "../data/shippingAdd.js";

export const createorderService = async (orderData: IOrder) => {
  try {
    const {
      userName,
      email,
      userId,
      products,
      totalAmount,
      paymentStatus,
      paymentMethod,
      orderStatus,
      shippingAddress,
    } = orderData;

    const { pinCode, district, state, country, town, city, address } =
      shippingAddress;
    function isValidFullAddress(
      pinCode: number,
      city: string,
      state: string,
      data: {
        isPinCodeValid: boolean;
        isCityValid: boolean;
        isStateValid: boolean;
      }
    ) {
      for (const item of shippingAdd) {
        if (item.city.toLocaleLowerCase() === city) {
            data.isCityValid = true
        }
        if (item.state.toLocaleLowerCase() === state) {
            data.isStateValid = true
        }
        if (item.pinCode === pinCode) {
            data.isPinCodeValid = true
            return data
        }
      }
    }
    const checkData = {
      isPinCodeValid: false,
      isCityValid: false,
      isStateValid: false,
    };

    const isValid = isValidFullAddress(pinCode, city, state, checkData);
    if (!isValid?.isCityValid && !isValid?.isPinCodeValid && !isValid?.isStateValid) {
      return {
        code: 401,
        message: "shipping address is not matched",
        success: true,
        data: null,
      };
    }
    
    const order = await Order.create({
      userName,
      email,
      userId,
      products,
      totalAmount,
      paymentStatus,
      paymentMethod,
      orderStatus,
      shippingAddress: {
        pinCode,
        district,
        state,
        country,
        town,
        city,
        address,
      },
      placedAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(order);
    return {
      code: 501,
      message: "error when creating order",
      success: true,
      data: order,
    };
  } catch (error) {
    console.log("object error when order creating", error);
    return {
      code: 501,
      message: "error when creating order",
      success: true,
      data: null,
    };
  }
};
