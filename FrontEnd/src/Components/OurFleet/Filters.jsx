import { TbWheel } from 'react-icons/tb';

const Filters = () => {
  return (
    <aside className="shadow-xl h-fit grow bg-white pb-6 mb-12">
      <h1 className="text-2xl font-medium p-6 mb-6 flex gap-2 items-center border-b-[1px] border-[#F5F5F5]">
        <TbWheel size={36} className="text-[var(--primary-color)]" />
        Boat Type
      </h1>

      <div className="flex flex-col gap-3 p-6 pt-3 text-[#676767] text-sm">
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="boatType"
            id="boatType"
            className="w-4 h-4 accent-[var(--primary-color)]"
          />
          <label htmlFor="boatType">Boats</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="boatType"
            id="boatType"
            className="w-4 h-4 accent-[var(--primary-color)]"
          />
          <label htmlFor="boatType">Dinghies</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="boatType"
            id="boatType"
            className="w-4 h-4 accent-[var(--primary-color)]"
          />
          <label htmlFor="boatType">Drive Boat License</label>
        </div>
      </div>

      <br />

      <h1 className="text-2xl font-medium p-6 mb-6 flex gap-2 items-center border-b-[1px] border-[#F5F5F5]">
        <TbWheel size={36} className="text-[var(--primary-color)]" />
        Price Range
      </h1>

      <div className="relative w-[calc(100%-5rem)] h-[4px] bg-[var(--primary-color)] mx-8 mt-8 mb-4">
        <p className="absolute -left-3 -top-1 w-3 h-3 rounded-full border-2 border-[var(--primary-color)]"></p>
        <p className="absolute -right-3 -top-1 w-3 h-3 rounded-full border-2 border-[var(--primary-color)]"></p>
      </div>
      <p className="text-[#191919] text-xl px-6 pb-6">$95 - $161</p>
      <br />
      <h1 className="text-2xl font-medium p-6 mb-6 flex gap-2 items-center border-b-[1px] border-[#F5F5F5]">
        <TbWheel size={36} className="text-[var(--primary-color)]" />
        Length
      </h1>

      <div className="relative w-[calc(100%-5rem)] h-[4px] bg-[var(--primary-color)] mx-8 mt-8 mb-4">
        <p className="absolute -left-3 -top-1 w-3 h-3 rounded-full border-2 border-[var(--primary-color)]"></p>
        <p className="absolute -right-3 -top-1 w-3 h-3 rounded-full border-2 border-[var(--primary-color)]"></p>
      </div>
      <p className="text-[#191919] text-xl px-6 pb-6">5 meter - 15 meter</p>

      <br />
      <h1 className="text-2xl font-medium p-6 mb-6 flex gap-2 items-center border-b-[1px] border-[#F5F5F5]">
        <TbWheel size={36} className="text-[var(--primary-color)]" />
        Engine
      </h1>

      <div className="relative w-[calc(100%-5rem)] h-[4px] bg-[var(--primary-color)] mx-8 mt-8 mb-4">
        <p className="absolute -left-3 -top-1 w-3 h-3 rounded-full border-2 border-[var(--primary-color)]"></p>
        <p className="absolute -right-3 -top-1 w-3 h-3 rounded-full border-2 border-[var(--primary-color)]"></p>
      </div>
      <p className="text-[#191919] text-xl px-6 pb-6">40 hp - 60 hp</p>

      <br />
      <h1 className="text-2xl font-medium p-6 mb-6 flex gap-2 items-center border-b-[1px] border-[#F5F5F5]">
        <TbWheel size={36} className="text-[var(--primary-color)]" />
        Accessories
      </h1>
      <div className="flex flex-col gap-3 p-6 pt-3 text-[#676767] text-sm">
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="Accessories"
            id="Accessories"
            className="w-4 h-4 accent-[var(--primary-color)]"
          />
          <label htmlFor="Accessories">Awning</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="Accessories"
            id="Accessories"
            className="w-4 h-4 accent-[var(--primary-color)]"
          />
          <label htmlFor="Accessories">Sundeck</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="Accessories"
            id="Accessories"
            className="w-4 h-4 accent-[var(--primary-color)]"
          />
          <label htmlFor="Accessories">Deck shower</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="Accessories"
            id="Accessories"
            className="w-4 h-4 accent-[var(--primary-color)]"
          />
          <label htmlFor="Accessories">DVD Player</label>
        </div>
      </div>

      <br />
      <h1 className="text-2xl font-medium p-6 mb-6 flex gap-2 items-center border-b-[1px] border-[#F5F5F5]">
        <TbWheel size={36} className="text-[var(--primary-color)]" />
        Destination
      </h1>
      <div className="flex flex-col gap-3 p-6 pt-3 text-[#676767] text-sm">
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="Accessories"
            id="Accessories"
            className="w-4 h-4 accent-[var(--primary-color)]"
          />
          <label htmlFor="Accessories">
            Meloria Shoals Marine Protected Area
          </label>
        </div>
      </div>
    </aside>
  );
};
export default Filters;
