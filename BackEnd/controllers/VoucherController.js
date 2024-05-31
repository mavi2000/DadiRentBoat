import Voucher from "../models/voucher.js";

export const createVoucher = async (req, res) => {
    const { voucherName, totalDiscount, startDate, endDate, isActive , boatId } = req.body;

    console.log("req.body",req.body)
    
    try {
      const newVoucher = new Voucher({
        voucherName,
        totalDiscount,
        startDate,
        endDate,
        isActive,
        boatId
      });
      
      const savedVoucher = await newVoucher.save();
      res.status(201).json(savedVoucher);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };





  export const getAllVouchers = async (req, res) => {
    try {
      const vouchers = await Voucher.find();
      res.status(200).json(vouchers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };




  export const getVoucherById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const voucher = await Voucher.findById(id);
      if (!voucher) return res.status(404).json({ message: 'Voucher not found' });
  
      res.status(200).json(voucher);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



  

  export const updateVoucher = async (req, res) => {
    const { id } = req.params;
    const { name, totalDiscountPercentage, startDate, endDate, isActive /*, boatId*/ } = req.body;
  
    try {
      const updatedVoucher = await Voucher.findByIdAndUpdate(
        id,
        { name, totalDiscountPercentage, startDate, endDate, isActive /*, boatId*/ },
        { new: true }
      );
  
      if (!updatedVoucher) return res.status(404).json({ message: 'Voucher not found' });
  
      res.status(200).json(updatedVoucher);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
 
  export const deleteVoucher = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedVoucher = await Voucher.findByIdAndDelete(id);
      if (!deletedVoucher) return res.status(404).json({ message: 'Voucher not found' });
  
      res.status(200).json({ message: 'Voucher deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };