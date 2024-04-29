const LeseGereralInformation = () => {
  return (
    <>
      <h1 className="my-12 text-xl font-semibold">
        LESSEE GENERAL INFORMATION:
      </h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-8" />

      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full">
          <label htmlFor="firstName">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastName">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
      <div className="flex flex-col my-8">
        <label htmlFor="lastName">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full md:w-[calc(50%-2rem)]"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full">
          <label htmlFor="birthCity">
            Birth City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="birthCity"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
        <div className="w-full">
          <label htmlFor="birthProvince">
            Birth Province <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="birthProvince"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
      <div className="flex flex-col my-8">
        <label htmlFor="lastName">Tax ID Code</label>
        <input
          type="text"
          className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full md:w-[calc(50%-2rem)]"
        />
        <p className="text-xs text-[#4b465cab]">
          sixteen alphanumeric characters
        </p>
      </div>
      <div className="flex flex-col mb-8 w-full">
        <label htmlFor="lastName">Street Address</label>
        <input
          type="text"
          className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full"
          placeholder="Enter"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-16 mb-8">
        <div className="w-full">
          <label htmlFor="City">City</label>
          <input
            type="text"
            id="City"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
        <div className="w-full">
          <label htmlFor="Province">State / Province</label>
          <input
            type="text"
            id="Province"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 mb-8">
        <div className="w-full">
          <label htmlFor="postalCode">Postal code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
        <div className="w-full">
          <label htmlFor="Country">Country</label>
          <input
            type="text"
            id="Country"
            name="Country"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 mb-8">
        <div className="w-full">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
        <div className="w-full">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
    </>
  );
};
export default LeseGereralInformation;
