import Boat from "../models/Boat.js";
import mongoose from "mongoose";
import Joi from "joi";
import { createError } from "../utils/createError.js";
import Location from "../models/Location.js";
import Rental from "../models/Rent.js"
import BoatDescription from "../models/BoatDescription.js";
import BoatAccessInformation from "../models/BoatAccessInformation.js";
import BoatImage from "../models/BoatImage.js";

import ExtraServices from "../models/ExtraServices.js";
import Insurence from "../models/Insurence.js";
import Equipment from "../models/Euipment.js";
import voucher from "../models/voucher.js";


export const CreateBoat = async (req, res, next) => {
  const schema = Joi.object({
    type: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number()
      .integer()
      .min(1900)
      .max(new Date().getFullYear())
      .required(),
    region: Joi.string().required(),
    boardingCapacity: Joi.number().integer().min(1).required(),
    totalEnginePowerHP: Joi.number().integer().min(1).required(),
    lengthMeters: Joi.number().min(0).required(),
    telephone: Joi.string().required(),
    waterTankLiters: Joi.number().integer().min(0).required(),
    fuelTankLiters: Joi.number().integer().min(0).required(),
    droughtMeters: Joi.number().min(0).required(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    return next(createError(400, error.details[0].message));
  }

  try {
    const newBoat = await Boat.create(value);
    res.status(201).json({
      success: true,
      message: "Boat created successfully",
      boat: newBoat,
    });
  } catch (err) {
    next(err);
  }
};

// const getBoatDetailsById = async (boatId) => {
//     try {
//       const boatObjectId =new  mongoose.Types.ObjectId(boatId);
//   console.log("boatObjectId",boatObjectId)
//       const boatPromise = Boat.findById(boatObjectId).exec();
//   const boatAccessInformationPromise = BoatAccessInformation.find({ boatId: boatObjectId }).exec();
//   const boatBookingPromise = BoatBooking.find({ boatId: boatObjectId }).exec();
//   const boatDescriptionPromise = BoatDescription.find({ boatId: boatObjectId }).exec();
//   const boatImagePromise = BoatImage.find({ boatId: boatObjectId }).exec();
//   const damageDepositPromise = DamageDeposit.find({ boatId: boatObjectId }).exec();
//   const equipmentPromise = Equipment.find({ boatId: boatObjectId }).exec();
//   const extraServicePromise = ExtraServices.find({ boatId: boatObjectId }).exec();
//   const insurancePromise = Insurence.find({ boatId: boatObjectId }).exec();
//   const locationPromise = Location.find({ boatId: boatObjectId }).exec();
//   const ratePromise = Rates.find({ boatId: boatObjectId }).exec();
//   const rentPromise = Rent.find({ boatId: boatObjectId }).exec();
//   const voucherPromise = voucher.find({ boatId: boatObjectId }).exec();

//   const [
//     boat,
// boatAccessInformation,
// boatBookings,
// boatDescription,
// boatImages,
// damageDeposits,
// equipment,
// extraServices,
// insurance,
// location,
// rates,
// rents,
// vouchers
//   ] = await Promise.all([
//     boatPromise,
// boatAccessInformationPromise,
// boatBookingPromise,
// boatDescriptionPromise,
// boatImagePromise,
// damageDepositPromise,
// equipmentPromise,
// extraServicePromise,
// insurancePromise,
// locationPromise,
// ratePromise,
// rentPromise,
// voucherPromise
//   ]);

//   return {
//     boat,
// boatAccessInformation,
// // boatBookings,
// boatDescription,
// boatImages,
// damageDeposits,
// equipment,
// extraServices,
// insurance,
// location,
// rates,
// rents,
// vouchers
//       };
//     } catch (error) {
//       console.error('Error fetching boat details:', error);
//       throw error;
//     }
//   };

//   // Function to get details for all boats
//   export const getAllBoatsDetails = async () => {
//     try {
//       const boats = await Boat.find().exec();
//       const allBoatDetails = await Promise.all(boats.map(boat => getBoatDetailsById(boat._id)));
//       return allBoatDetails;
//     } catch (error) {
//       console.error('Error fetching all boats details:', error);
//       throw error;
//     }
//   };

const getBoatDetailsById = async (boatId) => {
  try {
    const boatObjectId = new mongoose.Types.ObjectId(boatId);

    const boatPromise = Boat.findById(boatObjectId).exec();
    // const RentPromise =   Rental.find({ boatId: boatObjectId }).exec();
    const boatImagePromise = BoatImage.find({ boatId: boatObjectId }).exec();
    const locationPromise = Location.find({ boatId: boatObjectId }).exec();
    const voucherPromise = voucher.find({ boatId: boatObjectId }).exec();
 
    const [boat, boatImages, location, vouchers] = await Promise.all([
      boatPromise,
      boatImagePromise,
      locationPromise,
      voucherPromise,
      // RentPromise
    ]);

    return {
      boat,
      boatImages,
      location,
      vouchers,
      // Rental
    };
  } catch (error) {
    console.error("Error fetching boat details:", error);
    throw error;
  }
};



const getAllBoatsDetails = async () => {
  try {
    const boats = await Boat.find().exec();

    const allBoatDetails = await Promise.all(
      boats.map((boat) => getBoatDetailsById(boat._id))
    );
    return allBoatDetails;
  } catch (error) {
    console.error("Error fetching all boats details:", error);
    throw error;
  }
};

export const getAllDetail = async (req, res) => {
  try {
    const boatDetails = await getAllBoatsDetails();
    res.json(boatDetails);
  } catch (error) {
    console.error("Error in /boats route:", error);
    res.status(500).send("Internal Server Error");
  }
};

  // export const getAllDetail =async(req,res)=>{
  //   try {
  //       const boatDetails = await getAllBoatsDetails();
  //       res.json(boatDetails);
  //     } catch (error) {
  //       console.error('Error in /boats route:', error);
  //       res.status(500).send('Internal Server Error');
  //     }
  //   }
  



// const deleteBoatById = async (boatId) => {
//   try {
//     console.log("boatId", boatId);
//     // Find and delete the boat
//     const deletedBoat = await Boat.findByIdAndDelete(boatId).exec();
//     if (!deletedBoat) {
//       throw new Error("Boat not found");
//     }

//     await BoatImage.deleteMany({ boatId: deletedBoat._id }).exec();

//     await Location.deleteMany({ boatId: deletedBoat._id }).exec();

//     await voucher.deleteMany({ boatId: deletedBoat._id }).exec();

//     return deletedBoat;
//   } catch (error) {
//     console.error("Error deleting boat and associated records:", error);
//     throw error;
//   }
// };

// export const deleteBoat = async (req, res) => {
//   const { id: boatId } = req.body;

//   console.log("boatId", boatId);

//   try {
//     const deletedBoat = await deleteBoatById(boatId);
//     res.json({ message: "Boat deleted successfully", deletedBoat });
//   } catch (error) {
//     console.error("Error deleting boat:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// apis for retrieving boat info step by step for update boat
// get boat info
export const getBoatInfo = async (req, res) => {
  try {
    const boat = await Boat.findById(req.params.id);
    res.status(200).json({ boat });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// update boat info
export const updateBoatInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const boat = await Boat.findById(id);
    if (!boat) {
      return res.status(404).json({ message: "Boat does not exist" });
    }
    const updatedBoat = await Boat.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ updatedBoat, message: "Boat updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

    const deleteBoatById = async (boatId) => {
        try {

            console.log("boatId",boatId)
            // Find and delete the boat
            const deletedBoat = await Boat.findByIdAndDelete(boatId).exec();
            if (!deletedBoat) {
                throw new Error('Boat not found');
            }
    
          
            await BoatImage.deleteMany({ boatId: deletedBoat._id }).exec();
    
            await Location.deleteMany({ boatId: deletedBoat._id }).exec();
    
      
            await voucher.deleteMany({ boatId: deletedBoat._id }).exec();
    
            return deletedBoat;
        } catch (error) {
            console.error('Error deleting boat and associated records:', error);
            throw error;
        }
    };


    
    export const deleteBoat = async (req, res) => {
        const { id: boatId } = req.body; 
    
        console.log("boatId", boatId);
    
        try {
            const deletedBoat = await deleteBoatById(boatId);
            res.json({ message: 'Boat deleted successfully', deletedBoat });
        } catch (error) {
            console.error('Error deleting boat:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };






    export const getBoatDetailById = async (req, res) => {
      try {
        const { id } = req.params;
        
        const boatDetails = await getBoatDetailsById(id);
        res.json(boatDetails);
      } catch (error) {
        console.error('Error in /boat/:id route:', error);
        res.status(500).send('Internal Server Error');
      }
    };