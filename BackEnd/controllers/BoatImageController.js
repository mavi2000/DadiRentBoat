import { uploadImages } from '../utils/cloudinaryConfig.js';
import { createError } from '../utils/createError.js';
import BoatImage from '../models/BoatImage.js';

export const uploadBoatImages = async (req, res, next) => {
    console.log("hello")
  
    console.log("req.body", req.body)
    try {
        if (!req.file) {
            throw createError(400, 'No file was uploaded');
        }

        console.log("req.file", req.file)

        const imageUrl = await uploadImages(req.file); 

       
        const avatarUrl = imageUrl.secure_url;

        const imageInstance = new BoatImage({
            // boatId: boatId,
            avatar: avatarUrl 
        });

        const savedImage = await imageInstance.save();

        res.status(200).json({ success: true, message: 'Image uploaded successfully', image: savedImage });
    } catch (error) {
        next(error);
    }
};