import { createError } from "../utils/createError.js";
import Booking from "../models/BoatBooking.js";
import Joi from "joi";



const bookingValidationSchema = Joi.object({
  boatId: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  timeSlots: Joi.array().items(Joi.string()).required(),
  type: Joi.string().valid('booking', 'winterization').required(),
  winterizationDetails: Joi.object({
    isWinterization: Joi.boolean().optional(),
    description: Joi.string().optional()
  }).optional()
});



export const createBooking = async (req, res, next) => {
  try {
    const { error, value } = bookingValidationSchema.validate(req.body);


    console.log("aaDa",req.body)

    console.log("req", req.body);

    if (error) {
      return next(createError(400, error.details[0].message));
    }

    const newBooking = new Booking(value);
    await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking: newBooking
    });
  } catch (error) {
    next(error);
  }
};


export const getBookingsByBoatId = async (req, res, next) => {
  try {
    const { boatId } = req.params;

    const bookings = await Booking.find({ boatId });

    if (!bookings) {
      return next(createError(404, 'No bookings found for this boat'));
    }

    res.status(200).json({
      success: true,
      bookings
    });
  } catch (error) {
    next(error);
  }
};


export const updateboatCalender =async (req,res,next)=>{
  try {
    const { boatId } = req.params;
    const { error, value } = bookingValidationSchema.validate(req.body);

    if (error) {
      return next(createError(400, error.details[0].message));
    }

    let booking = await Booking.findOne({ boatId });

    if (booking) {
      // Update the existing booking
      booking = await Booking.findOneAndUpdate({ boatId }, value, { new: true });
      res.status(200).json({
        success: true,
        message: "Booking updated successfully",
        booking
      });
    } else {
      // Create a new booking
      booking = new Booking({ boatId, ...value });
      await booking.save();
      res.status(201).json({
        success: true,
        message: "Booking created successfully",
        booking
      });
    }
  } catch (error) {
    next(error);
  }

}



export const getUnavailableDates = (startDate, endDate) => {
    const unavailableDates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        unavailableDates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return unavailableDates;
};




export const editBoatBooking = async (req, res, next) => {
    try {
        const { bookingId, startDate, endDate } = req.body;

        console.log("Received bookingId:", bookingId);
        console.log("Received new startDate:", startDate);
        console.log("Received new endDate:", endDate);

        if (!bookingId || !startDate || !endDate || new Date(startDate) >= new Date(endDate)) {
            throw createError(400, 'Invalid request parameters');
        }

        const updatedBooking = await BoatBooking.findByIdAndUpdate(
            bookingId,
            { startDate: new Date(startDate), endDate: new Date(endDate) },
            { new: true }
        );

        if (!updatedBooking) {
            throw createError(404, 'Booking not found');
        }

        res.status(200).json({ success: true, message: 'Booking updated successfully', booking: updatedBooking });
    } catch (error) {
        next(error);
    }
};


export const deleteBoatBooking = async (req, res, next) => {
    try {
        const { bookingId } = req.body;

        console.log("Received bookingId:", bookingId);

        if (!bookingId) {
            throw createError(400, 'Invalid request parameters');
        }

        const deletedBooking = await BoatBooking.findByIdAndDelete(bookingId);

        if (!deletedBooking) {
            throw createError(404, 'Booking not found');
        }

        res.status(200).json({ success: true, message: 'Booking deleted successfully', booking: deletedBooking });
    } catch (error) {
        next(error);
    }
};








// const getUnavailableDates = (startDate, endDate) => {
//     const dates = [];
//     let currentDate = new Date(startDate);
//     while (currentDate <= endDate) {
//       dates.push(new Date(currentDate));
//       currentDate.setDate(currentDate.getDate() + 1);
//     }
//     return dates;
//   };
  
//   export const getUnavailableBoatDates = async (req, res, next) => {
//     try {
//       const { startDate, endDate } = req.body;
  
//       if (!startDate || !endDate || new Date(startDate) >= new Date(endDate)) {
//         throw createError(400, 'Invalid request parameters');
//       }
  
//       const unavailableDates = getUnavailableDates(new Date(startDate), new Date(endDate));
//       const bookings = unavailableDates.map(date => ({
//         startDate: date,
//         endDate: date
//       }));
  
//       await BoatBooking.insertMany(bookings);
  
//       res.status(200).json({ unavailableDates });
//     } catch (error) {
//       next(error);
//     }
//   };
  
//   // New endpoint to fetch unavailable dates
//   export const fetchUnavailableDates = async (req, res, next) => {
//     try {
//       const bookings = await BoatBooking.find();
//       const unavailableDates = bookings.map(booking => booking.startDate.toISOString().split('T')[0]);
//       res.status(200).json({ unavailableDates });
//     } catch (error) {
//       next(error);
//     }
//   };