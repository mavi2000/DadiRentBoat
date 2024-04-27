import logo from '../assets/Images/logo.png';
const RecreationalVehicleRentalAgreement = () => {
  return (
    <div className="bg-white px-[3%] md:px-[6%] py-8 text-[#4B465C]">
      <img src={logo} alt="logo" className="size-[150px] mx-auto" />
      <h1 className="text-center font-semibold text-2xl mt-12 uppercase ">
        PLEASURE VESSEL RENTAL AGREEMENT
      </h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-8" />
      <p className="text-lg mb-12">
        With this rental contract, the Lessee requests the company DaDi Rent
        Srls (lessor) to rent the Recreational Vessel to him , under the
        following conditions:
      </p>
      <p>
        TYPE OF BOAT <span className="text-red-500">*</span>
      </p>
      <p className="bg-[#F5F5F5] text-[#4B465C] border-[1px] border-[#DBDADE] w-full md:w-3/5 my-3 px-4 py-3 rounded-md">
        Annina - open seaghost 550
      </p>
      <p className="text-xs">Indicare il mezzo scelto per il noleggio</p>
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
            type="firstName"
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
            type="lastName"
            id="lastName"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full">
          <label htmlFor="birthCity">
            Birth City <span className="text-red-500">*</span>
          </label>
          <input
            type="birthCity"
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
            type="birthProvince"
            id="birthProvince"
            className="border-[1px] border-[#DBDADE] w-full outline-none my-3 px-4 py-3 rounded-md"
            placeholder="Enter"
          />
        </div>
      </div>
    </div>
  );
};
export default RecreationalVehicleRentalAgreement;
