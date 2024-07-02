import express from "express";
import Stripe from "stripe";
import Payment from "../models/Payment.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const checkout = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    console.log("req.body:", req.body); // Log the entire req.body for inspection

    if (!amount || isNaN(parseInt(amount))) {
      throw new Error("Invalid amount: must be a number");
    }

    const unitAmount = parseInt(amount);

    console.log("amount received:", amount); // Log the amount received from req.body
    console.log("parsed unitAmount:", unitAmount); // Log the parsed unitAmount for inspection

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Boat Rental",
              description: "Boat rental service",
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://www.dadirent.it",
      cancel_url: `https://www.dadirent.it`, // Ensure FRONTEND_URL is properly set
      metadata: {
        userId,
      },
    });

    const payment = new Payment({
      userId,
      amount: unitAmount, // Store the parsed amount (in cents) in your database
      stripeDetails: session,
    });

    await payment.save();

    res.status(201).json({
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Checkout error:", error); // Log the error for debugging
    res.status(500).json({
      error: error.message,
    });
  }
};
