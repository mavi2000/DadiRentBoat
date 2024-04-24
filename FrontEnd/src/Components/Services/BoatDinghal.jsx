import React from 'react';
import ExcursionImg from '../../assets/Images/Excursion-img.png';
import ReuseCard from './ReuseCard';
import RentalDriver from '../../assets/Images/RentalDriver.png';
import RentalSkipper from '../../assets/Images/RentalSkipper.png';
import WhereIcon from '../../assets/Images/OurMeans.png';
import Means from '../../assets/Images/RentalSkipper.png';
import MeloriaSocial from '../../assets/Images/meloriaSocial.png';
import { Link } from 'react-router-dom';
import ExcursionCard from '../Excursions/ExcursionCard';

const BoatDinghal = () => {
  return (
    <>
      <div>
        <div className="Services-page-bg !h-[50svh] md:!h-[100svh]">
          <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
            <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
              Boat and Dinghy Rental
            </h1>
            <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
              The best boat and dinghy rental service in Livorno
            </p>
          </div>
        </div>

        <ExcursionCard
          title="Boat and dinghy rental for professionals and beginners"
          description={
            <p>
              For those who are having their  first experience driving a boat ,
              but would like to try sailing the sea with one of our boats,  we
              will support qualified personnel  for a quick lesson lasting
              approximately 20/25 minutes at the mooring dock. In this way we
              have the opportunity to  explain the main navigation  and mooring
              maneuvers to guarantee a safe exit, in complete relaxation.
            </p>
          }
        />

        <div className="mx-[6%] mt-[5%] mb-[2%]">
          <h1 className="text-3xl font-medium text-[#383838]">
            Choose the rental that is best for you
          </h1>

          <div className="flex flex-wrap md:flex-nowrap gap-[2%] my-[2%]">
            <div className="px-4 pt-8 pb-20 md:px-7 md:pt-12 md:pb-24 flex flex-col gap-5 shadow-sm rounded-[10px] bg-white md:w-1/2">
              <img
                src={RentalDriver}
                alt="Rental Driver"
                className=" w-8 md:w-11"
              />
              <h2 className=" text-2xl leading-8 text-[#383838] font-medium">
                Rental without driver
              </h2>
              <p className=" font-normal text-base leading-6 text-[#000000] text-opacity-50">
                If you are looking for an adventure at sea, renting a dinghy is
                for you. Seven kilometers of uncontaminated coastline which
                hides caves and small bays of unparalleled beauty between
                beaches and cliffs.
              </p>
            </div>

            <div className="px-4 pt-8 pb-20 my-[3%] md:my-[0%] md:px-7 md:pt-12 md:pb-24 flex flex-col gap-5 shadow-sm rounded-[10px] bg-white md:w-1/2">
              <img
                src={RentalSkipper}
                alt="Rental Skipper"
                className=" w-8 md:w-11"
              />
              <h2 className=" text-2xl leading-8 text-[#383838] font-medium">
                Rental with skipper on board
              </h2>
              <p className=" font-normal text-base leading-6 text-[#000000] text-opacity-50">
                Do you want to experience the freedom and autonomy of a day on a
                dinghy but without having to worry about navigation rules,
                anchoring or the route? Do you want to just think about having
                fun without the slightest worry? So choose our "Rental with
                driver" formula.
                <br />
                Our skipper will take care of everything, the only thing left
                for you to do is relax and enjoy a memorable day on the{' '}
                <span className=" font-medium underline">Read More.</span>
              </p>
            </div>
          </div>

          <div className=" flex justify-center">
            <Link
              to={'/faq'}
              className="md:btn-5 rounded-[10px] bg-[#CBA557] py-3 px-8 my-[5%] text-white"
            >
              Click Here To Read The FAQ
            </Link>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-[1%] my-[2%]">
            <div className="px-4 pt-8 pb-20 md:px-7 md:pt-12 md:pb-10 flex flex-col gap-5 shadow-sm rounded-[5px] bg-white md:w-1/3 items-center">
              <img
                src={WhereIcon}
                alt="Rental Driver"
                className=" w-8 md:w-14"
              />
              <h2 className=" text-2xl leading-8 text-[#CBA557] font-medium font-[jost]">
                Where we are
              </h2>
              <p className=" font-normal text-base leading-6 text-[#383838]">
                You can find us at Bagni Pancaldi Acquaviva, in Viale Italia 62,
                in the heart of Livorno's seafront. It borders the Terrazza
                Mascagni, offering breathtaking scenery of the Tuscan islands
                and Corsica. In front of us, the Meloria Park extends, one of
                the closest points, further enriching the beauty of the
                surrounding panorama. An elegant and regenerating place with
                impeccable services and an enchanting view of the sea.
              </p>
            </div>

            <div className="px-4 pt-8 pb-20 my-[3%] md:my-[0%] md:px-7 md:pt-12 md:pb-10 flex flex-col gap-5 shadow-sm rounded-[5px] bg-white md:w-1/3 items-center">
              <img src={Means} alt="Rental Skipper" className=" w-8 md:w-14" />
              <h2 className=" text-2xl leading-8 text-[#CBA557] font-medium font-[jost]">
                Our Means
              </h2>
              <p className=" font-normal text-base leading-6 text-[#383838]">
                Rental boats also have all the equipment required by law. They
                do not require any license, you just need to be 18 years old.
                Our pleasure craft are authorized to navigate within 3 miles of
                the coast of Livorno (almost 5 km).
              </p>
            </div>

            <div className="px-4 pt-8 pb-20 my-[3%] md:my-[0%] md:px-7 md:pt-12 md:pb-10 flex flex-col gap-5 shadow-sm rounded-[5px] bg-white md:w-1/3 items-center">
              <img
                src={MeloriaSocial}
                alt="Rental Skipper"
                className=" w-8 md:w-14"
              />
              <h2 className=" text-2xl leading-8 text-[#CBA557] font-medium font-[jost]">
                Explore the Meloria Shoals
              </h2>
              <p className=" font-normal text-base leading-6 text-[#383838]">
                We confirm that our vehicles are authorized for activity in the
                Secche della Meloria, a vast outcropping cliff located 3 miles
                from the coast of Livorno. This area, covering approximately 40
                square kilometers, offers a variety of unique underwater
                landscapes. Exploring the Secche della Meloria is an exciting
                and responsible experience, respecting the marine environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoatDinghal;
