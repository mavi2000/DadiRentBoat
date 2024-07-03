import { createError } from "../utils/createError.js";
import BoatBooking from "../models/BoatBooking.js";

export const getUnavailableBoatDates = async (req, res, next) => {
    try {
        const { startDate, endDate, timeSlot } = req.body;

        console.log("Received startDate:", startDate);
        console.log("Received endDate:", endDate);
        console.log("Received timeSlot:", timeSlot);

        if (!startDate || !endDate || new Date(startDate) >= new Date(endDate)  || !timeSlot) {
            throw createError(400, 'Invalid request parameters');
        }

        const booking = new BoatBooking({
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            // boatId: boatId,
            timeSlot: timeSlot
        });


        await booking.save();

        console.log("booking",booking)

        res.status(200).json({
            startDate,
            endDate,
            // boatId,
            timeSlot,
            message: "Unavailable period added successfully."
        });
    } catch (error) {
        next(error);
    }
};


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