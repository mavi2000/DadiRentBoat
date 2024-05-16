import express from 'express'
import { createLink, verifyLink } from '../controllers/inviteLink.controller.js'
import { auth } from '../middlewares/auth.js'


const router = express.Router()

router.post('/',createLink)
router.post('/verify', verifyLink)


export default router