import { uploadImages } from "../utils/cloudinaryConfig.js";
import { createError } from "../utils/createError.js";
import BoatImage from "../models/BoatImage.js";

export const uploadBoatImages = async (req, res, next) => {
  console.log("hello");

  console.log("req.body", req.body);
  const { boatId } = req.body;
  try {
    if (!req.file) {
      throw createError(400, "No file was uploaded");
    }

    console.log("req.file", req.file);

    const imageUrl = await uploadImages(req.file);

    const avatarUrl = imageUrl.secure_url;

    const imageInstance = new BoatImage({
      boatId: boatId,
      avatar: avatarUrl,
    });

    const savedImage = await imageInstance.save();

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      image: savedImage,
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
