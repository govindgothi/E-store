import Router from 'express'
import { uploadProduct, ListNewProduct, updateProduct, upload } from '../controllers/product.controller.js'


const router = Router()

router.route('/list').get(ListNewProduct)
router.route('/update').get(updateProduct)
router.route('/delete').post(upload.single("image"),uploadProduct)
export default router