import React from 'react';
import { useTranslation } from 'react-i18next';
import './Table.css';

const SectionBelowTable = ({ data, setData }) => {
  const { t } = useTranslation();

  const handleChange = (e) => {
    setData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    });
  };

  return (
    <>
      <div className="flex gap-2 items-start">
        <input
          type="checkbox"
          id="Pursuant"
          name="Pursuant"
          className="w-5 h-5 mt-1 border-[2px] border-[#7B7B7B] accent-[--primary-color]"
        />
        <label htmlFor="Pursuant" className="text-lg">
          <span className="text-[--primary-color] underline">
            {t('pursuantLabelUnique')}
          </span>
          &nbsp;{t('pursuantClausesUnique')}
          <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="flex gap-2 items-start mt-6">
        <input
          type="checkbox"
          id="ADESIONE"
          name="ADESIONE"
          className="w-5 h-5 mt-1 border-[2px] border-[#7B7B7B] accent-[--primary-color]"
        />
        <label htmlFor="ADESIONE" className="text-2xl font-semibold">
          {t('adesioneTitleUnique')}
          <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="border-[1px] text-lg border-[#E8E8E8] rounded-md mt-8 p-4 h-[160px] custom-scrollbar overflow-auto">
        <p>
          {t('informationDocumentUnique')}
        </p>
        <p>
          {t('dadiRentDeclarationUnique')}
        </p>
      </div>
      <div className="flex gap-12 flex-col w-full md:flex-row mt-10">
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="faithPlace">{t('faithPlaceLabelUnique')}</label>
          <div>
            <input
              type="text"
              id='faithPlace'
              name="faithPlace"
              onChange={handleChange}
              value={data.faithPlace}
              className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full "
              placeholder="Livorno (Li)"
            />
          </div>
        </div>
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="faithDate">{t('faithDateLabelUnique')}</label>
          <div>
            <input
              type="date"
              id="faithDate"
              name="faithDate"
              onChange={handleChange}
              value={data.faithDate}
              className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionBelowTable;
