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
          Fishing Trips
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
          Discover the thrill of fishing trips with us!
          </p>
        </div>
      </div>

      <ExcursionCard
        title="Fishing Trips"
        img={manWithStick}
        description={
          <>
            <p>Would you like to go on a boat and fish? Then you are in the right place for you. We at DaDi Rent organize fishing trips throughout the year.</p>
            <ul className="pl-8 list-disc">
              <li>You can plan outings with your friends on our rental dinghy with or without a skypper.</li>
              <li>
               You can take part in our excursions that we organize periodically, with the opportunity to make new friends.</li>
            </ul>
          </>
        }
      />
      <br />
      <br />
      <br />
      <br />
      <div className="mx-[3%] md:mx-[6%]">
        <h1 className="text-3xl font-medium text-center">Ready To set Sail?</h1>
        <br />
        <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2 mx-auto mt-4 block">
          Also Book A Night
        </button>
        <br />
        <br />
      </div>
      <DoYouHaveDoubtsCard />
    </>
  );
};
export default FishingTrips;
