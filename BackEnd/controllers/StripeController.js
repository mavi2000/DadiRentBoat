import express from "express";
import Stripe from "stripe";
import Payment from "../models/Payment.js";
import { jwtDecode } from "jwt-decode";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import User from "../models/User.model.js"
import { cancelEmail } from "../services/mail/nodeMailer.js";
import { uploadImages } from "../utils/cloudinaryConfig.js";
import {sendPaymentConfirmationEmail} from "../services/mail/nodeMailer.js"


export const checkout = async (req, res) => {
  try {
    const {
      userId,
      amount,
      boatName,
      rateType,
      totalAmount,
      availableDates,
      boatImage,
      boatId,
      startTime,
      endTime,
      isChecked,
    } = req.body;

    const parsedAvailableDates = availableDates.map((date) => new Date(date));
    if (parsedAvailableDates.some((date) => isNaN(date.getTime()))) {
      throw new Error("Invalid availableDate format");
    }

    if (!amount || isNaN(parseInt(amount))) {
      throw new Error("Invalid amount: must be a number");
    }

    const unitAmount = parseInt(amount);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: boatName,
              description: "Boat rental service",
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://www.dadirent.it",
      cancel_url: "https://www.dadirent.it",
      metadata: {
        userId,
      },
    });

    const payment = new Payment({
      userId,
      boatName,
      amount: unitAmount,
      stripeDetails: session,
      rateType,
      startTime,
      endTime,
      totalAmount,
      boatImage,
      paymentStatus: "paid",
      bookingStatus: "pending",
      availableDates: parsedAvailableDates,
      boatId,
      isChecked,
    });

    await payment.save();

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Send payment confirmation email
    const paymentDetails = {
      unitAmount,
      boatName,
      rateType,
      totalAmount,
      availableDates: parsedAvailableDates,
      startTime,
      endTime,
      boatId,
    };

    await sendPaymentConfirmationEmail(user, paymentDetails);

    res.status(201).json({
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};




export const getPayment = async (req, res) => {
  try {
    const payments = await Payment.find().populate(
      "userId",
      "username email phoneNumber"
    ); 
    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ error: error.message });
  }
};






export const calculateBoatRevenue = async (req, res) => {
  try {
    const revenues = await Payment.aggregate([
      {
        $match: {
          boatName: { $ne: null },
        },
      },
      {
        $group: {
          _id: "$boatName",
          totalRevenue: { $sum: "$amount" },
          totalBookings: { $sum: 1 }, // This will count the number of documents for each boatName
        },
      },
    ]);

    res.json(revenues);
  } catch (error) {
    console.error("Error in calculateBoatRevenue:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};





export const getUserPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payments = await Payment.find({ userId: id }).populate(
      "userId",
      "username email phoneNumber"
    ); // Add other user fields if necessary
    res.status(200).json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    res.status(500).json({ error: error.message });
  }
};






export const getSinglePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
   

    const payment = await Payment.findById(paymentId).populate('userId');;
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    console.error('Error fetching payment:', error);
    res.status(500).json({ error: error.message });
  }
};





export const getDashboardMetrics = async (req, res) => {
  try {
    const totalUsersPromise = User.countDocuments();
    const totalTripsPromise = Payment.countDocuments();
    const totalRevenuePromise = Payment.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$totalAmount" }
        }
      }
    ]);

    const [totalUsers, totalTrips, totalRevenueResult] = await Promise.all([
      totalUsersPromise,
      totalTripsPromise,
      totalRevenuePromise
    ]);

    const totalRevenue = totalRevenueResult.length > 0 ? totalRevenueResult[0].totalAmount : 0;

    res.status(200).json({
      totalUsers,
      totalTrips,
      totalRevenue
    });
  } catch (error) {
    console.error("Error fetching dashboard metrics:", error);
    res.status(500).json({ error: error.message });
  }
};



export const getStatistics = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(`${currentYear}-01-01T00:00:00.000Z`);
    const endOfYear = new Date(`${currentYear + 1}-01-01T00:00:00.000Z`);

    const payments = await Payment.find({
      createdAt: { $gte: startOfYear, $lt: endOfYear }
    });

    let yearlyRevenue = 0;
    const monthlyRevenue = Array(12).fill(0); // Initialize an array with 12 zeros

    payments.forEach(payment => {
      const paymentDate = new Date(payment.createdAt);
      const month = paymentDate.getUTCMonth(); // Get the month index (0-11) using UTC month
      monthlyRevenue[month] += payment.amount;
      yearlyRevenue += payment.amount;
      console.log(`Payment Date: ${paymentDate}, Month: ${month}, Amount: ${payment.amount}`);
    });

    const monthlyRevenueData = monthlyRevenue.map((revenue, index) => ({
      month: new Date(currentYear, index).toLocaleString('default', { month: 'short' }),
      revenue
    }));

    console.log('Monthly Revenue Data:', monthlyRevenueData);

    res.status(200).json({
      monthlyRevenue: monthlyRevenueData,
      yearlyRevenue
    });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    res.status(500).json({
      error: error.message
    });
  }
};




