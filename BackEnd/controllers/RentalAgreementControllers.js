import Agreement from "../models/RentalAgreement.js";
import { uploadImages } from "../utils/cloudinaryConfig.js";
import mongoose from 'mongoose'
// import createError from "http-errors";

export const createAgreement = async (req, res) => {
  try {
    const agreementData = req.body;
    const { docFront, docBack } = req.files;

    // if (!req.files || !req.files.docFront || !req.files.docBack) {
    //   throw createError(
    //     400,
    //     "Both docFront and docBack files must be uploaded"
    //   );
    // }

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
    const { id, signature } = req.body;

    console.log("Request Body:", req.body);

    if (!id || !signature) {
      return res.status(400).json({ message: 'Agreement ID and signature image are required' });
    }

    // Validate and convert id to ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Agreement ID format' });
    }

    // Check and process signature data
    if (signature && signature.startsWith('data:image/png;base64,')) {
      const base64Data = signature.replace(/^data:image\/png;base64,/, '');
      const mimeType = 'image/png';

      console.log("Base64 Data (truncated):", base64Data.substring(0, 100));

      // Upload the image to Cloudinary
      const uploadResult = await uploadImages(base64Data, mimeType);
      console.log("Upload Result:", uploadResult);

      if (!uploadResult || !uploadResult.secure_url) {
        throw new Error('Image upload failed');
      }

      // Find and update or create the agreement
      const agreement = await Agreement.findOneAndUpdate(
        { _id: id },
        { signature: uploadResult.secure_url },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );

      res.status(200).json({ message: 'Signature uploaded and agreement updated or created successfully', agreement });
    } else {
      return res.status(400).json({ message: 'Invalid signature format' });
    }
  } catch (error) {
    console.error('Error uploading signature:', error);
    res.status(500).json({ message: 'Failed to upload signature', error });
  }
};