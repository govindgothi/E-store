import {Router} from 'express'
import { createAddress, deleteAddressById, listOfAddress, updateAddressById } from '../controllers/address.controller.js'

const router = Router()

router.route('/:id').post(createAddress)
router.route('/').get(listOfAddress)
router.route('/').patch(updateAddressById)
router.route('/').delete(deleteAddressById)
export default router