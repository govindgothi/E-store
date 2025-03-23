import Router from 'express'
import { addReview } from '../controllers/review.controller.js'

const router = Router()

router.route('/add').post(addReview)

export default router