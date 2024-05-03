import express from 'express'
import { createLink, verifyLink } from '../controllers/inviteLink.controller.js'
import { auth } from '../middlewares/auth.js'


const router = express.Router()

router.post('/', auth, createLink)
router.post('/invite/:token', verifyLink)


export default router