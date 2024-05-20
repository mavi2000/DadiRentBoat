import { createError } from "../utils/createError";
import BoatBooking from "../models/BoatBooking";



export const getUnavailableBoatDates = async (req, res, next) => {
    try {
        const { boatId, startDate, endDate } = req.body;

        // Validate request parameters
        if (!boatId || !startDate || !endDate || startDate >= endDate) {
            throw createError(400, 'Invalid request parameters');
        }

        // Find boat bookings for the specified boatId
        const bookings = await BoatBooking.find({ boatId });

        if (bookings.length === 0) {
            // If no bookings found, return empty array of unavailable dates
            res.status(200).json({ boatId, unavailableDates: [] });
            return;
        }

        
        const allDates = getUnavailableDates(startDate, endDate);

       
        const unavailableDates = allDates.filter(date => {
            return bookings.some(booking => date >= booking.startDate && date <= booking.endDate);
        });

      
        res.status(200).json({ boatId, unavailableDates });
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