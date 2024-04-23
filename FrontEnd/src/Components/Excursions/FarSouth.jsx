import BoatCard from './BoatCard';
import DoYouHaveDoubtsCard from './DoYouHaveDoubtsCard';
import ExcursionCard from './ExcursionCard';
import PersonalisedCard from './PersonalisedCard';
import RecommendCard from './RecommendCard';

const FarSouth = () => {
  return (
    <>
      <div className="fleet-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Excursions
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            Explore Livorno surroundings in the open sea
          </p>
        </div>
      </div>
      <ExcursionCard />
      <br />

      <BoatCard />
      <br />
      <br />
      <hr className="mx-[3%] md:mx-[6%] h-[1px] border-none bg-[#DCDCDC]" />
      <br />
      <div className="mx-[3%] md:mx-[6%]">
        <h1 className="text-3xl font-medium text-center">
          Do you want to book your excursion?
        </h1>
        <br />
        <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2 mx-auto mt-4 block">
          Discover Our Price List
        </button>
        <br />
      </div>
      <RecommendCard />
      <PersonalisedCard />
      <DoYouHaveDoubtsCard />
    </>
  );
};
export default FarSouth;
