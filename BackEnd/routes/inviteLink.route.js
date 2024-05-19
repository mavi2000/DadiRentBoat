import express from 'express';
import { auth } from '../middlewares/auth.js';
import {
  createLink,
  verifyLink,
} from '../controllers/inviteLink.controller.js';

const router = express.Router();

router.post('/',createLink)
router.post('/verify', verifyLink)


export default router;
