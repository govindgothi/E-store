import {Router} from 'express'
import { createCategory, getCategoryList } from '../controllers/categories.controller.js'

const router = Router()

router.route('/').post(createCategory)
router.route('/').get(getCategoryList)

export default router