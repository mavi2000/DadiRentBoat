import { createError } from "../utils/createError.js";
import Euipment from "../models/Euipment.js";
import Joi from 'joi';



const equipmentValidationSchema = Joi.object({
    boatId: Joi.string().required(), // Uncomment this line once ready to include boatId
    comfort: Joi.array().items(Joi.string()).required(),
    navigation: Joi.array().items(Joi.string()).required(),
    services: Joi.array().items(Joi.string()).required(),
    energy: Joi.array().items(Joi.string()).required()
});

// Create Equipment
export const createEquipment = async (req, res, next) => {
    const { error, value } = equipmentValidationSchema.validate(req.body);

    if (error) {
        return next(createError(400, error.details[0].message));
    }

    try {
        const newEquipment = await Euipment.create(value);
        res.status(201).json({ success: true, message: "Equipment created successfully", equipment: newEquipment });
    } catch (err) {
        next(err);
    }
};


export const updateEquipment = async (req, res, next) => {
    const { error, value } = equipmentValidationSchema.validate(req.body);

    if (error) {
        return next(createError(400, error.details[0].message));
    }

    try {
        const updatedEquipment = await Euipment.findByIdAndUpdate(req.params.id, value, { new: true });

        if (!updatedEquipment) {
            return next(createError(404, 'Equipment not found'));
        }

        res.status(200).json({ success: true, message: "Equipment updated successfully", equipment: updatedEquipment });
    } catch (err) {
        next(err);
    }
};

// Delete Equipment
export const deleteEquipment = async (req, res, next) => {
    try {
        const deletedEquipment = await Euipment.findByIdAndDelete(req.params.id);

        if (!deletedEquipment) {
            return next(createError(404, 'Equipment not found'));
        }

        res.status(200).json({ success: true, message: "Equipment deleted successfully" });
    } catch (err) {
        next(err);
    }
};