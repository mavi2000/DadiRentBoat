import React from 'react';
import { useTranslation } from 'react-i18next';
import RentalDriver from '../../assets/Images/RentalDriver.png';
import RentalSkipper from '../../assets/Images/RentalSkipper.png';
import WhereIcon from '../../assets/Images/OurMeans.png';
import Means from '../../assets/Images/RentalSkipper.png';
import MeloriaSocial from '../../assets/Images/meloriaSocial.png';
import { Link } from 'react-router-dom';
import ExcursionCard from '../Excursions/ExcursionCard';

const BoatDinghal = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="Services-page-bg !h-[50svh] md:!h-[100svh]">
          <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
            <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
              {t('boatDinghalTitle')}
            </h1>
            <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
              {t('boatDinghalDescription')}
            </p>
          </div>
        </div>

        <ExcursionCard
          title={t('boatDinghalTitle')}
          description={<p>{t('excursionCardDescription')}</p>}
        />

        <div className="mx-[6%] mt-[5%] mb-[2%]">
          <h1 className="text-3xl font-medium text-[#383838]">
            {t('chooseTheBestRentalTitle')}
          </h1>

          <div className="flex flex-wrap md:flex-nowrap gap-[2%] my-[2%]">
            <div className="px-4 pt-8 pb-20 md:px-7 md:pt-12 md:pb-24 flex flex-col gap-5 shadow-sm rounded-[10px] bg-white md:w-1/2">
              <img
                src={RentalDriver}
                alt="Rental Driver"
                className="w-8 md:w-11"
              />
              <h2 className="text-2xl leading-8 text-[#383838] font-medium">
                {t('rentalWithoutDriverTitle')}
              </h2>
              <p className="font-normal text-base leading-6 text-[#000000] text-opacity-50">
                {t('rentalWithoutDriverDescription')}
              </p>
            </div>

            <div className="px-4 pt-8 pb-20 my-[3%] md:my-[0%] md:px-7 md:pt-12 md:pb-24 flex flex-col gap-5 shadow-sm rounded-[10px] bg-white md:w-1/2">
              <img
                src={RentalSkipper}
                alt="Rental Skipper"
                className="w-8 md:w-11"
              />
              <h2 className="text-2xl leading-8 text-[#383838] font-medium">
                {t('rentalWithSkipperTitle')}
              </h2>
              <p className="font-normal text-base leading-6 text-[#000000] text-opacity-50">
                {t('rentalWithSkipperDescription')}
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to={'/faq'}
              className="md:btn-5 rounded-[10px] bg-[#CBA557] py-3 px-8 my-[5%] text-white"
            >
              {t('clickHereToReadTheFAQ')}
            </Link>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-[1%] my-[2%]">
            <div className="px-4 pt-8 pb-20 md:px-7 md:pt-12 md:pb-10 flex flex-col gap-5 shadow-sm rounded-[5px] bg-white md:w-1/3 items-center">
              <img
                src={WhereIcon}
                alt="Where We Are"
                className="w-8 md:w-14"
              />
              <h2 className="text-2xl leading-8 text-[#CBA557] font-medium font-[jost]">
                {t('whereWeAreTitle')}
              </h2>
              <p className="font-normal text-base leading-6 text-[#383838]">
                {t('whereWeAreDescription')}
              </p>
            </div>

            <div className="px-4 pt-8 pb-20 my-[3%] md:my-[0%] md:px-7 md:pt-12 md:pb-10 flex flex-col gap-5 shadow-sm rounded-[5px] bg-white md:w-1/3 items-center">
              <img src={Means} alt="Our Means" className="w-8 md:w-14" />
              <h2 className="text-2xl leading-8 text-[#CBA557] font-medium font-[jost]">
                {t('ourMeansTitle')}
              </h2>
              <p className="font-normal text-base leading-6 text-[#383838]">
                {t('ourMeansDescription')}
              </p>
            </div>

            <div className="px-4 pt-8 pb-20 my-[3%] md:my-[0%] md:px-7 md:pt-12 md:pb-10 flex flex-col gap-5 shadow-sm rounded-[5px] bg-white md:w-1/3 items-center">
              <img
                src={MeloriaSocial}
                alt="Explore Meloria Shoals"
                className="w-8 md:w-14"
              />
              <h2 className="text-2xl leading-8 text-[#CBA557] font-medium font-[jost]">
                {t('exploreMeloriaShoalsTitle')}
              </h2>
              <p className="font-normal text-base leading-6 text-[#383838]">
                {t('exploreMeloriaShoalsDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoatDinghal;
