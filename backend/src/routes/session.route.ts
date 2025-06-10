import { Router } from "express";
import { addToCartGuest, removeFromCartGuest, updateCartGuest } from "../controllers/session.controller.js";

const router = Router()

router.route('/cart').post(addToCartGuest)
router.route('/cart/:id').post(updateCartGuest)
router.route('/cart/:id').delete(removeFromCartGuest)

export default router