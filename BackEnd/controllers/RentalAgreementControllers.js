import Agreement from "../models/RentalAgreement.js";
import { uploadImages } from "../utils/cloudinaryConfig.js";
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