import Router from 'express'
import { createOrder } from '../controllers/order.controller.js'


const router = Router()

router.route('/add').post(createOrder)
router.route('/delete').delete()
router.route('/monthlyOrder').get()
router.route('/deliveredOrder').get()//total count of delivered order

export default router
