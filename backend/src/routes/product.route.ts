import Router from 'express'
import { uploadProduct, ListNewProduct, updateProduct, upload, getAllProducts, createProduct, getProductById } from '../controllers/product.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'
import { getCategoryById } from '../controllers/categories.controller.js'


const router = Router()

router.route('/').get(getAllProducts)
router.route('/:id').get(getProductById)
router.route('/').post(createProduct)

export default router