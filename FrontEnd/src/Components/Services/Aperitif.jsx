import React from 'react';
import { useTranslation } from 'react-i18next';
import ExcursionCard from '../Excursions/ExcursionCard';
import DoYouHaveDoubtsCard from '../Excursions/DoYouHaveDoubtsCard';
import manWithStick from '../../assets/Images/man-with-stick.webp';
import { Link } from 'react-router-dom';

const Aperitif = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="Excursions-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            {t('aperitifTitle')}
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            {t('aperitifDescription')}
          </p>
        </div>
      </div>

      <ExcursionCard
        title={t('aperitifCardTitle')}
        description={
          <>
            <p>{t('aperitifCardDescription1')}</p>
            <p>{t('aperitifCardDescription2')}</p>
            <p>{t('aperitifCardDescription3')}</p>
            <p>{t('aperitifCardDescription4')}</p>
          </>
        }
      />
      <br />
      <br />
      <section className="mx-[3%] md:mx-[6%] mt-12 flex gap-6 flex-col md:flex-row justify-center items-center">
        <img
          src={manWithStick}
          alt="boat"
          className="w-full rounded h-auto md:w-1/2 ml-auto mr-0"
        />
        <div>
          <h1 className="text-3xl font-medium">{t('enjoyAperitifTitle')}</h1>
          <br />

          <p className="text-[#676767] text-lg">
            {t('enjoyAperitifDescription1')}
          </p>
          <p className="text-[#676767] text-lg">
            {t('enjoyAperitifDescription2')}
          </p>
          <br />
          <Link to="/check-out">
            <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
              {t('bookNowButton')}
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-[#CBA5574D] mt-12 py-12 px-[3%] md:px-[6%]">
        <h1 className="text-3xl text-[#383838] font-medium mb-4 uppercase">
          {t('boatAperitifTitle')}
        </h1>
        <p className="text-lg text-[#383838]">
          {t('boatAperitifDescription1')}
        </p>
        <br />
        <p className="text-lg text-[#383838]">
          {t('boatAperitifDescription2')}
        </p>
        <br />
        <br />
        <Link to="/check-out">
          <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
            {t('bookNowButton')}
          </button>
        </Link>
      </section>
      <DoYouHaveDoubtsCard title={t('doubtsCardTitle')} />
    </>
  );
};

export default Aperitif;
