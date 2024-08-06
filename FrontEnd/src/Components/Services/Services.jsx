import React from 'react';
import { useTranslation } from 'react-i18next';
import Boat1 from '../../assets/Images/Services-boat-1.webp';
import Boat2 from '../../assets/Images/Services-boat-2.webp';
import Boat3 from '../../assets/Images/Services-boat-3.webp';
import Boat4 from '../../assets/Images/Services-boat-4.webp';
import rentIcon from '../../assets/Images/rent.png';
import fishingIcon from '../../assets/Images/Fishing.png';
import excursions from '../../assets/Images/excursions.png';
import aperitif from '../../assets/Images/aperitif.png';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="Services-page-bg !h-[50svh] md:!h-[100svh]">
        <div className="h-[50svh] md:h-[100svh] flex flex-col justify-center mx-[6%]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            {t('dadiRentServices')}
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            {t('discoverExploreTaste')}
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-[2%] mb-[5%] mx-[6%]">
        <section className="flex flex-col-reverse md:flex-row mt-[4%]">
          <img
            src={Boat1}
            alt="man With Stick"
            className="w-full md:w-[50%] md:-mr-16 z-10"
          />
          <div className="bg-white z-10 w-full flex items-center gap-4 flex-col justify-center pb-8 self-end rounded-xl mt-5">
            <img
              src={rentIcon}
              alt="phone"
              className="w-20 ml-0 mt-0 mr-auto mb-[5%]"
            />

            <h1 className=" text-3xl font-medium text-[#383838]">
              {t('rentalWithOrWithoutDriver')}
            </h1>

            <p className=" text-base text-[#00000080] text-center px-4 w-[90%] py-3">
              {t('rentalDescription')}
            </p>
            <button className=" self-start ml-[8%] border border-[#CBA557] py-3 px-10 rounded-lg text-[#CBA557]">
              {t('findOutMore')}
            </button>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row mt-[4%]">
          <div className="bg-white z-10 w-full flex items-center gap-4 flex-col justify-center pb-8 self-end rounded-xl mt-5">
            <img
              src={excursions}
              alt="phone"
              className="w-20 mr-0 mt-0 ml-auto mb-[5%]"
            />

            <h1 className=" text-3xl font-medium text-[#383838]">
              {t('excursions')}
            </h1>

            <p className=" text-base text-[#00000080] text-center px-4 w-[90%] py-3">
              {t('excursionsDescription')}
            </p>
            <Link
              to="/services/Excursions"
              className=" self-start ml-[8%] border border-[#CBA557] py-3 px-10 rounded-lg text-[#CBA557]"
            >
              <button>{t('findOutMore')}</button>
            </Link>
          </div>
          <img
            src={Boat2}
            alt="man With Stick"
            className="w-full md:w-[50%] md:-ml-16"
          />
        </section>

        <section className="flex flex-col-reverse md:flex-row mt-[4%]">
          <img
            src={Boat3}
            alt="man With Stick"
            className="w-full md:w-[50%] md:-mr-16 z-10"
          />
          <div className="bg-white z-10 w-full flex items-center gap-4 flex-col justify-center pb-8 self-end rounded-xl mt-5">
            <img
              src={fishingIcon}
              alt="phone"
              className="w-20 ml-0 mt-0 mr-auto mb-[5%]"
            />

            <h1 className=" text-3xl font-medium text-[#383838]">
              {t('fishingTrips')}
            </h1>

            <p className=" text-base text-[#00000080] text-center px-4 w-[90%] py-3">
              {t('fishingTripsDescription')}
            </p>
            <Link
              to="Fishing-Trips"
              className=" self-start ml-[8%] border border-[#CBA557] py-3 px-10 rounded-lg text-[#CBA557]"
            >
              <button>{t('findOutMore')}</button>
            </Link>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row mt-[4%]">
          <div className="bg-white z-10 w-full flex items-center gap-4 flex-col justify-center pb-8 self-end rounded-xl mt-5">
            <img
              src={aperitif}
              alt="phone"
              className="w-20 mr-0 mt-0 ml-auto mb-[5%]"
            />

            <h1 className=" text-3xl font-medium text-[#383838]">
              {t('aperitif')}
            </h1>

            <p className=" text-base text-[#00000080] text-center px-4 w-[90%] py-3">
              {t('aperitifDescription')}
            </p>
            <Link
              to="/services/Aperitif"
              className=" self-start ml-[8%] border border-[#CBA557] py-3 px-10 rounded-lg text-[#CBA557]"
            >
              <button>{t('findOutMore')}</button>
            </Link>
          </div>
          <img
            src={Boat4}
            alt="man With Stick"
            className="w-full md:w-[50%] md:-ml-16"
          />
        </section>
      </div>
    </div>
  );
};

export default Services;
