import Location from "../models/Location.js";
import { createError } from "../utils/createError.js";
import Joi from 'joi';




const locationValidationSchema = Joi.object({
    boatId: Joi.string().required(), // Uncomment this line once ready to include boatId
    place: Joi.string().required(),
    city: Joi.string().required(),
    exactLocation: Joi.object({
        latitude: Joi.number().required(),
        longitude: Joi.number().required()
    }).required()
});


export const createLocation = async (req, res, next) => {
    const { error, value } = locationValidationSchema.validate(req.body);

    if (error) {
        return next(createError(400, error.details[0].message));
    }

    try {
        const newLocation = await Location.create(value);
        res.status(201).json({ success: true, message: "Location created successfully", location: newLocation });
    } catch (err) {
        next(err);
    }
};


export const updateLocation = async (req, res, next) => {
    const { error, value } = locationValidationSchema.validate(req.body);

    if (error) {
        return next(createError(400, error.details[0].message));
    }

    try {
        const updatedLocation = await Location.findByIdAndUpdate(req.params.id, value, { new: true });

        if (!updatedLocation) {
            return next(createError(404, 'Location not found'));
        }

        res.status(200).json({ success: true, message: "Location updated successfully", location: updatedLocation });
    } catch (err) {
        next(err);
    }
};


export const deleteLocation = async (req, res, next) => {
    try {
        const deletedLocation = await Location.findByIdAndDelete(req.params.id);

        if (!deletedLocation) {
            return next(createError(404, 'Location not found'));
        }

        res.status(200).json({ success: true, message: "Location deleted successfully" });
    } catch (err) {
        next(err);
    }
};