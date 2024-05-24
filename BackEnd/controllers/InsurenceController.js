import { createError } from "../utils/createError.js";
import Insurence from "../models/Insurence.js";
import Joi from 'joi';


export const addInsurance = async (req, res, next) => {
    try {
        const schema = Joi.object({
            currentInsurer: Joi.string().required(),
            amountDeductible: Joi.number().positive().required(),
            insuredValueOfBoat: Joi.number().positive().required(),
            boatRegistration: Joi.string().required()
        });

        const { error, value } = schema.validate(req.body);
        if (error) {
            return next(createError(400, error.details[0].message));
        }

        const { currentInsurer, amountDeductible, insuredValueOfBoat, boatRegistration } = value;

        const newInsurance = new Insurence({
            currentInsurer,
            amountDeductible,
            insuredValueOfBoat,
            boatRegistration
        });

    
        const savedInsurance = await newInsurance.save();

        res.status(201).json({
            success: true,
            message: "Insurance created successfully",
            insurance: savedInsurance
        });
    } catch (error) {
        next(error);
    }
};


export const updateInsurance = async (req, res, next) => {
    try {
        const schema = Joi.object({
            currentInsurer: Joi.string().required(),
            amountDeductible: Joi.number().positive().required(),
            insuredValueOfBoat: Joi.number().positive().required(),
            boatRegistration: Joi.string().required()
        });

        const { error, value } = schema.validate(req.body);
        if (error) {
            return next(createError(400, error.details[0].message));
        }

        const { currentInsurer, amountDeductible, insuredValueOfBoat, boatRegistration } = value;

        const updatedInsurance = await Insurance.findByIdAndUpdate(
            req.params.id,
            { currentInsurer, amountDeductible, insuredValueOfBoat, boatRegistration, updatedAt: Date.now() },
            { new: true }
        );

        if (!updatedInsurance) {
            return next(createError(404, 'Insurance record not found'));
        }

        res.status(200).json({
            success: true,
            message: "Insurance updated successfully",
            insurance: updatedInsurance
        });
    } catch (error) {
        next(error);
    }
};

export const deleteInsurance = async (req, res, next) => {
    try {
        const deletedInsurance = await Insurance.findByIdAndDelete(req.params.id);

        if (!deletedInsurance) {
            return next(createError(404, 'Insurance record not found'));
        }

        res.status(200).json({
            success: true,
            message: "Insurance deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};