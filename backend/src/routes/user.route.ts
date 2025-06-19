import Router from "express";
import { loginUser, logout, logoutUser, register} from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";

const router = Router()

router.route('/register').post(register)
router.route('/login').post(loginUser)
router.route('/logout').post(verifyUser,logout)


export default router