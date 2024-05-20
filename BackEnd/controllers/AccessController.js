import BoatAccess from '../models/BoatAccess.js';
import Joi from 'joi';
import { createError } from '../utils/createError.js';
import { uploadImage } from '../utils/uploadImage.js';

export const uploadBoatAccess = async (req, res, next) => {
  try {
    const schema = Joi.object({
      boatId: Joi.string().required(),
      description: Joi.string().required(),
    });


    const { error, value } = schema.validate(req.body);

    if (error) {
      return next(createError(400, error.details[0].message));
    }

  
    uploadImage(req, res, async (err) => {
      if (err) {
        return next(createError(400, 'File upload failed'));
      }
      try {
        const { boatId, description } = value;
        const documents = [];
        const document = {
          documentName: req.file.originalname,
          upload: req.file.path,
          link: '', 
        };
        documents.push(document);
        const boatAccess = new BoatAccess({
          boatId,
          description,
          documents,
        });
        await boatAccess.save();
        res.status(201).json({ success: true, message: 'Boat access information uploaded successfully' });
      } catch (error) {
      
        next(createError(500, 'Internal Server Error'));
      }
    });
  } catch (error) {
   
    next(createError(500, 'Internal Server Error'));
  }
};
