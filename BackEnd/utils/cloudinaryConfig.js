import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from '../config/config.js';
import fs from 'fs';
import cloudinary from './cloudinaryInit.js';


export const cloudinaryConfig = cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const uploadImagesNew = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { folder: 'signatures' }, // Specify your Cloudinary folder here
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    // Create a readable stream and pipe it to the upload stream
    fs.createReadStream(file.path).pipe(stream);
  });
};



export const uploadImages = async (file) => {
  try {
    let uploadOptions = { folder: "games" };
    const buffer = file.buffer;

    if (file.mimetype.startsWith('image')) {
      return await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload_stream(uploadOptions, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }).end(buffer);
      });
    } else if (file.mimetype.startsWith('video')) {
      uploadOptions.resource_type = 'video';
      return await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload_stream(uploadOptions, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }).end(buffer);
      });
    } else if (file.mimetype.startsWith('audio')) {
      uploadOptions.resource_type = 'auto';
      return await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload_stream(uploadOptions, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }).end(buffer);
      });
    } else if (file.mimetype.startsWith('application/pdf')) {
      uploadOptions.folder = "pdfs";
      return await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload_stream(uploadOptions, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }).end(buffer);
      });
    } else {
      uploadOptions.resource_type = 'raw';
      return await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload_stream(uploadOptions, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }).end(buffer);
      });
    }
  } catch (error) {
    console.error("Error during Cloudinary upload:", error);
    throw error;
  }
};



export const uploadPDF = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream({ folder: "games" }, (error, result) => {
      if (error) {
        console.error("Cloudinary upload error:", error);
        reject(error);
      } else {
        console.log("Cloudinary upload result:", result);
        resolve(result);
      }
    });

    stream.end(file.buffer);
  });
};