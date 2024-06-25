import express from "express";
import Rent from "../models/Rent.js";
import Joi from "joi";
import { createError } from "../utils/createError.js";

export const RentBoat = async (req, res, next) => {
  console.log(req.body);
  try {
    const rentalSchema = Joi.object({
      boatId: Joi.string().required(),
      BoatName: Joi.string().required(),
      Port: Joi.string().required(),
      city: Joi.string().required(),
      minPrice: Joi.number().required(),
      duration: Joi.string().required(),
    });

    const { error: rentalError, value: rentalValue } = rentalSchema.validate(
      req.body
    );
    if (rentalError) {
      throw createError(400, rentalError.details[0].message);
    }

    // const boatExists = await Boat.findById(rentalValue.boat);
    // if (!boatExists) {
    //     throw createError(404, 'Boat not found');
    // }

    const rental = new Rent(rentalValue);
    console.log("rental", rental);
    await rental.save();

    res.status(201).json(rental);
  } catch (error) {
    next(error);
  }
};
// get rent information of a boat
export const getBoatRent = async (req, res) => {
  try {
    const { id } = req.params;
    const rent = await Rent.findOne({ boatId: id });
    return res.status(200).json({ rent });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// update boat rent
export const updateBoatRent = async (req, res) => {
  try {
    const { id } = req.params;
    const boat = await Rent.findOne({ boatId: id });
    if (!boat) {
      return res.status(404).json({ message: "Rent not found" });
    }
    const updatedRent = await Rent.findOneAndUpdate({ boatId: id }, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json(updatedRent);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
