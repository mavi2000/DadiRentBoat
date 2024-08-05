import React from 'react';
import { useTranslation } from 'react-i18next';

const CrewGuestList = ({ data, setData }) => {
  const { t } = useTranslation();

  const handleChange = (e) => {
    setData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <div>
      <h1 className="mt-16 text-xl font-semibold">{t('title6')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('description6')}</p>
      <div className="flex flex-col my-8">
        <label htmlFor="members">
          {t('totalMembers')} <span className="text-red-500">*</span>
        </label>
        <div>
          <input
            id="members"
            name="members"
            value={data.members}
            onChange={handleChange}
            type="text"
            placeholder="ex: 23"
            className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full md:w-[calc(50%-2rem)]"
          />
          <p className="text-xs text-[#4b465caf]">{t('people')}</p>
        </div>
      </div>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4 mt-16" />
      <p className="text-lg">{t('responsibilityDeclaration')}</p>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
    </div>
  );
};

export default CrewGuestList;
