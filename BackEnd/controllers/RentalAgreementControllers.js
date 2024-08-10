import Agreement from "../models/RentalAgreement.js";
import { uploadImages,uploadImagesNew } from "../utils/cloudinaryConfig.js";
import mongoose from 'mongoose'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// import createError from "http-errors";
export const createAgreement = async (req, res) => {
  console.log("req", req.body);
  try {
    const agreementData = req.body;
    const { docFront, docBack } = req.files;

    console.log("req.files",req.files)

    // Check if files are present
    if (!docFront || !docBack || !docFront[0] || !docBack[0]) {
      return res.status(400).json({ message: "Both docFront and docBack files must be uploaded" });
    }

    // Upload images to Cloudinary
    const [docFrontResult, docBackResult] = await Promise.all([
      uploadImages(docFront[0]),
      uploadImages(docBack[0]),
    ]);

    // Create a new agreement with the image URLs
    const agreement = new Agreement({
      ...agreementData,
      docFront: docFrontResult.secure_url,
      docBack: docBackResult.secure_url,
    });

    await agreement.save();

    return res
      .status(200)
      .json({ message: "Rental agreement created successfully!" });
  } catch (error) {
    console.error("Error during agreement creation:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};






export const getAgreementByUserId = async (req, res) => {
  try {
 // Add this line to log req.params
    const { userId } = req.params;


    
    // Fetch the agreement using the user ID
    const agreement = await Agreement.findOne({ userId });

    if (!agreement) {
      return res.status(404).json({ message: 'Rental agreement not found' });
    }

    return res.status(200).json(agreement);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
};






export const signature = async (req, res) => {
  try {
    const { id } = req.body;
    const signatureFile = req.file;

    console.log("Request Body:", req.body);
    console.log("Uploaded File:", signatureFile);

    if (!id || !signatureFile) {
      return res.status(400).json({ message: 'Agreement ID and signature image are required' });
    }

    // Validate and convert id to ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Agreement ID format' });
    }

    // Upload the signature image to Cloudinary
    const uploadResult = await uploadImagesNew(signatureFile);

    console.log("Upload Result:", uploadResult);

    if (!uploadResult || !uploadResult.secure_url) {
      throw new Error('Image upload failed');
    }

    // Optionally delete the file from the server after uploading to Cloudinary
    fs.unlink(signatureFile.path, (err) => {
      if (err) {
        console.error('Failed to delete local file:', err);
      }
    });

    // Find and update or create the agreement with the signature URL
    const agreement = await Agreement.findOneAndUpdate(
      { _id: id },
      { signature: uploadResult.secure_url },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ message: 'Signature uploaded and agreement updated or created successfully', agreement });

  } catch (error) {
    console.error('Error uploading signature:', error);
    res.status(500).json({ message: 'Failed to upload signature', error });
  }
};