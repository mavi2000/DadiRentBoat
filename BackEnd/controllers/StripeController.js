import express from 'express';
import Stripe from 'stripe';
import Payment from '../models/Payment.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export const checkout = async (req, res) => {
  try {
    const {
      userId,
      amount,
      boatName,
      rateType, // Add rateType to the destructured req.body
      totalAmount // Add totalAmount to the destructured req.body
    } = req.body;

    if (!amount || isNaN(parseInt(amount))) {
      throw new Error('Invalid amount: must be a number');
    }

    const unitAmount = parseInt(amount);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: boatName,
            description: 'Boat rental service',
          },
          unit_amount: unitAmount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: "http://localhost:5173",
      cancel_url: "https://www.dadirent.it",
      metadata: {
        userId
      },
    });

    const payment = new Payment({
      userId,
      boatName,
      amount: unitAmount,
      stripeDetails: session,
      rateType,
      totalAmount,
      paymentStatus: 'paid' // Initialize payment status based on your logic
    });

    await payment.save();

    res.status(201).json({
      sessionId: session.id
    });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({
      error: error.message
    });
  }
};



export const getPayment =async(req,res)=>{
    try {
        const payments = await Payment.find().populate('userId', 'username email phoneNumber'); // Add other user fields if necessary
        res.status(200).json(payments);
      } catch (error) {
        console.error("Error fetching payments:", error);
        res.status(500).json({ error: error.message });
      }
    }
