import { uploadImages } from "../utils/cloudinaryConfig.js";
import { createError } from "../utils/createError.js";
import BoatImage from "../models/BoatImage.js";

export const uploadBoatImages = async (req, res, next) => {
  const { boatId } = req.body;

  console.log("boatId", boatId);
  try {
    console.log("Received files:", req.files);

    if (!req.files || (!req.files.images && !req.files.videos)) {
      throw createError(400, "No files were uploaded");
    }

    const images = req.files.images ? req.files.images : [];
    const videos = req.files.videos ? req.files.videos : [];

    console.log("Images to upload:", images);
    console.log("Videos to upload:", videos);

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
    console.error("Error uploading files:", error);
    next(error);
  }
};




export const getBoatImages = async (req, res, next) => {
  const { id } = req.params;
  console.log("boatId",id)

  try {
    const boatImages = await BoatImage.findOne({boatId: id });

    if (!boatImages) {
      return res.status(404).json({
        success: false,
        message: 'Boat images not found',
      });
    }

    console.log("boatImages",boatImages)

    res.status(200).json({
      success: true,
      data: boatImages,
    });
  } catch (error) {
    console.error('Error retrieving boat images:', error);
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




export const deleteImage =async(req,res)=>{
  const { boatId, type, url } = req.body;

  try {
    const boatImage = await BoatImage.findOne({ boatId });

    if (!boatImage) {
      return res.status(404).json({
        success: false,
        message: 'Boat images not found',
      });
    }

    if (type === 'images') {
      boatImage.images = boatImage.images.filter((image) => image !== url);
    } else if (type === 'videos') {
      boatImage.videos = boatImage.videos.filter((video) => video !== url);
    }

    await boatImage.save();

    res.status(200).json({
      success: true,
      message: 'Media deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting boat media:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
}
