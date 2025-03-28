import Router from "express";
import { loginUser, logoutUser, registerNewUser} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route('/register').post(registerNewUser)
router.route('/login').post(loginUser)
router.route('/logout').post(verifyJWT,logoutUser)


export default router