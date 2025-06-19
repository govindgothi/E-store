import { Router } from "express";
import {
  addToCartGuest,
  removeFromCartGuest,
  updateCartGuest,
} from "../controllers/guestSession.controller.js";
import { verifyGuestSession } from "../middlewares/guestSession.middleware.js";
const router = Router();

router.route("/cart").post(verifyGuestSession, addToCartGuest);
router.route("/cart/:id").post(verifyGuestSession, updateCartGuest);
router.route("/cart/:id").delete(verifyGuestSession, removeFromCartGuest);

export default router;
