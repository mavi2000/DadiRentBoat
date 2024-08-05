import React from 'react';
import { useTranslation } from 'react-i18next';
import getinImg from '../../assets/Images/getin.png';
import checkSheild from '../../assets/Images/check-sheild.png';
import safety from '../../assets/Images/safty.png';
import weather from '../../assets/Images/weather.png';

const Precautions = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[var(--navy-blue)] flex flex-col md:flex-row md:px-8">
      <div className="flex flex-col py-12 px-6 md:px-8 border-t-[1px] md:border-l-[1px] border-[var(--primary-color)] relative">
        <img
          src={checkSheild}
          alt="Check"
          className="absolute w-12 h-12 left-[45%] md:-left-6 -top-6 md:top-[50%] "
        />
        <h1 className="text-[var(--primary-color)] text-3xl font-medium">
          {t('browseSafety')}
        </h1>

        <p className="text-white text-base my-4">
          {t('browseSafetyDescription')}
        </p>
        <button className="flex gap-4 items-center text-[var(--primary-color)]  mt-auto mb-0 text-base font-bold">
          {t('consultPdf')}
          <img src={getinImg} alt="get in" className="w-6 h-5" />
        </button>
      </div>
      <div className="flex flex-col  py-12 px-6 md:px-8 border-t-[1px] md:border-l-[1px] border-[var(--primary-color)] relative">
        <img
          src={safety}
          alt="Check"
          className="absolute w-12 h-12 left-[45%] md:-left-6 -top-6 md:top-[50%] "
        />
        <h1 className="text-[var(--primary-color)] text-3xl font-medium">
          {t('customerSafety')}
        </h1>

        <p className="text-white text-base my-4">
          {t('customerSafetyDescription')}
        </p>
        <button className="flex gap-4 items-center text-[var(--primary-color)]  mt-auto mb-0 text-base font-bold">
          {t('viewMore')}
          <img src={getinImg} alt="get in" className="w-6 h-5" />
        </button>
      </div>
      <div className="flex flex-col py-12 px-6 md:px-8 border-t-[1px] md:border-l-[1px] border-[var(--primary-color)] relative">
        <img
          src={weather}
          alt="Check"
          className="absolute w-12 h-12 left-[45%] md:-left-6 -top-6 md:top-[50%] "
        />
        <h1 className="text-[var(--primary-color)] text-3xl font-medium">
          {t('weatherSeaWind')}
        </h1>

        <p className="text-white text-base my-4">
          {t('weatherSeaWindDescription')}
        </p>
        <button className="flex gap-4 items-center text-[var(--primary-color)] mt-auto mb-0 text-base font-bold">
          {t('checkWeather')}
          <img src={getinImg} alt="get in" className="w-6 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Precautions;
