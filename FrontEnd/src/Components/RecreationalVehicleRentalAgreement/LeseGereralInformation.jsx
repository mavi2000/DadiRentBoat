const LeseGereralInformation = ({ data, setData }) => {
  const handleChange = (e) => {
    setData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
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
            name="firstName"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
            onChange={handleChange}
            value={data.firstName}
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastName">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
            value={data.lastName}
          />
        </div>
      </div>
      <div className="flex flex-col my-8">
        <label htmlFor="dob">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="dob" name="dob"
          format="MM/dd/yy"
          onChange={handleChange}
          value={data.dob}
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
            name="birthCity"
            onChange={handleChange}
            value={data.birthCity}
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
            name="birthProvince"
            onChange={handleChange}
            value={data.birthProvince}
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
      <div className="flex flex-col my-8">
        <label htmlFor="taxId">Tax ID Code</label>
        <input
          type="text"
          onChange={handleChange}
          id="taxId" name="taxId" value={data.taxId}
          className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full md:w-[calc(50%-2rem)]"
        />
        <p className="text-xs text-[#4b465cab]">
          sixteen alphanumeric characters
        </p>
      </div>
      <div className="flex flex-col mb-8 w-full">
        <label htmlFor="address">Street Address</label>
        <input
          type="text"
          onChange={handleChange}
          id="address" name="address" value={data.address}
          className="border-[1px] border-[#DBDADE] mr-8 outline-none my-3 px-4 py-3 rounded-md placeholder:text-[#DBDADE] w-full"
          placeholder="Enter"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-16 mb-8">
        <div className="w-full">
          <label htmlFor="city">City</label>
          <input
            type="text"
            onChange={handleChange}
            id="city" name="city" value={data.city}
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
        <div className="w-full">
          <label htmlFor="state">State / Province</label>
          <input
            type="text"
            onChange={handleChange}
            id="state" name="state" value={data.state}
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 mb-8">
        <div className="w-full">
          <label htmlFor="zip">Postal code</label>
          <input
            type="text"
            id="zip"
            onChange={handleChange}
            name="zip" value={data.zip}
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
        <div className="w-full">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            onChange={handleChange}
            name="country"
            value={data.country}
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
            onChange={handleChange}
            value={data.phone}
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
    </>
  );
};
export default LeseGereralInformation;
