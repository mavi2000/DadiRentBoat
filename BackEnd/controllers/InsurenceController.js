import { createError } from "../utils/createError.js";
import Insurence from "../models/Insurence.js";
import Joi from "joi";
import { uploadPDF } from "../utils/cloudinaryConfig.js";



export const addInsurance = async (req, res, next) => {
  try {
    const schema = Joi.object({
      // boatId: Joi.string().required(),
      currentInsurer: Joi.string().required(),
      amountDeductible: Joi.number().positive().required(),
      insuredValueOfBoat: Joi.number().positive().required(),
      boatRegistration: Joi.string().required(),
    });

    console.log("req.body", req.body); // Log request body
    console.log("req.files", req.files); // Log files received

    const { error, value } = schema.validate(req.body);
    if (error) {
      return next(createError(400, error.details[0].message));
    }

    const {
      // boatId,
      currentInsurer,
      amountDeductible,
      insuredValueOfBoat,
      boatRegistration,
    } = value;

    const insuranceDocuments = [];

    try {
      if (req.files && req.files.insuranceDocuments) {
        for (const file of req.files.insuranceDocuments) {
          console.log(`Uploading file: ${file.originalname}`);
          const result = await uploadPDF(file);
          console.log(`Uploaded file URL: ${result.secure_url}`);
          insuranceDocuments.push(result.secure_url);
        }
      }
    } catch (uploadError) {
      console.error('Cloudinary upload error:', uploadError);
      return next(createError(500, uploadError.message));
    }

    const newInsurance = new Insurence({
      // boatId,
      currentInsurer,
      amountDeductible,
      insuredValueOfBoat,
      boatRegistration,
      insuranceDocuments,
    });

    const savedInsurance = await newInsurance.save();

    res.status(201).json({
      success: true,
      message: "Insurance created successfully",
      insurance: savedInsurance,
    });
  } catch (error) {
    console.error("Error during document upload:", error);
    next(error);
  }
}










export const updateInsurance = async (req, res, next) => {
  try {
    const schema = Joi.object({
      currentInsurer: Joi.string().required(),
      amountDeductible: Joi.number().positive().required(),
      insuredValueOfBoat: Joi.number().positive().required(),
      boatRegistration: Joi.string().required(),
      boatId: Joi.string().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      return next(createError(400, error.details[0].message));
    }

    const { currentInsurer, amountDeductible, insuredValueOfBoat, boatRegistration, boatId } = value;

    const updatedInsurance = await Insurence.findOneAndUpdate(
      { boatId: req.params.id },
      {
        currentInsurer,
        amountDeductible,
        insuredValueOfBoat,
        boatRegistration,
        updatedAt: Date.now(),
      },
      { new: true, upsert: true } // upsert: true creates a new document if none exists
    );

    res.status(200).json({
      success: true,
      message: updatedInsurance.isNew ? "Insurance created successfully" : "Insurance updated successfully",
      insurance: updatedInsurance,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteInsurance = async (req, res, next) => {
  try {
    const deletedInsurance = await Insurance.findByIdAndDelete(req.params.id);

    if (!deletedInsurance) {
      return next(createError(404, "Insurance record not found"));
    }

    res.status(200).json({
      success: true,
      message: "Insurance deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// get insurance
export const getInsurance = async (req, res) => {
  try {
    const { id } = req.params;
    const insurance = await Insurence.findOne({ boatId: id });
    if (!insurance) {
      return res.status(404).json({ message: "Insurance not found" });
    }
    return res.status(200).json({ insurance });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
