import BoatDocuments from "../models/BoatDocuments.js";
import { uploadPDF } from "../utils/cloudinaryConfig.js";





export const uploadBoatDocuments = async (req, res) => {
    const files = req.files;
    const { boatId } = req.body;
  
    console.log("Files received:", files);
    console.log("Boat ID:", boatId);
  
    const updateData = {
      boatId,
      vesselDocument: [],
      boatManual: [],
      engineDocument: [],
      motorInsurance: [],
      portAuthorityPermit: [],
      meloriaShoalsDocuments: [],
    };
  
    try {
      for (const field in files) {
        console.log(`Processing field: ${field}`);
        for (const file of files[field]) {
          console.log(`Uploading file: ${file.originalname}`);
          const result = await uploadPDF(file);
          console.log(`Uploaded file URL: ${result.secure_url}`);
          if (updateData[field]) {
            updateData[field].push(result.secure_url);
          }
        }
      }
  
      // Create a new document in the BoatDocuments collection
      const newBoatDocs = new BoatDocuments(updateData);
      await newBoatDocs.save();
  
      res.status(200).json(newBoatDocs);
    } catch (error) {
      console.error("Error during document upload:", error);
      res.status(500).json({ error: error.message });
    }
  };