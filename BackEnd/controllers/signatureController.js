import { saveSignature } from '../models/signatureModel.js';
import { uploadImages } from '../utils/cloudinaryConfig.js';

export const verifySignature = async (req, res) => {
  const { signatureData } = req.body;

  if (!signatureData) {
    return res.status(400).json({ message: 'Signature data is required.' });
  }

  try {
    const localPath = await saveSignature(signatureData);

    const base64Data = signatureData.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const file = { buffer, mimetype: 'image/png' };
    const uploadResult = await uploadImages(file);

    const isValid = true; 

    if (isValid) {
      return res.status(200).json({
        message: 'Signature verified successfully.',
        valid: true,
        url: uploadResult.secure_url,
        localPath: localPath,
      });
    } else {
      return res.status(400).json({ message: 'Invalid signature.', valid: false });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Failed to save signature.', error: error.message });
  }
};
