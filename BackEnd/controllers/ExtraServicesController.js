import Joi from 'joi';
import { createError } from '../utils/createError.js';
import ExtraServices from '../models/ExtraServices.js';

export const createExtraService = async (req, res, next) => {
    const schema = Joi.object({
        serviceName: Joi.string().required(),
        pricePerPerson: Joi.number().positive().required()
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
        return next(createError(400, error.details[0].message));
    }

    try {
        const newExtraService = await ExtraServices.create(value);
        res.status(201).json({ success: true, message: "Extra service created successfully", extraService: newExtraService });
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