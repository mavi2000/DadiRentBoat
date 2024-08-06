import React from 'react';
import fillipo from '../../assets/Images/fillipo.png';
import logo from '../../assets/Images/logo.png';
import { VscFilePdf } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

const LastSection = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-lg md:mt-24">{t('acceptanceTextUnique')}</p>

      <img
        src={fillipo}
        alt="fillipo"
        className="max-w-full md:max-w-[80%] h-[136px] mt-4 block mx-auto"
      />
      <p className="text-lg md:mt-24">
        {t('companyDetailsUnique')}
      </p>

      <img src={logo} alt="logo" className="size-[150px] mx-auto mt-16" />

      <hr className="border-none h-[1px] bg-[#DBDADE] mt-8 mb-12" />
      <div className="flex gap-4 w-full md:justify-end mb-12">
        <button className="flex items-center gap-2 rounded-lg px-6 py-3 bg-[#CBA55726] text-lg font-bold text-[--primary-color]">
          <VscFilePdf size={25} />
          {t('downloadPdfButtonUnique')}
        </button>
        <button type='submit' className="rounded-lg px-6 py-3 bg-[--primary-color] text-lg font-bold text-white" disabled={!data.valid}>
          {t('submitButtonUnique')}
        </button>
      </div>
    </div>
  );
};
export default LastSection;
