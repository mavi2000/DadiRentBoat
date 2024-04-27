const LeaseDuration = () => {
  return (
    <div>
      <h1 className="mt-16 text-xl font-semibold">DURATION OF THE LEASES</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">
        The Lessee declares that the following crew members are on board the
        chartered vessel:
      </p>
      <div className="flex flex-col my-8">
        <label htmlFor="lastName">
          Start of lease <span className="text-red-500">*</span>
        </label>
        <div>
          <input
            type="date"
            className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full md:w-[calc(50%-2rem)]"
          />
          <input
            type="time"
            className="border-[1px] border-[#DBDADE] mr-8 outline-none mt-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE]"
            placeholder="6:00 PM"
          />
        </div>
      </div>
      <div className="flex flex-col mb-8">
        <label htmlFor="lastName">
          End of lease <span className="text-red-500">*</span>
        </label>
        <div>
          <input
            type="date"
            className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full md:w-[calc(50%-2rem)]"
          />
          <input
            type="time"
            className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE]"
            placeholder="6:00 PM"
          />
        </div>
      </div>
    </div>
  );
};
export default LeaseDuration;
