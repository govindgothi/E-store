import { GuestSession } from "../models/guestSession.model.js";

export const addToCartGuestService = async (
  id: string,
  quantity: number,
  gsid: string
) => {
  try {
    const session = await GuestSession.findById({ _id: gsid });
    if (!session) {
      return {
        code: 401,
        success: false,
        data: null,
        message: "session not found",
      };
    }
    const item = await GuestSession.findOne({
      _id: gsid,
      "cartItem.id": id,
    });
    if (item) {
      const incQuantity = await GuestSession.updateOne(
        {
          _id: gsid,
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
    const addProduct = await GuestSession.updateOne(
      { _id: gsid },
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
  gsid: string
) => {
  try {
    const item = await GuestSession.findOne({
      _id: gsid,
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
    const removeItem = await GuestSession.updateOne(
      { _id: gsid },
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
  gsid: string,
  cartItemId: string,
  query: string
) => {
  try {
    let add = 1;
    if (query === "dec") {
      add = -1;
    }
    const session = await GuestSession.updateOne(
      {
        _id: gsid,
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
