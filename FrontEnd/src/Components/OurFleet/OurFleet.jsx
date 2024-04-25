import Filters from './Filters';
import OurFleetCard from './OurFleetCard';
import QuickSearch from './QuickSearch';
import boat1 from '../../assets/Images/our-fleet-boat1.webp';
import boat2 from '../../assets/Images/our-fleet-boat2.webp';
import boat3 from '../../assets/Images/our-fleet-boat3.webp';

const OurFleet = () => {
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
              25 <span className="font-normal">Yachts</span>
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
          <OurFleetCard img={boat1} />
          <OurFleetCard img={boat2} />
          <OurFleetCard img={boat3} />
          <OurFleetCard img={boat1} />
        </div>
        <Filters />
      </main>
    </>
  );
};
export default OurFleet;
