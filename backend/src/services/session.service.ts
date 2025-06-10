import { Session } from "../models/session.model.js";

export const addToCartGuestService = async (
  id: string,
  quantity: number,
  sid: string
) => {
  try {
    const session = await Session.findById({ _id: sid });
    if (!session) {
      return {
        code: 401,
        success: false,
        data: null,
        message: "session not found",
      };
    }
    const item = await Session.findOne({
      _id: sid,
      "cartItem.id": id,
    });
    if (item) {
      const incQuantity = await Session.updateOne(
        {
          _id: sid,
          "cartItem.id": id,
        },
        {
          $inc: {
            "cartItem.$.quantity": 1,
          },
        }
      );
      return {
        code: 201,
        success: true,
        data: null,
        message: "Item already present we inc quantity successfullt",
      };
    }
    const addProduct = await Session.updateOne(
      { _id: sid },
      { $push: { cartItem: { id: id, quantity: quantity } } }
    );
    return {
      code: 201,
      success: true,
      data: null,
      message: "product add successfullt",
    };
  } catch (error) {
    return {
      code: 404,
      success: false,
      data: null,
      message: "error while adding product into cart",
    };
  }
};
export const removeFromCartGuestService = async (
  cartItemId: string,
  sid: string
) => {
  try {
    const item = await Session.findOne({
      _id: sid,
      "cartItem.id": cartItemId,
    });
    if (!item) {
      return {
        code: 404,
        success: false,
        data: null,
        message: "cartItem is not found",
      };
    }
    const removeItem = await Session.updateOne(
      { _id: sid },
      {
        $pull: {
          cartItem: { id: cartItemId },
        },
      }
    );
    return {
      code: 201,
      success: false,
      data: null,
      message: "cartItem is removed succesfuly",
    };
  } catch (error) {}
};
export const updateCartGuestService = async (
  sid: string,
  cartItemId: string,
  query: string
) => {
  try {
    let add = 1;
    if (query === "dec") {
      add = -1;
    }
    const session = await Session.updateOne(
      {
        _id: sid,
        "cartItem.id": cartItemId,
      },
      {
        $inc: {
          "cartItem.$.quantity": add,
        },
      }
    );
  } catch (error) {}
};
