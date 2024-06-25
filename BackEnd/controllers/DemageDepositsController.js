import DemageDeposits from "../models/DemageDeposits.js";
import { createError } from "../utils/createError.js";
import Joi from "joi";

export const createDamageDeposit = async (req, res, next) => {
  const schema = Joi.object({
    type: Joi.string().required(),
    amount: Joi.string().required(),
    boatId: Joi.string().required(), // Uncomment this line once ready to include boatId
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    return next(createError(400, error.details[0].message));
  }

  try {
    const newDamageDeposit = await DemageDeposits.create(value);
    res.status(201).json({
      success: true,
      message: "Damage deposit created successfully",
      damageDeposit: newDamageDeposit,
    });
  } catch (err) {
    next(err);
  }
};
// get damage deposits
export const getDamageDeposit = async (req, res) => {
  try {
    const { id } = req.params;
    const deposit = await DemageDeposits.findOne({ boatId: id });
    if (!deposit) {
      return res.status(404).json({ message: "No deposit found" });
    }
    return res.status(200).json({ deposit });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
// update damage deposits
export const updateDamageDeposit = async (req, res) => {
  try {
    const { id } = req.params;
    const deposit = await DemageDeposits.findOne({ boatId: id });
    if (!deposit) {
      return res.status(404).json({ message: "No deposit found" });
    }
    const updatedDeposit = await DemageDeposits.findOneAndUpdate(
      { boatId: id },
      req.body,
      { new: true, runValidators: true }
    );
    return res.status(200).json({ updatedDeposit });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
