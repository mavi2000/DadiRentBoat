import Joi from 'joi';
import { createError } from '../utils/createError.js';
import ExtraServices from '../models/ExtraServices.js';

const extraServiceValidationSchema = Joi.object({
    serviceName: Joi.string().required(),
    pricePerPerson: Joi.number().required(),
    isObligatory: Joi.boolean().default(false) // Add the isObligatory field
});

// Create Extra Service
export const createExtraService = async (req, res, next) => {
    // Validate the request body against the schema
    const { error, value } = extraServiceValidationSchema.validate(req.body);

    if (error) {
        return next(createError(400, error.details[0].message));
    }

    try {
        // Create the new extra service with the validated data
        const newExtraService = await ExtraServices.create(value);
        res.status(201).json({ success: true, message: "Extra Service created successfully", extraService: newExtraService });
    } catch (err) {
        next(err);
    }
};


export const getAllExtraServices = async (req, res, next) => {
    try {
        // Fetch all extra services from the database
        const extraServices = await ExtraServices.find();
        res.status(200).json({ success: true, extraServices });
    } catch (err) {
        next(err);
    }
};
export const updateExtraService = async (req, res, next) => {
    const { id } = req.params;

    try {
        const updatedExtraService = await ExtraService.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedExtraService) {
            return next(createError(404, "Extra service not found"));
        }

        res.json({ success: true, message: "Extra service updated successfully", extraService: updatedExtraService });
    } catch (err) {
        next(err);
    }
};

export const deleteExtraService = async (req, res, next) => {
    const { id } = req.params;

    try {
        const deletedExtraService = await ExtraService.findByIdAndDelete(id);

        if (!deletedExtraService) {
            return next(createError(404, "Extra service not found"));
        }

        res.json({ success: true, message: "Extra service deleted successfully" });
    } catch (err) {
        next(err);
    }
};