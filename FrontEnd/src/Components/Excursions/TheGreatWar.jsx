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
          Excursions
        </h1>
        <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
          Explore Livorno surroundings in the open sea
        </p>
      </div>
    </div>
    <ExcursionCard
      p1="By renting our dinghies it is possible to go on excursions to the most characteristic places on our coast."
      p2="Excursions are not only a moment to enjoy the extraordinary beauty of our coast, but also to learn its most curious anecdotes."
      p3="Below are our proposed itineraries where the places not to be missed are listed."
    />
    <br />


      <BoatCard
        title="Ship Tower- Secche della Meloria- Mugle- Sonnino"
        duration=" Full Day"
        description="Fun, sea, sun, summer... but also a bit of history !In the past, our beloved sea has also been the scene of battles and wars; for this reason we at Dadi Rent have organized this route, able to take you back in time.The tower of the Ship and the shallows of Meloria... the history of our sea!"
      />
      <br />
      <br />
      <hr className="mx-[3%] md:mx-[6%] h-[1px] border-none bg-[#DCDCDC]" />
      <br />
      <div className="mx-[3%] md:mx-[6%]">
        <h1 className="text-3xl font-medium text-center">
          Do you want to book your excursion?
        </h1>
        <br />
        <Link to="/Rates">
          <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2 mx-auto mt-4 block">
            Discover Our Price List
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
