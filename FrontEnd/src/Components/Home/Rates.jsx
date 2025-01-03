import React from 'react';
import RatesCard from './RatesCard';

const Rates = () => {
  return (
    <section className="bg-[#F2EFE8] py-12 flex flex-col items-center justify-center my-12 mx-[3%] md:mx-[6%]">
      {/* Header Section */}
      <h1 className="text-[var(--primary-color)] text-base font-semibold">
        view Our
      </h1>
      <h1 className="text-3xl font-medium text-black my-4">Rates</h1>
      <p className="text-base text-[#383838] w-full md:w-[60%] text-center mb-8">
        Some of our main rates to offer for the rental and extra services on board one of our boats or dinghy.
      </p>

      {/* Rates Card Section */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {/* Card 1 */}
        <RatesCard
          title="AperiTuffo"
          rate={30.0}
          label="/person"
          trait1="Panoramic View"
          trait2="Minibar"
          trait3="Book and pay online"
          trait4="Fuel excluded"
        />
        {/* Card 2 */}
        <RatesCard
          title="Full Day"
          rate={200.0}
          label="High Season"
          trait1="Freedom of navigation"
          trait2="Possibility of skipper"
          trait3="Book and pay online"
          trait4="Fuel excluded"
        />
        {/* Card 3 */}
        <RatesCard
          title="Events"
          rate={350.0}
          label="/6 persons"
          trait1="Music and Awning"
          trait2="Minibar"
          trait3="Book and pay online"
          trait4="Fuel excluded"
        />
      </div>
    </section>
  );
};

export default Rates;
