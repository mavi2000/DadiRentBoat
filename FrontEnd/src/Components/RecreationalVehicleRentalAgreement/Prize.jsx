const Prize = () => {
  return (
    <div>
      <h1 className="mt-16 text-xl font-semibold">PRIZE</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">
        The price includes VAT and stamp duty, if due.
      </p>
      <div className="flex flex-col my-8">
        <label htmlFor="lastName">
          the price of the Lease is € <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full md:w-[calc(50%-2rem)]"
          placeholder="Enter"
        />
      </div>
    </div>
  );
};
export default Prize;
