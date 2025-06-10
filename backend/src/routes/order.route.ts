import Router from 'express'
import { createOrder } from '../controllers/order.controller.js'


const router = Router()

router.route('/').post(createOrder)
router.route('/').delete()
// router.route('/').get()
// router.route('/').get()//total count of delivered order

export default router
