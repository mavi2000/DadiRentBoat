import Rate from "../models/Rates.js";
import { createError } from "../utils/createError.js";
import Joi from "joi";

export const getRates = async (req, res, next) => {
  try {
    const rates = await Rate.find().populate('boatId');
    if (!rates) {
      return next(createError(404, 'Rates not found'));
    }
    res.status(200).json({
      success: true,
      rates
    });
  } catch (error) {
    next(error);
  }
};


export const addRate = async (req, res, next) => {
  try {
    const schema = Joi.object({
      boatId: Joi.string().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().required(),
      applyRatesOfAnotherPeriod: Joi.string().optional(),
      minimumRentalDuration: Joi.string().optional(),
      maximumRentalDuration: Joi.string().optional(),
      restrictDays: Joi.object({
        allowedDaysToDepart: Joi.array().items(Joi.string()).optional(),
        allowedDaysToReturn: Joi.array().items(Joi.string()).optional()
      }).optional(),
      nameOfTheRate: Joi.string().optional(),
      oneHourRate: Joi.number().optional(),
      oneDayRate: Joi.number().optional(),
      oneWeekRate: Joi.number().optional(),
      advanceRates: Joi.object({
        twoDays: Joi.number().optional(),
        threeDays: Joi.number().optional(),
        fiveDays: Joi.number().optional(),
        sixDays: Joi.number().optional(),
        twoWeeks: Joi.number().optional()
      }).optional()
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return next(createError(400, error.details[0].message));
    }

    const { boatId, startDate, endDate, applyRatesOfAnotherPeriod, minimumRentalDuration, maximumRentalDuration, restrictDays, nameOfTheRate, oneHourRate, oneDayRate, oneWeekRate, advanceRates } = value;

    const existingRates = await Rate.find({
      boatId,
      $or: [
        { startDate: { $lte: endDate }, endDate: { $gte: startDate } },
        { startDate: { $gte: startDate }, endDate: { $lte: endDate } },
      ],
    });

    if (existingRates.length > 0) {
      return next(createError(400, "Rate already exists within the provided date range for the same boat"));
    }

    const rate = new Rate({
      boatId,
      startDate,
      endDate,
      applyRatesOfAnotherPeriod,
      minimumRentalDuration,
      maximumRentalDuration,
      restrictDays,
      nameOfTheRate,
      oneHourRate,
      oneDayRate,
      oneWeekRate,
      advanceRates
    });

    const savedRate = await rate.save();

    res.status(201).json({
      success: true,
      message: "Rate created successfully",
      rate: savedRate,
    });
  } catch (error) {
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




export const updateRate = async (req, res, next) => {
  try {
    const rateId = req.params.id;
    const updateData = req.body;

    console.log("updateData",updateData)

    const updatedRate = await Rate.findOneAndUpdate(
      { boatId: rateId },
      updateData,
      {
        new: true,
        upsert: true // This option creates a new document if no document matches the query.
      }
    );

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
