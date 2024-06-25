import Rate from "../models/Rates.js";
import { createError } from "../utils/createError.js";
import Joi from "joi";

const getDatesInRange = (startDate, endDate) => {
  let dates = [];
  let currentDate = new Date(startDate);
  const end = new Date(endDate);

  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

export const addRate = async (req, res, next) => {
  try {
    // Define the validation schema
    const schema = Joi.object({
      boatId: Joi.string().required(), // Validate boatId as required
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
      normalDayRates: Joi.object({
        halfDayMorning: Joi.number().required(),
        halfDayEvening: Joi.number().required(),
        fullDay: Joi.number().required(),
      }).required(),
      weekendRates: Joi.object({
        halfDayMorning: Joi.number().required(),
        halfDayEvening: Joi.number().required(),
        fullDay: Joi.number().required(),
      }).required(),
    });

    // Validate the request body
    const { error, value } = schema.validate(req.body);

    // Handle validation errors
    if (error) {
      return next(createError(400, error.details[0].message));
    }

    // Destructure validated data
    const { boatId, startDate, endDate, normalDayRates, weekendRates } = value;

    // Check for existing rates within the date range for the same boat
    const existingRates = await Rate.find({
      boatId,
      $or: [
        { startDate: { $lte: endDate }, endDate: { $gte: startDate } },
        { startDate: { $gte: startDate }, endDate: { $lte: endDate } },
      ],
    });

    // If there are existing rates, return an error
    if (existingRates.length > 0) {
      return next(
        createError(
          400,
          "Rate already exists within the provided date range for the same boat"
        )
      );
    }

    // Create a new Rate instance
    const rate = new Rate({
      boatId,
      startDate,
      endDate,
      normalDayRates,
      weekendRates,
    });

    // Save the rate to the database
    const savedRate = await rate.save();

    // Send response with the saved rate
    res.status(201).json({
      success: true,
      message: "Rate created successfully",
      rate: savedRate,
    });
  } catch (error) {
    // Handle errors
    next(error);
  }
};
// Controller to retrieve all rates

export const getAllRates = async (req, res, next) => {
  try {
    const rates = await Rate.find();
    res.json(rates);
  } catch (error) {
    next(error);
  }
};

// Controller to retrieve a single rate by its ID
export const getRateById = async (req, res, next) => {
  try {
    const rateId = req.params.id;
    const rate = await Rate.findOne({ boatId: rateId });
    if (!rate) {
      throw createError(404, "Rate not found");
    }
    res.status(200).json({ rate });
  } catch (error) {
    next(error);
  }
};

// Controller to update a rate
export const updateRate = async (req, res, next) => {
  try {
    const rateId = req.params.id;
    // Find the rate by ID
    let rate = await Rate.findOne({ boatId: rateId });
    if (!rate) {
      throw createError(404, "Rate not found");
    }

    // Update the rate fields
    // rate.date = date;
    // rate.rateType = rateType;
    // rate.fullDayRate = fullDayRate;
    // rate.halfDayMorningRate = halfDayMorningRate;
    // rate.halfDayEveningRate = halfDayEveningRate;
    const updatedRate = await Rate.findOneAndUpdate(
      { boatId: rateId },
      req.body,
      {
        new: true,
      }
    );

    // Save the updated rate
    // rate = await rate.save();

    res.status(200).json({ rate: updatedRate });
  } catch (error) {
    next(error);
  }
};

// Controller to delete a rate
export const deleteRate = async (req, res, next) => {
  try {
    const rateId = req.params.id;

    // Find the rate by ID and delete it
    const rate = await Rate.findByIdAndDelete(rateId);
    if (!rate) {
      throw createError(404, "Rate not found");
    }

    res.json({ message: "Rate deleted successfully" });
  } catch (error) {
    next(error);
  }
};
