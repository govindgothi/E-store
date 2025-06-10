import Router from 'express'
import { ItemList } from '../controllers/homeItem.controller.js'

const router = Router()

router.route('/').get(ItemList)

export default router