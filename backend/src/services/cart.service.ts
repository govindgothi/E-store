import { Cart } from "../models/cart.model.js";

export const addToCartService = async (userId: string, ItemId: string) => {
  try {
    const cartItem = await Cart.findOne(
      { _id: userId },
      { cartItem: { $elemMatch: { id: ItemId } } }
    );
    if (cartItem) {
      const updateQuantity = await Cart.updateOne(
        {
          _id: userId,
          "cartItem.id": ItemId,
        },
        {
          $inc: { "cartItem.$.quantity": 1 },
        }
      );
      return {
        code: 203,
        message: "cart Item is already present we increase quantity",
        data: null,
        success: true,
      };
    }
    const createCart = await Cart.create({
      userId,
    });
    if (!createCart) {
    }
    const addItemToCart = await Cart.updateOne(
      { _id: userId },
      {
        $push: {
          cartItem: {
            id: ItemId,
            quantity: 1,
          },
        },
      }
    );
    return {
      code: 201,
      message: "Item added succesfuly",
      data: null,
      success: false,
    };
  } catch (error) {
    return {
      code: 501,
      message: "Internal error while adding cart",
      data: null,
      success: false,
    };
  }
};

export const removeFromCartService = async (userId: string, itemId: string) => {
  try {
    const cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      return {
        code: 401,
        message: "cart is not present for this user",
        data: null,
        success: false,
      };
    }
    const removeItem = await Cart.updateOne(
      { _id: userId },
      {
        $pull: { carItem: { id: itemId } },
      }
    );
    return {
      code: 201,
      message: "item is successfuly remove",
      data: null,
      success: false,
    };
  } catch (error) {
    return {
      code: 501,
      message: "Internal error while adding cart",
      data: null,
      success: false,
    };
  }
};

export const updateCartService = async (
  userId: string,
  ItemId: string,
  Qvalue: string
) => {
  try {
    const cart = await Cart.findById({ _id: userId });
    if (!cart) {
      return {
        code: 501,
        message: "Internal error while adding cart",
        data: null,
        success: false,
      };
    }
    if (Qvalue == "Inc") {
      const incQuantity = await Cart.updateOne(
        {
          _id: userId,
          "cartItem.id": ItemId,
        },
        {
          $inc: { "cartItem.$.quantity": 1 },
        }
      );
    } else {
      const decQuantity = await Cart.updateOne(
        {
          _id: userId,
          "cartItem.id": ItemId,
        },
        {
          $inc: { "cartItem.$.quantity": -1 },
        }
      );
    }
    return {
      code: 501,
      message: "Internal error while adding cart",
      data: null,
      success: false,
    };
  } catch (error) {
    return {
      code: 501,
      message: "Internal error while adding cart",
      data: null,
      success: false,
    };
  }
};
