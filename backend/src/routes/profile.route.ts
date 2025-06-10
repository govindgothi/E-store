import Router from 'express'
import { createProfile, getProfile, updateProfile } from '../controllers/profile.controller.js'

const router = Router()

router.route('/:id').get(getProfile)
router.route('/').post(createProfile)
router.route('/').patch(updateProfile)

export default router