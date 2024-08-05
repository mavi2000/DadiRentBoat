import React from 'react';
import { useTranslation } from 'react-i18next';

const Prize = ({ data, setData }) => {
  const { t } = useTranslation();

  const handleChange = (e) => {
    setData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <div>
      <h1 className="mt-16 text-xl font-semibold">{t('prizeTitleUnique')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('prizeDescriptionUnique')}</p>
      <div className="flex flex-col my-8">
        <label htmlFor="leasePrice">
          {t('leasePriceLabelUnique')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="leasePrice"
          name="leasePrice"
          onChange={handleChange}
          value={data.leasePrice}
          className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full md:w-[calc(50%-2rem)]"
          placeholder={t('placeholderEnterUnique')}
        />
      </div>
    </div>
  );
};

export default Prize;
