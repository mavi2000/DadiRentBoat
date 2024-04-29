import logo from '../../assets/Images/logo.png';
import CrewGuestList from './CrewGuestList';
import CurrentChareges from './CurrentChareges';
import LastSection from './LastSection';
import LeaseDuration from './LeaseDuration';
import LeseGereralInformation from './LeseGereralInformation';
import Prize from './Prize';
import SectionBelowTable from './SectionBelowTable';
import Table from './Table';
import TakePhoto from './TakePhoto';
import Verification from './Verification';
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
      <LeseGereralInformation />
      <p className="text-lg mb-12">
        Copy or scan of the Lessee's identity document, with his consent, is
        acquired by the Lessor for the purposes indicated in the attached
        Personal Data Processing Information pursuant to current regulations.
      </p>
      <TakePhoto />
      <CrewGuestList />
      <LeaseDuration />
      <Prize />
      <CurrentChareges />
      <Table />
      <SectionBelowTable />
      <Verification />
      <LastSection />
    </div>
  );
};
export default RecreationalVehicleRentalAgreement;