import React from 'react';
import ExcursionCard from '../Excursions/ExcursionCard';
import manWithStick from '../../assets/Images/man-with-stick.webp';
import DoYouHaveDoubtsCard from '../Excursions/DoYouHaveDoubtsCard';
import { useTranslation } from 'react-i18next';

const FishingTrips = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="Excursions-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            {t('fishingTripsTitle')}
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            {t('fishingTripsSubtitle')}
          </p>
        </div>
      </div>

      <ExcursionCard
        title={t('excursionCardTitle')}
        img={manWithStick}
        description={
          <>
            <p>{t('excursionCardDescription')}</p>
            <ul className="pl-8 list-disc">
              <li>{t('excursionCardListItem1')}</li>
              <li>{t('excursionCardListItem2')}</li>
            </ul>
          </>
        }
      />
      <br />
      <br />
      <br />
      <br />
      <div className="mx-[3%] md:mx-[6%]">
        <h1 className="text-3xl font-medium text-center">{t('readyToSetSailTitle')}</h1>
        <br />
        <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2 mx-auto mt-4 block">
          {t('bookNightButton')}
        </button>
        <br />
        <br />
      </div>
      <DoYouHaveDoubtsCard />
    </>
  );
};
export default FishingTrips;
