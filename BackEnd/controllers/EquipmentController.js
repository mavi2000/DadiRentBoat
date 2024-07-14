import { createError } from "../utils/createError.js";
import Equipment from "../models/Euipment.js";
import Joi from "joi";

const equipmentValidationSchema = Joi.object({
  // boatId: Joi.string().required(),
  security: Joi.string().valid('Basic', 'Coastal', 'Inshore', 'Semi-Offshore', 'Offshore').required(),
  mainUse: Joi.array().items(Joi.string().valid('Full-day excursion', 'Cruise', 'Water sports', 'Fishing', 'Diving', 'Regatta')).max(4).required(),
  comfort: Joi.array().items(Joi.string()).required(),
  navigation: Joi.array().items(Joi.string()).required(),
  energy: Joi.array().items(Joi.string()).required(),
  kitchen: Joi.array().items(Joi.string()).required(),
  leisure: Joi.array().items(Joi.string()).required(),
  sanitary: Joi.array().items(Joi.string()).required(),
});

// Create Equipment
export const createEquipment = async (req, res, next) => {
  const { error, value } = equipmentValidationSchema.validate(req.body);

  if (error) {
    return next(createError(400, error.details[0].message));
  }

  console.log("req.body",req.body)

  try {
    const newEquipment = await Equipment.create(value);
    res.status(201).json({
      success: true,
      message: "Equipment created successfully",
      equipment: newEquipment,
    });
  } catch (err) {
    next(err);
  }
};

export const updateEquipment = async (req, res, next) => {
  //   const { error, value } = equipmentValidationSchema.validate(req.body);

  //   if (error) {
  //     return next(createError(400, error.details[0].message));
  //   }

  try {
    const updatedEquipment = await Euipment.findOneAndUpdate(
      { boatId: req.params.id },
      req.body,
      { new: true }
    );

    if (!updatedEquipment) {
      return next(createError(404, "Equipment not found"));
    }

    res.status(200).json({
      success: true,
      message: "Equipment updated successfully",
      equipment: updatedEquipment,
    });
  } catch (err) {
    next(err);
  }
};

// Delete Equipment
export const deleteEquipment = async (req, res, next) => {
  try {
    const deletedEquipment = await Euipment.findByIdAndDelete(req.params.id);

    if (!deletedEquipment) {
      return next(createError(404, "Equipment not found"));
    }

    res
      .status(200)
      .json({ success: true, message: "Equipment deleted successfully" });
  } catch (err) {
    next(err);
  }
};
// get boat equipments
export const getBoatEquipments = async (req, res) => {
  try {
    const { id } = req.params;
    const equipments = await Euipment.findOne({ boatId: id });
    if (!equipments) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    return res.status(200).json({ equipments });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
