import Joi from "joi";
import { createError } from "../utils/createError.js";
import ExtraServices from "../models/ExtraServices.js";

const extraServiceValidationSchema = Joi.object({
  boatId: Joi.string().required(), 
  serviceName: Joi.string().required(),
  pricePerPerson: Joi.number().required(),
  isObligatory: Joi.boolean().default(false),
  priceUnit: Joi.string().valid('per rental', 'per day', 'per week', '% rental').default('per rental'),
  minDuration: Joi.number().optional().allow(null),
  maxDuration: Joi.number().optional().allow(null)
});

export const createExtraService = async (req, res, next) => {
  const { error, value } = extraServiceValidationSchema.validate(req.body);

  if (error) {
    return next(createError(400, error.details[0].message));
  }

  try {
    const newExtraService = await ExtraServices.create(value);
    res.status(201).json({
      success: true,
      message: "Extra Service created successfully",
      extraService: newExtraService,
    });
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
    const updatedExtraService = await ExtraServices.findOneAndUpdate(
      { boatId: id },
      req.body,
      { new: true }
    );

    if (!updatedExtraService) {
      return next(createError(404, "Extra service not found"));
    }

    res.json({
      success: true,
      message: "Extra service updated successfully",
      extraService: updatedExtraService,
    });
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
