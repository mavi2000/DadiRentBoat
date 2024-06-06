// OurFleet.jsx
import React, { useContext, useEffect, useState } from "react";
import Filters from './Filters';
import OurFleetCard from './OurFleetCard';
import QuickSearch from './QuickSearch';
import { UserContext } from "../../../Context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const OurFleet = () => {
  const { fetchBoatDetails } = useContext(UserContext);
  const [boatDetails, setBoatDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBoatDetails = async () => {
      try {
        const details = await fetchBoatDetails();
        setBoatDetails(details);
      } catch (error) {
        setError(error.message || "Error loading boat details");
      }
    };

    getBoatDetails();
  }, [fetchBoatDetails]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!boatDetails.length) {
    return <div>Loading...</div>;
  }

  console.log("boatDetails", boatDetails);

  return (
    <>
      <div className="fleet-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Our Fleet
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            Discover all our vehicles
          </p>
        </div>
      </div>
      <QuickSearch />
      <main className="mx-[3%] md:mx-[6%] mt-12 flex flex-col-reverse md:flex-row gap-12">
        <div>
          <div className="flex gap-2 justify-between items-center border-b-[1px] bordr-[#F5F5F5] mb-8 pb-6">
            <h2 className="text-[#676767] text-base font-semibold">
              {boatDetails.length} <span className="font-normal">Yachts</span>
            </h2>
            <div className="text-[#676767] text-base font-normal">
              Sort by&nbsp;&nbsp;&nbsp;
              <select
                name="sortBy"
                id="sortBy"
                className="outline-none border-[1px] rounded bg-transparent p-2 "
              >
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
          {boatDetails.map((boat, index) => (
            <OurFleetCard
              key={index}
              img={boat.boatImages[0]?.avatar || 'default_image_path'}
              boatName={boat.boat.title}
              totalPersons={boat.boat.boardingCapacity}
              length={boat.boat.lengthMeters}
              power={boat.boat.totalEnginePowerHP}
              licenseRequired={boat.boat.licenseRequired}
              location={boat.boat.region}
            />
          ))}
        </div>
        <Filters />
      </main>
      <ToastContainer />
    </>
  );
};

export default OurFleet;
