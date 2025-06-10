import { Router } from 'express'
import { sendOtp, verifyOtp } from '../controllers/otp.controller.js'

const router = Router()

router.route('/').get(sendOtp)
router.route('/').post(verifyOtp)


export default router