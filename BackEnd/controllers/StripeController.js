import express from "express";
import Stripe from "stripe";
import Payment from "../models/Payment.js";
import { jwtDecode } from "jwt-decode";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const checkout = async (req, res) => {
  try {
    const {
      userId,
      amount,
      boatName,
      rateType,
      totalAmount,
      availableDate,
      boatImage,
      boatId,
    } = req.body;


    const parsedAvailableDate = new Date(availableDate);
    if (isNaN(parsedAvailableDate.getTime())) {
      throw new Error("Invalid availableDate format");
    }

    if (!amount || isNaN(parseInt(amount))) {
      throw new Error("Invalid amount: must be a number");
    }

    const unitAmount = parseInt(amount);

    console.log("parsedAvailableDate", parsedAvailableDate);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
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
      success_url: "http://localhost:5173",
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
      totalAmount,
      boatImage, // This is now an array
      paymentStatus: "paid",
      availableDate: parsedAvailableDate,
      boatId,
    });

    console.log("availableDate", availableDate);
    await payment.save();

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
    ); // Add other user fields if necessary
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