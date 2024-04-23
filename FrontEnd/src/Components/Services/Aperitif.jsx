import ExcursionCard from '../Excursions/ExcursionCard';
import DoYouHaveDoubtsCard from '../Excursions/DoYouHaveDoubtsCard';
import manWithStick from '../../assets/Images/man-with-stick.webp';
import { Link } from 'react-router-dom';

const Aperitif = () => {
  return (
    <>
      <div className="Excursions-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Aperitif
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            Boat and Dinghy Rental with Aperitif on Board: <br /> Explore the
            Sea and Taste the Flavors
          </p>
        </div>
      </div>

      <ExcursionCard
        title="Aperitif"
        description={
          <>
            <p>
              Are you looking for an original idea for your aperitif? Treat
              yourself to an exclusive aperitif in a dinghy.
            </p>
            <p>
              DaDi Rent offers the possibility of having an aperitif in a unique
              and evocative location.{' '}
            </p>
            <p>
              Once you have dropped anchor we will provide you with a plentiful
              and complete aperitif based on the freshest first choice typical
              products.
            </p>
            <p>
              The colors of the sunset on the Livorno seafront will provide the
              backdrop.
            </p>
          </>
        }
      />
      <br />
      <br />
      <section className="mx-[3%] md:mx-[6%] mt-12 flex gap-6 flex-col md:flex-row justify-center items-center">
        <img
          src={manWithStick}
          alt="boat"
          className="w-full rounded h-auto md:w-1/2 ml-auto mr-0"
        />
        <div>
          <h1 className="text-3xl font-medium">Enjoy an aperitif at sea</h1>
          <br />

          <p className="text-[#676767] text-lg">
            Enjoy an aperitif at sea with us! You're always the first at Happy
            Hour and you've had aperitifs in all the trendiest clubs on the
            Riviera. Have you ever tried our aperitifs on the boat?
          </p>
          <p className="text-[#676767] text-lg">
            Aperitifs on boats have always been our strong point, we were the
            first to offer them and today it is the activity that everyone
            associates with the name DaDi Rent. A stop for diving along the
            coast of Calafuria, the spectacle of a romantic and unforgettable
            sunset, all this accompanied by good music and enjoying bubbles with
            delicious snacks in the company of friends. And don't forget to
            include a visit to the Meloria Park to make the experience even more
            complete!
          </p>
          <br />
          <Link to="/check-out">
            <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
              Book Now
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-[#CBA5574D] mt-12 py-12 px-[3%] md:px-[6%]">
        <h1 className="text-3xl text-[#383838] font-medium mb-4 uppercase">
          APERITIF ON THE BOAT
        </h1>
        <p className="text-lg text-[#383838]">
          In addition to being a pleasant temptation, the aperitif has today
          become a real ritual. In the bars in the centre, on the beach or by
          the pool it doesn't matter, the aperitif is an event that no one wants
          to miss out on anymore. So why not try an unforgettable location?
          Bubbles and appetizers while enjoying the sunset in the open sea.
          Trust me, to understand what we're talking about you need to try it!
        </p>
        <br />
        <p className="text-lg text-[#383838]">
          The right dress code for an aperitif at sea? Whatever you prefer,
          elegant, casual or in costume and sarong.
        </p>
        <br />
        <br />
        <Link to="/check-out">
          <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
            Book Now
          </button>
        </Link>
      </section>
      <DoYouHaveDoubtsCard />
    </>
  );
};
export default Aperitif;