export const getUpcomingBookings = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);
    
    const bookings = await Payment.find({
      createdAt: {
        $gte: today,
        $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)
      }
    }).populate('userId', 'username email'); // Assuming your user model has 'name' and 'email' fields

    const todayBookings = bookings.filter(booking => booking.createdAt >= today && booking.createdAt < tomorrow);
    const tomorrowBookings = bookings.filter(booking => booking.createdAt >= tomorrow && booking.createdAt < dayAfterTomorrow);
    const dayAfterTomorrowBookings = bookings.filter(booking => booking.createdAt >= dayAfterTomorrow && booking.createdAt < new Date(dayAfterTomorrow.getFullYear(), dayAfterTomorrow.getMonth(), dayAfterTomorrow.getDate() + 1));
    
    res.status(200).json({
      today: todayBookings,
      tomorrow: tomorrowBookings,
      dayAfterTomorrow: dayAfterTomorrowBookings
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({
      error: error.message
    });
  }
};



export const  cancelBooking =async(req,res)=>{
  try {
    const { bookingId, userId, subject, message, username, boatName } = req.body;


    const payment = await Payment.findByIdAndUpdate(
      bookingId,
      { bookingStatus: 'cancelled' },
      { new: true }
    ).populate('userId');

    if (!payment) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    const user = payment.userId;

    const emailText = `Dear ${username},\n\nYour booking for the boat "${boatName}" has been cancelled.\n\nReason: ${message}\n\nBest regards,\nDadiRent`;

    await cancelEmail(user.email, subject, emailText);

    res.status(200).json({ message: 'Booking cancelled and email sent' });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



export const unAvailableDates =async(req,res)=>{
  try {
    const { boatName } = req.body;

    // Fetch the payment details based on the boat name
    const payments = await Payment.find({ boatName });

    if (!payments || payments.length === 0) {
      return res.status(404).json({ error: 'No available dates found for this boat' });
    }

    // Extract available dates from the payments
    const availableDates = payments.map(payment => payment.availableDates).flat();

    res.status(200).json({ availableDates });
  } catch (error) {
    console.error('Error fetching available dates:', error);
    res.status(500).json({ error: error.message });
  }
}






export const createPayment = async (req, res) => {
  console.log("Request body:", req.body);

  const {
    userId,
    username,
    email,
    mobile,
    boatName,
    boatId,
    boatImage,
    amount,
    stripeDetails,
    rateType,
    availableDates,
    amountPaid,
    totalAmount,
    startTime,
    endTime,
    rentalType,
    bookingPlatform,
    platformAmount,
    address,
    taxCode,
    peopleOnBoard,
    skipperName,
    skipperPhone,
    departurePoint,
    arrivalPoint,
    accessories,
    customerNotes,
    petrolPrepaid,
    contract,
  } = req.body;

  let platformInvoiceUrl = null;

  // Check if there is a file for platformInvoice
  if (req.file) {
    try {
      const uploadResult = await uploadImages(req.file);
      platformInvoiceUrl = uploadResult.url;
    } catch (error) {
      return res.status(500).json({ message: 'File upload failed', error: error.message });
    }
  }

  // Ensure `availableDates` is correctly parsed
  const parsedAvailableDates = availableDates ? JSON.parse(availableDates) : [];

  const newPaymentData = {
    userId: userId || null,
    username,
    email: email || "",
    mobile: mobile || "",
    boatName,
    boatId: boatId || null,
    boatImage: boatImage || [],
    amount: parseFloat(amountPaid) || 0,
    stripeDetails: stripeDetails || {},
    rateType: rateType || "",
    availableDates: parsedAvailableDates,
    amountPaid: parseFloat(amountPaid) || 0,
    totalAmount: parseFloat(totalAmount) || 0,
    startTime,
    endTime,
    rentalType,
    bookingPlatform,
    platformInvoice: platformInvoiceUrl, // Save the uploaded file URL
    platformAmount: parseFloat(platformAmount) || 0,
    address: address || "",
    taxCode: taxCode || "",
    peopleOnBoard: peopleOnBoard || "",
    skipperName: skipperName || "",
    skipperPhone: skipperPhone || "",
    departurePoint: departurePoint || "",
    arrivalPoint: arrivalPoint || "",
    accessories: accessories ? JSON.parse(accessories) : [],
    customerNotes: customerNotes || "",
    petrolPrepaid: petrolPrepaid || false,
    contract: contract || false,
  };

  try {
    const newPayment = new Payment(newPaymentData);
    const savedPayment = await newPayment.save();
    console.log("Saved Payment:", savedPayment);
    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const availableDates = async (req, res) => {
  try {
    // Find all boats and their available dates
    const payments = await Payment.find({}, 'boatName availableDates');

    if (payments.length === 0) {
      return res.status(404).json({ error: "No boats or available dates found" });
    }

    // Create a map to group available dates by boat name
    const boatDatesMap = {};

    payments.forEach(payment => {
      const boatName = payment.boatName;
      const dates = payment.availableDates || [];

      // Filter valid dates
      const validDates = dates.filter(date => date instanceof Date && !isNaN(date.getTime()));

      // If the boat name is already in the map, add dates to it
      if (boatDatesMap[boatName]) {
        boatDatesMap[boatName] = boatDatesMap[boatName].concat(validDates);
      } else {
        boatDatesMap[boatName] = validDates;
      }
    });

    // Remove duplicates for each boat's dates
    const result = Object.entries(boatDatesMap).map(([boatName, dates]) => {
      const uniqueDates = [...new Set(dates.map(date => date.toISOString()))]
        .map(dateString => new Date(dateString));
      return { boatName, availableDates: uniqueDates };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching available dates:', error);
    res.status(500).json({
      error: error.message,
    });
  }
};