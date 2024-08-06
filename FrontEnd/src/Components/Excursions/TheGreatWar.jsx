import React from 'react';
import { Link } from 'react-router-dom';
import BoatCard from './BoatCard';
import DoYouHaveDoubtsCard from './DoYouHaveDoubtsCard';
import ExcursionCard from './ExcursionCard';
import PersonalisedCard from './PersonalisedCard';
import RecommendCard from './RecommendCard';
import { useTranslation } from 'react-i18next';

const TheGreatWar = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="Excursions-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            {t('theGreatWarTitle')}
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            {t('theGreatWarSubtitle')}
          </p>
        </div>
      </div>
      <ExcursionCard
        p1={t('excursionCardP1')}
        p2={t('excursionCardP2')}
        p3={t('excursionCardP3')}
      />
      <br />

      <BoatCard
        title={t('boatCardTitle1')}
        duration={t('boatCardDuration1')}
        description={t('boatCardDescription1')}
      />
      <br />
      <br />
      <hr className="mx-[3%] md:mx-[6%] h-[1px] border-none bg-[#DCDCDC]" />
      <br />
      <div className="mx-[3%] md:mx-[6%]">
        <h1 className="text-3xl font-medium text-center">
          {t('excursionBookingTitle')}
        </h1>
        <br />
        <Link to="/Rates">
          <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2 mx-auto mt-4 block">
            {t('excursionBookingButton')}
          </button>
        </Link>
        <br />
        <br />
      </div>
      <RecommendCard />
      <PersonalisedCard />
      <DoYouHaveDoubtsCard />
    </>
  );
};
export default TheGreatWar;
