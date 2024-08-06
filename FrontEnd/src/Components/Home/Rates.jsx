import React from 'react';
import { useTranslation } from 'react-i18next';
import RatesCard from './RatesCard';

const Rates = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F2EFE8] py-12 flex flex-col items-center justify-center my-12 mx-[3%] md:mx-[6%]">
      {/* <h1 className="text-[var(--primary-color)] text-base font-semibold ">
        {t('viewOur')}
      </h1>
      <h1 className="text-3xl font-medium text-black my-4">{t('rates')}</h1>
      <p className="text-base text-[#383838] w-full md:w-[60%] text-center mb-8">
        {t('ratesDescription')}
      </p>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <RatesCard
          title="AperiTuffo"
          rate={30.0}
          label={t('labelPerson')}
          trait1={t('trait1')}
          trait2={t('trait2')}
          trait3={t('trait3')}
          trait4={t('trait4')}
        />
        <RatesCard
          title="Full Day"
          rate={200.0}
          label={t('labelHighSeason')}
          trait1={t('trait5')}
          trait2={t('trait6')}
          trait3={t('trait3')}
          trait4={t('trait4')}
        />
        <RatesCard
          title="AperiTuffo"
          rate={350.0}
          label={t('label6Person')}
          trait1={t('trait7')}
          trait2={t('trait2')}
          trait3={t('trait3')}
          trait4={t('trait4')}
        />
      </div> */}
    </section>
  );
};
export default Rates;
