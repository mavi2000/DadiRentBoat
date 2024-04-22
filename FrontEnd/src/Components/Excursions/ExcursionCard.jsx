import ExcursionImg from '../../assets/Images/Excursion-img.png';

const ExcursionCard = () => {
  return (
    <section className="mx-[3%] md:mx-[6%] mt-12 flex gap-6 flex-col md:flex-row justify-center items-center">
      <div>
        <h1 className="text-3xl font-medium">Excursion</h1>
        <br />
        <p className="text-[#676767] text-lg">
          By renting our boats or dinghies it is possible to go on excursions to
          the most characteristic places on our coast.
        </p>
        <p className="text-[#676767] text-lg">
          Excursions are not only a moment to enjoy the extraordinary beauty of
          our coast, but also to learn its most curious anecdotes.
        </p>
        <p className="text-[#676767] text-lg">
          Below are our proposed itineraries where the places not to be missed
          are listed.
        </p>
        <br />
        <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
          Book Now
        </button>
      </div>
      <img
        src={ExcursionImg}
        alt="boat"
        className="w-full h-auto md:w-1/2 ml-auto mr-0"
      />
    </section>
  );
};
export default ExcursionCard;
