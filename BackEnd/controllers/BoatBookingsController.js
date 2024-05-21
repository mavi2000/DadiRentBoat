import { createError } from "../utils/createError.js";
import BoatBooking from "../models/BoatBooking.js";

export const getUnavailableBoatDates = async (req, res, next) => {
    try {
        const { startDate, endDate } = req.body;

        console.log("Received startDate:", startDate);
        console.log("Received endDate:", endDate);

        if (!startDate || !endDate || new Date(startDate) >= new Date(endDate)) {
            throw createError(400, 'Invalid request parameters');
        }

        const unavailableDates = getUnavailableDates(new Date(startDate), new Date(endDate));
        console.log("All dates between startDate and endDate:", unavailableDates);

        // Save each date as a booking in the database
        const bookings = unavailableDates.map(date => ({
            startDate: date,
            endDate: date 
        }));

        await BoatBooking.insertMany(bookings);

        res.status(200).json({ unavailableDates });
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