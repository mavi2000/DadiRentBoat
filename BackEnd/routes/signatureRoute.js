import express from 'express';
import { verifySignature } from '../controllers/signatureController.js';

const router = express.Router();

router.post('/verify-signature', verifySignature);

export default router;
