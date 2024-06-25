import Joi from "joi";
import BoatAccessInformation from "../models/BoatAccessInformation.js";
import { createError } from "../utils/createError.js";
import { uploadImages } from "../utils/cloudinaryConfig.js";

const accessDetailSchema = Joi.object({
  description: Joi.string().required(),
  documentName: Joi.string().allow(""),
  uploadDocument: Joi.string().allow(""),
  documentLink: Joi.string().allow(""),
});

const boatAccessSchema = Joi.object({
  boatId: Joi.string().required(),
  accessDetails: Joi.array().items(accessDetailSchema).required(),
});

export const addBoatAccessInformation = async (req, res, next) => {
  console.log("req body:", req.body);
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
      boatId: value.boatId,
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
    const { id } = req.params;
    const boatAccessInfo = await BoatAccessInformation.findOne({ boatId: id });
    if (!boatAccessInfo) {
      throw createError(404, "Boat access information not found");
    }
    res.json({ boatAccessInfo });
  } catch (error) {
    next(error);
  }
};

export const updateBoatAccessInformation = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const { error, value } = boatAccessSchema.validate(req.body);
    // if (error) {
    //   throw createError(400, error.details[0].message);
    // }

    const uploadResults = await Promise.all(
      req.files.map(async (file) => {
        return await uploadImages(file);
      })
    );

    const accessDetails = req.body.accessDetails.map((detail, index) => ({
      ...detail,
      uploadDocument: uploadResults[index]?.url || null,
    }));
    // console.log("access details", accessDetails);
    const updatedAccessInfo = await BoatAccessInformation.findOneAndUpdate(
      {
        boatId: id,
      },
      { accessDetails, boatId: id },
      { new: true }
    );
    if (!updatedAccessInfo) {
      return res.status(404).json({ message: "Access information not found" });
    }
    res.status(200).json({
      success: true,
      message: "Boat access information updated successfully",
      boatAccessInfo: updatedAccessInfo,
    });
  } catch (error) {
    console.log(error);
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
