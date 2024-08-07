import fs from 'fs';
import path from 'path';

export const saveSignature = (signatureData) => {
  return new Promise((resolve, reject) => {
    const signaturePath = path.join(path.resolve(), 'signatures', `${Date.now()}.png`);
    const base64Data = signatureData.replace(/^data:image\/png;base64,/, '');

    fs.writeFile(signaturePath, base64Data, 'base64', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(signaturePath);
      }
    });
  });
};
