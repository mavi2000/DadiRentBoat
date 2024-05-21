

import express from 'express';
const router = express.Router();
import { createVoucher, getAllVouchers,
    getVoucherById,
    updateVoucher,
    deleteVoucher } from '../controllers/VoucherController.js';



    router.post('/create-vouchers', createVoucher);


    router.get('/gat-vouchers', getAllVouchers);
 
    router.get('/getbyId-vouchers/:id', getVoucherById);

    router.put('/update-vouchers/:id', updateVoucher);
    
   
    router.delete('/delete-vouchers/:id', deleteVoucher);


export default router;

