import React from 'react';
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
  return (
    <div>
      <div className="Services-page-bg !h-[50svh] md:!h-[100svh]">
        <div className="h-[50svh] md:h-[100svh] flex flex-col justify-center mx-[6%]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Dadi Rent Services
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            Discover, Explore, Taste!
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
              Rental with or without driver
            </h1>

            <p className=" text-base text-[#00000080] text-center px-4 w-[90%] py-3">
              If you love the sea and want to spend moments different from the
              usual, DaDi Rent is the ideal solution for renting boats and
              dinghys in Livorno, whether you are in the company of family or
              friends.
            </p>
            <button className=" self-start ml-[8%] border border-[#CBA557] py-3 px-10 rounded-lg text-[#CBA557]">
              Find out More
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

            <h1 className=" text-3xl font-medium text-[#383838]">Excursions</h1>

            <p className=" text-base text-[#00000080] text-center px-4 w-[90%] py-3">
              We organize guided excursions to help you discover the most
              beautiful and evocative places in the area. From breathtaking
              views to cultural attractions, we offer you an unforgettable and
              informative experience.
            </p>
            <Link
              to="/services/Excursions"
              className=" self-start ml-[8%] border border-[#CBA557] py-3 px-10 rounded-lg text-[#CBA557]"
            >
              <button>Find out More</button>
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
              Fishing Trips
            </h1>

            <p className=" text-base text-[#00000080] text-center px-4 w-[90%] py-3">
              If you are a fishing enthusiast, we offer you the opportunity to
              participate in exciting fishing trips. Take advantage of our local
              knowledge and quality equipment to catch unforgettable fish in the
              waters of Livorno.
            </p>
            <Link
              to="Fishing-Trips"
              className=" self-start ml-[8%] border border-[#CBA557] py-3 px-10 rounded-lg text-[#CBA557]"
            >
              <button>Find out More</button>
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

            <h1 className=" text-3xl font-medium text-[#383838]">Aperitif</h1>

            <p className=" text-base text-[#00000080] text-center px-4 w-[90%] py-3">
              Enjoy a moment of relaxation and conviviality with our aperitifs
              on board our boats. Delicious appetizers and drinks await you
              while you admire the sunset over the sea.
            </p>
            <Link
              to="/Aperitif"
              className=" self-start ml-[8%] border border-[#CBA557] py-3 px-10 rounded-lg text-[#CBA557]"
            >
              <button>Find out More</button>
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
