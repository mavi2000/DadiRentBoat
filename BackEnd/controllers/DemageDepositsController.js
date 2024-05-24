import DemageDeposits from "../models/DemageDeposits.js";
import { createError } from "../utils/createError.js";
import Joi from "joi";

export const createDamageDeposit = async (req, res, next) => {
  const schema = Joi.object({
    type: Joi.string().required(),
    amount: Joi.string().required(),
    // boatId: Joi.string().required(), // Uncomment this line once ready to include boatId
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
