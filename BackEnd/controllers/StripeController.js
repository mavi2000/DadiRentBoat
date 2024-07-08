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
      boatId, // Ensure availableDate is correctly passed and formatted
    } = req.body;

    // Validate availableDate is a Date object
    const parsedAvailableDate = new Date(availableDate);
    if (isNaN(parsedAvailableDate.getTime())) {
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
      paymentStatus: "paid", // Initialize payment status based on your logic
      availableDate: parsedAvailableDate, // Use parsedAvailableDate instead of availableDate directly
      boatId,
    });

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

// get all payments of a user
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
