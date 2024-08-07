import Joi from "joi";
import BoatAccessInformation from "../models/BoatAccessInformation.js";
import { createError } from "../utils/createError.js";
import { uploadImages } from "../utils/cloudinaryConfig.js";

const accessDetailSchema = Joi.object({
  description: Joi.string().required(),
  documentName: Joi.string().allow(""),
  uploadDocument: Joi.string().allow(""),
  documentLink: Joi.string().allow(""),
  documentDescription: Joi.string().allow("") ,
  meloriaHeading:Joi.string().optional()
});

const boatAccessSchema = Joi.object({
  boatId: Joi.string().required(),
  accessDetails: Joi.array().items(accessDetailSchema).required(),
});

// Controller function to add boat access information
export const addBoatAccessInformation = async (req, res, next) => {
  console.log("req.body",req.body)
  try {
    const accessDetails = {
      description: req.body.description,
      documentName: req.body.documentName,
      documentLink: req.body.documentLink,
      uploadDocument: req.files && req.files.pdf ? req.files.pdf[0].path : '',
      documentDescription: req.body.documentDescription ,// New field for document description
      meloriaHeading:req.body.meloriaHeading
    };

    const validationData = {
      boatId: req.body.boatId,
      accessDetails: [accessDetails],
    };

 

    const { error, value } = boatAccessSchema.validate(validationData);
    if (error) {
      throw createError(400, error.details[0].message);
    }

    const uploadResults = req.files && req.files.pdf
      ? await uploadImages(req.files.pdf[0]) // Adjust based on how you want to handle the file
      : null;

    const updatedAccessDetails = value.accessDetails.map((detail) => ({
      ...detail,
      uploadDocument: uploadResults ? uploadResults.url : detail.uploadDocument,
    }));

    const boatAccessInfo = new BoatAccessInformation({
      boatId: value.boatId,
      accessDetails: updatedAccessDetails,
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

    const accessDetails = {
      description: req.body.description,
      documentName: req.body.documentName,
      documentLink: req.body.documentLink,
      uploadDocument: req.files && req.files.pdf ? req.files.pdf[0].path : '',
      documentDescription: req.body.documentDescription // New field for document description
    };

    const validationData = {
      boatId: id,
      accessDetails: [accessDetails],
    };

    const { error, value } = boatAccessSchema.validate(validationData);
    if (error) {
      throw createError(400, error.details[0].message);
    }

    const uploadResults = req.files && req.files.pdf
      ? await uploadImages(req.files.pdf[0]) // Adjust based on how you want to handle the file
      : null;

    const updatedAccessDetails = value.accessDetails.map((detail) => ({
      ...detail,
      uploadDocument: uploadResults ? uploadResults.url : detail.uploadDocument,
    }));

    const updatedAccessInfo = await BoatAccessInformation.findOneAndUpdate(
      { boatId: id },
      { accessDetails: updatedAccessDetails, boatId: id },
      { new: true, upsert: true } // Use upsert to create a new document if it doesn't exist
    );

    res.status(200).json({
      success: true,
      message: "Boat access information updated successfully",
      boatAccessInfo: updatedAccessInfo,
    });
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
