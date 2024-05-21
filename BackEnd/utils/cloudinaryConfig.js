import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from '../config/config.js';
import cloudinary from './cloudinaryInit.js';


export const cloudinaryConfig = cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

export const uploadImages = async (file) => {
    if (!file) {
        throw new Error('No file provided');
    }

    const uploadOptions = { folder: "games" };

    return await cloudinary.v2.uploader.upload(file.path, uploadOptions);
};
