import { uploadImages } from "../utils/cloudinaryConfig.js";
import { createError } from "../utils/createError.js";
import BoatImage from "../models/BoatImage.js";

export const uploadBoatImages = async (req, res, next) => {
  const { boatId } = req.body;
  try {
    if (!req.files || (!req.files.images && !req.files.videos)) {
      throw createError(400, "No files were uploaded");
    }

    const images = req.files.images ? req.files.images.map(file => file.path) : [];
    const videos = req.files.videos ? req.files.videos.map(file => file.path) : [];

    const imageUrls = await Promise.all(images.map(file => uploadImages(file)));
    const videoUrls = await Promise.all(videos.map(file => uploadImages(file)));

    const imageInstances = new BoatImage({
      boatId: boatId,
      images: imageUrls.map(url => url.secure_url),
      videos: videoUrls.map(url => url.secure_url),
    });

    const savedImages = await imageInstances.save();

    res.status(200).json({
      success: true,
      message: "Files uploaded successfully",
      data: savedImages,
    });
  } catch (error) {
    next(error);
  }
};








export const upDateBoatImages = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!req.file) {
      throw createError(400, "No file was uploaded");
    }
    const imageUrl = await uploadImages(req.file);
    const avatarUrl = imageUrl.secure_url;
    const updatedImage = await BoatImage.findOneAndUpdate(
      { boatId: id },
      { avatar: avatarUrl },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Image updated successfully",
      image: updatedImage,
    });
  } catch (error) {
    next(error);
  }
};
