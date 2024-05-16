import Boat from "../models/Boat.js"
import Joi from 'joi';
import { createError } from "../utils/createError.js";



export const  CreateBoat = async (req, res, next) => {
    const schema = Joi.object({
        type: Joi.string().required(),
        brand: Joi.string().required(),
        model: Joi.string().required(),
        year: Joi.number().integer().min(1900).max((new Date()).getFullYear()).required(),
        region: Joi.string().required(),
        boardingCapacity: Joi.number().integer().min(1).required(),
        totalEnginePowerHP: Joi.number().integer().min(1).required(),
        lengthMeters: Joi.number().min(0).required(),
        telephone: Joi.string().required(),
        waterTankLiters: Joi.number().integer().min(0).required(),
        fuelTankLiters: Joi.number().integer().min(0).required(),
        droughtMeters: Joi.number().min(0).required()
    });

   

    const { error, value } = schema.validate(req.body);

    if (error) {
        return next(createError(400, error.details[0].message));
    }

    try {
        const newBoat = await Boat.create(value);
        res.status(201).json({ success: true, message: "Boat created successfully", boat: newBoat });
    } catch (err) {
        next(err);
    }
};