import { Link } from 'react-router-dom';
import BoatCard from './BoatCard';
import DoYouHaveDoubtsCard from './DoYouHaveDoubtsCard';
import ExcursionCard from './ExcursionCard';
import PersonalisedCard from './PersonalisedCard';
import RecommendCard from './RecommendCard';

const StandardPlus = () => {
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
        active={2}
        title="Shoals of Meloria-Boccale-Sonnino (standard plus addition of Castiglioncello)"
        duration="Standard 1/2 day standard plus full day"
        description={`Experience a day at Livornese DOC! This route manages, in its simplicity, to enclose the essence of the sea... as we live it!`}
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
export default StandardPlus;
