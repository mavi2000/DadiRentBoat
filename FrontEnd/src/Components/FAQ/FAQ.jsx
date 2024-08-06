import React, { useState } from 'react';
import { RiArrowRightSFill, RiArrowUpSFill } from 'react-icons/ri';
import DropdownFAQ from './DropdownFAQ';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation(); // Use the useTranslation hook here
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="Services-page-bg !h-[50svh] md:!h-[100svh]">
        <div className="h-[50svh] md:h-[100svh] flex flex-col justify-center mx-[6%]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            {t('faqTitle')}
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            {t('faqSubtitle')}
          </p>
        </div>
      </div>

      <div className="mx-[6%] mt-[4%] mb-[2%]">
        <h1 className="font-medium text-3xl text-[#000000]">
          {t('faqSectionTitle')}
        </h1>
        <p className="text-lg font-normal text-opacity-70 text-[#676767] mt-1 mb-[3%]">
          {t('faqSectionDescription')}
        </p>

        {[...Array(15).keys()].map(i => (
          <DropdownFAQ
            key={i}
            title={t(`faq${i + 1}Title`)}
            description={t(`faq${i + 1}Description`)}
          />
        ))}

        <p className="text-lg font-normal text-opacity-70 text-[#676767] mt-[2%]">
          {t('faqDownloadDescription')}
        </p>
        <div className="flex justify-center items-center">
          <button className="btn-5 my-[3%]">{t('faqDownloadButton')}</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
