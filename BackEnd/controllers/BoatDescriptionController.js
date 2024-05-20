import BoatDescription from '../models/BoatDescription.js';
import Joi from 'joi';
import createError from 'http-errors';

export const createBoatDescription = async (req, res, next) => {
    const schema = Joi.object({
        boatId: Joi.string().required(),
        boatType: Joi.string().required(),
        rentalType: Joi.object({
            bareBoat: Joi.boolean().required(),
            withoutSkipper: Joi.boolean().required()
        }).required(),
        details: Joi.object({
            modelOrName: Joi.string().required(),
            descriptionItalian: Joi.string().required(),
            descriptionEnglish: Joi.string()
        }).required(),
        capacity: Joi.object({
            boardingCapacity: Joi.number().integer().min(1).required(),
            brand: Joi.string().required(),
            model: Joi.string().required(),
            year: Joi.number().integer().min(1900).max((new Date()).getFullYear()).required(),
            geographicArea: Joi.string().required()
        }).required(),
        motorization: Joi.object({
            numberOfEngines: Joi.number().integer().min(1).required(),
            enginePowerHP: Joi.number().integer().min(1).required()
        }).required(),
        fuel: Joi.object({
            gas: Joi.boolean().required(),
            electric: Joi.boolean().required(),
            diesel: Joi.boolean().required(),
            ethanol: Joi.boolean().required()
        }).required(),
        fuelCapacityLiters: Joi.number(),
        draftMeters: Joi.number().required(),
        widthMeters: Joi.number().required(),
        lengthMeters: Joi.number().required()
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
        return next(createError(400, error.details[0].message));
    }

    try {
      
        const newBoatDescription = await BoatDescription.create(value);
        res.status(201).json({ success: true, message: "Boat description created successfully", boatDescription: newBoatDescription });
    } catch (err) {
        next(err);
    }
};