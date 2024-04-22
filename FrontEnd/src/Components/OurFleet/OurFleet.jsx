import OurFleetCard from './OurFleetCard';
import QuickSearch from './QuickSearch';

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
      <main className="mx-[3%] md:mx-[6%] mt-12">
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
        <OurFleetCard />
      </main>
    </>
  );
};
export default OurFleet;
