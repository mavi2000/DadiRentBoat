import getinImg from '../../assets/Images/getin.png';
import checkSheild from '../../assets/Images/check-sheild.png';
import safety from '../../assets/Images/safty.png';
import weather from '../../assets/Images/weather.png';

const Precautions = () => {
  return (
    <section className="bg-[var(--navy-blue)] flex flex-col md:flex-row md:px-8">
      <div className="flex flex-col py-12 px-6 md:px-8 border-t-[1px] md:border-l-[1px] border-[var(--primary-color)] relative">
        <img
          src={checkSheild}
          alt="Check"
          className="absolute w-12 h-12 left-[45%] md:-left-6 -top-6 md:top-[50%] "
        />
        <h1 className="text-[var(--primary-color)] text-3xl font-medium">
          Browse Safety
        </h1>

        <p className="text-white text-base my-4">
          It is advisable, before going out to sea with a boat or dinghy, to
          have an idea of everything that needs to be done during navigation, in
          order to avoid problems and sail with serenity.
        </p>
        <button className="flex gap-4 items-center text-[var(--primary-color)]  mt-auto mb-0 text-base font-bold">
          Consult pdf
          <img src={getinImg} alt="get in" className="w-6 h-5" />
        </button>
      </div>
      <div className="flex flex-col  py-12 px-6 md:px-8 border-t-[1px] md:border-l-[1px] border-[var(--primary-color)] relative">
        <img
          src={safety}
          alt="Check"
          className="absolute w-12 h-12 left-[45%] md:-left-6 -top-6 md:top-[50%] "
        />
        <h1 className="text-[var(--primary-color)] text-3xl font-medium">
          Safety of our customer is our priority
        </h1>

        <p className="text-white text-base my-4">
          All boats are equipped with a satellite GPS system to ensure a very
          high standard of safety for our customers In each boat there is a new
          satellite system that allows us to always know the exact position of
          the boat. In case of need, we always know where you are to reach you!
        </p>
        <button className="flex gap-4 items-center text-[var(--primary-color)]  mt-auto mb-0 text-base font-bold">
          View More
          <img src={getinImg} alt="get in" className="w-6 h-5" />
        </button>
      </div>
      <div className="flex flex-col py-12 px-6 md:px-8 border-t-[1px] md:border-l-[1px] border-[var(--primary-color)] relative">
        <img
          src={weather}
          alt="Check"
          className="absolute w-12 h-12 left-[45%] md:-left-6 -top-6 md:top-[50%] "
        />
        <h1 className="text-[var(--primary-color)] text-3xl font-medium">
          Weather - Sea and Wind
        </h1>

        <p className="text-white text-base my-4">
          Before going out on a boat, it is a good idea to check the weather
          forecast and check the on-board equipment and fuel. When sailing, it
          is good to pay attention to the weather conditions, which can change
          quickly in summer.
        </p>
        <button className="flex gap-4 items-center text-[var(--primary-color)] mt-auto mb-0 text-base font-bold">
          Check Weather
          <img src={getinImg} alt="get in" className="w-6 h-5" />
        </button>
      </div>
    </section>
  );
};
export default Precautions;
