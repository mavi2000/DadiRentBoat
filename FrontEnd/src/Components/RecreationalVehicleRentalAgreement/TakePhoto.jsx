import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TakePhoto = ({ data, setData }) => {
  const { t } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState({ docFront: null, docBack: null });

  const handleChange = (e) => {
    const file = e.target.files[0]; // Get the first file (should be only one)
    if (file) {
      console.log("File selected:", file);
      const name = e.target.name;
      setData((prev) => ({
        ...prev,
        [name]: file, // Store the single file object
      }));
      setSelectedFiles((prev) => ({
        ...prev,
        [name]: file.name, // Store the file name to display
      }));
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div className="flex mb-12 gap-8">
      <div>
        <h1 className="text-2xl text-[#383838] mb-4">{t('documentFrontUnique')}</h1>
        <div className="bg-[--primary-color] rounded-lg py-2 px-7">
          <input type="file" id="docFront" name="docFront" className="hidden" onChange={handleChange} />
          <button
            type="button"
            className="text-white text-base font-bold"
            onClick={() => {
              document.getElementById('docFront').click();
            }}
          >
            {t('uploadPhotoFrontUnique')}
          </button>
          {selectedFiles.docFront && (
            <p className="mt-2 text-sm text-gray-700">
              {t('selectedFile')}: {selectedFiles.docFront}
            </p>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-[#383838] mb-4">{t('documentBackUnique')}</h1>
        <div className="bg-[--primary-color] rounded-lg py-2 px-7">
          <input type="file" id="docBack" name="docBack" className="hidden" onChange={handleChange} />
          <button
            type="button"
            className="text-white text-base font-bold"
            onClick={() => {
              document.getElementById('docBack').click();
            }}
          >
            {t('uploadPhotoBackUnique')}
          </button>
          {selectedFiles.docBack && (
            <p className="mt-2 text-sm text-gray-700">
              {t('selectedFile')}: {selectedFiles.docBack}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TakePhoto;
