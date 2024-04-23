import BoatCard from './BoatCard';
import DoYouHaveDoubtsCard from './DoYouHaveDoubtsCard';
import ExcursionCard from './ExcursionCard';
import PersonalisedCard from './PersonalisedCard';
import RecommendCard from './RecommendCard';

const IntoTheWild = () => {
  return (
    <>
      <div className="Excursions-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Excursions
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            Are you looking for an adventure at sea?
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
        title="Gombo Beach - Ship Tower - Secche della Meloria"
        duration="Full day"
        description="Anyone who loves marine flora and fauna must choose this itinerary.We will take you as a first stop to the Gombo beach, belonging to the estate of the President of the Republic (San Rossore Park), a protected marine area where fish and other living beings are born and grow unchallenged.Afterwards, the snorkelling will continue in the vast area of grotto with variable depths of 3-7 meters between the shallows of the Meloria and the Ship tower.It's impossible not to have a few memorable encounters!(Gombo beach available only weather and concessions permitting)"
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
        <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2 mx-auto mt-4 block">
          Discover Our Price List
        </button>
        <br />
        <br />
      </div>
      <RecommendCard />
      <PersonalisedCard />
      <DoYouHaveDoubtsCard />
    </>
  );
};
export default IntoTheWild;
