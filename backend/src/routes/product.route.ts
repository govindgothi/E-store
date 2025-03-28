import Router from 'express'
import { uploadProduct, ListNewProduct, updateProduct, upload } from '../controllers/product.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'


const router = Router()

router.route('/list').post(verifyJWT,ListNewProduct)
router.route('/update').get(updateProduct)
router.route('/delete').post(upload.single("image"),uploadProduct)
export default router