import Joi from "joi";
import BoatAccessInformation from "../models/BoatAccessInformation.js";
import { createError } from "../utils/createError.js";
import { uploadImages } from "../utils/cloudinaryConfig.js";

const accessDetailSchema = Joi.object({
  description: Joi.string().required(),
  documentName: Joi.string(),
  uploadDocument: Joi.string(),
  documentLink: Joi.string(),
});

const boatAccessSchema = Joi.object({
  accessDetails: Joi.array().items(accessDetailSchema).required(),
});

export const addBoatAccessInformation = async (req, res, next) => {
  console.log("Backend", req.body);
  try {
    const { error, value } = boatAccessSchema.validate(req.body);
    if (error) {
      throw createError(400, error.details[0].message);
    }
    const uploadResults = await Promise.all(
      req.files.map(async (file) => {
        return await uploadImages(file);
      })
    );

    const accessDetails = value.accessDetails.map((detail, index) => ({
      ...detail,
      uploadDocument: uploadResults[index]?.url || null,
    }));

    const boatAccessInfo = new BoatAccessInformation({
      accessDetails,
    });

    const savedBoatAccessInfo = await boatAccessInfo.save();

    res.status(201).json({
      success: true,
      message: "Boat access information created successfully",
      boatAccessInfo: savedBoatAccessInfo,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBoatAccessInformation = async (req, res, next) => {
  try {
    const boatAccessInfo = await BoatAccessInformation.find();
    res.json(boatAccessInfo);
  } catch (error) {
    next(error);
  }
};

export const getBoatAccessInformationById = async (req, res, next) => {
  try {
    const boatAccessInfo = await BoatAccessInformation.findById(req.params.id);
    if (!boatAccessInfo) {
      throw createError(404, "Boat access information not found");
    }
    res.json(boatAccessInfo);
  } catch (error) {
    next(error);
  }
};

export const updateBoatAccessInformation = async (req, res, next) => {
  try {
    const { description, documentName, documentLink } = req.body;
    const updatedBoatAccessInfo = await BoatAccessInformation.findByIdAndUpdate(
      req.params.id,
      {
        $set: { accessDetails: { description, documentName, documentLink } },
      },
      { new: true }
    );
    if (!updatedBoatAccessInfo) {
      throw createError(404, "Boat access information not found");
    }
    res.json(updatedBoatAccessInfo);
  } catch (error) {
    next(error);
  }
};

export const deleteBoatAccessInformation = async (req, res, next) => {
  try {
    const deletedBoatAccessInfo = await BoatAccessInformation.findByIdAndDelete(
      req.params.id
    );
    if (!deletedBoatAccessInfo) {
      throw createError(404, "Boat access information not found");
    }
    res.json({ message: "Boat access information deleted successfully" });
  } catch (error) {
    next(error);
  }
};
