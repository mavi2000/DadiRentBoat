import BoatDescription from "../models/BoatDescription.js";
import Joi from "joi";
import createError from "http-errors";


export const createBoatDescription = async (req, res, next) => {
  const descriptionSchema = Joi.object({
    language: Joi.string().required(),
    description: Joi.string().required(),
  });

  const schema = Joi.object({
    boatId: Joi.string().required(),
    boatType: Joi.string().required(),
    rentalType: Joi.object({
      bareBoat: Joi.boolean().required(),
      withoutSkipper: Joi.boolean().required(),
      noLicenseRequired: Joi.boolean().required(),
      withOwnerOnBoard: Joi.boolean().required(),
    }).required(),
    details: Joi.object({
      modelOrName: Joi.string().required(),
      descriptionItalian: Joi.string().required(),
      descriptionOtherLanguages: Joi.array().items(descriptionSchema).optional(),
    }).required(),
    capacity: Joi.object({
      boardingCapacity: Joi.number().integer().min(1).required(),
      brand: Joi.string().required(),
      model: Joi.string().required(),
      year: Joi.number()
        .integer()
        .min(1900)
        .max(new Date().getFullYear())
        .required(),
      geographicArea: Joi.string().required(),
      berth: Joi.string().allow(""),
      showerRoom: Joi.number().integer().allow(null),
      wc: Joi.string().allow(""),
      cabin: Joi.number().integer().allow(null),
    }).required(),
    motorization: Joi.object({
      numberOfEngines: Joi.number().integer().min(1).required(),
      enginePowerHP: Joi.number().integer().min(1).required(),
      engineMake: Joi.string().required(),
      engineBrand: Joi.string().required(),
      model: Joi.string().required(),
      parkingPort: Joi.string().required(),
    }).required(),
    fuel: Joi.object({
      unleaded: Joi.boolean().required(),
      electric: Joi.boolean().required(),
      diesel: Joi.boolean().required(),
      ethanol: Joi.boolean().required(),
    }).required(),
    fuelCapacityLiters: Joi.number().integer().allow(null),
    engineType: Joi.object({
      twoStroke: Joi.boolean().required(),
      fourStroke: Joi.boolean().required(),
    }).required(),
    draftMeters: Joi.number().required(),
    widthMeters: Joi.number().required(),
    lengthMeters: Joi.number().required(),
    draftFeet: Joi.number().allow(null),
    widthFeet: Joi.number().allow(null),
    lengthFeet: Joi.number().allow(null),
    startTime: Joi.string().required(),
    endTime: Joi.string().required()
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    return next(createError(400, error.details[0].message));
  }

  try {
    const newBoatDescription = await BoatDescription.create(value);
    res.status(201).json({
      success: true,
      message: "Boat description created successfully",
      boatDescription: newBoatDescription,
    });
  } catch (err) {
    next(err);
  }
};



export const getBoatDescription = async (req, res) => {
  try {
    const description = await BoatDescription.findOne({
      boatId: req.params.id,
    });
    if (!description) {
      return res.status(500).json({ message: "Description does not exists" });
    }
    return res.status(200).json({ description });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};



export const updateBoatDescription = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("id",id)
    const description = await BoatDescription.findOne({ boatId: id });

    let updatedDescription;

    if (description) {
      updatedDescription = await BoatDescription.findOneAndUpdate(
        { boatId: id },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
    } else {
      const newDescription = new BoatDescription({ boatId: id, ...req.body });
      updatedDescription = await newDescription.save();
    }

    return res.status(200).json({ updatedDescription });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};