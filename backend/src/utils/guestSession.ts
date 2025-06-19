import { GuestSession } from "../models/guestSession.model.js";

export const createSessionIfNeeded = async () => {
  const session = await GuestSession.create({});
  return {
    gsid: session.id,
    option: {
      httpOnly: true,
      signed: true,
      maxAge: 100 * 60 * 60,
    },
  };
};
