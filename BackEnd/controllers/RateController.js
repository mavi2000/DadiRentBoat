import Rate from "../models/Rates.js";
import { createError } from "../utils/createError.js";
import Joi from "joi";




export const addRate = async (req, res, next) => {
    try {
        const schema = Joi.object({
            normalDayDate: Joi.date().required(),
            weekendDate: Joi.date().required(),
            normalDayRates: Joi.object({
                morning: Joi.number().required(),
                evening: Joi.number().required(),
                fullDay: Joi.number().required()
            }).required(),
            weekendRates: Joi.object({
                morning: Joi.number().required(),
                evening: Joi.number().required(),
                fullDay: Joi.number().required()
            }).required()
        });

        const { error, value } = schema.validate(req.body);
        if (error) {
            throw createError(400, error.details[0].message);
        }

        const { normalDayDate, weekendDate, normalDayRates, weekendRates } = value;
   
        const existingRate = await Rate.findOne({ normalDayDate, weekendDate });
        if (existingRate) {
            throw createError(400, 'Rate already exists for the provided dates');
        }

        const rate = new Rate({
            normalDayDate,
            weekendDate,
            normalDayRates,
            weekendRates
        });

        // Save the rate to the database
        const savedRate = await rate.save();

        res.status(201).json(savedRate);
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
        const rate = await Rate.findById(rateId);
        if (!rate) {
            throw createError(404, 'Rate not found');
        }
        res.json(rate);
    } catch (error) {
        next(error);
    }
};

// Controller to update a rate
export const updateRate = async (req, res, next) => {
    try {
        const rateId = req.params.id;
        const { date, rateType, fullDayRate, halfDayMorningRate, halfDayEveningRate } = req.body;

        // Find the rate by ID
        let rate = await Rate.findById(rateId);
        if (!rate) {
            throw createError(404, 'Rate not found');
        }

        // Update the rate fields
        rate.date = date;
        rate.rateType = rateType;
        rate.fullDayRate = fullDayRate;
        rate.halfDayMorningRate = halfDayMorningRate;
        rate.halfDayEveningRate = halfDayEveningRate;

        // Save the updated rate
        rate = await rate.save();

        res.json(rate);
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
            throw createError(404, 'Rate not found');
        }

        res.json({ message: 'Rate deleted successfully' });
    } catch (error) {
        next(error);
    }
};