import { RiAnchorLine, RiRulerLine } from 'react-icons/ri';
import fleetBoat1 from '../../assets/Images/fleetBoat1.png';
import fleetCardIcon from '../../assets/Images/fleetCardIcon.png';
import { FaPeopleGroup } from 'react-icons/fa6';
import { HiOutlineIdentification } from 'react-icons/hi';
const FleetCard = ({
  boatImg,
  title,
  numberOfPersons,
  length,
  power,
  licenseRequired,
}) => {
  return (
    <div className="bg-white rounded p-3 w-full md:w-[350px] ">
      <img src={boatImg} alt="Boat" className="w-full h-56 " />
      <div className="bg-white relative -top-12 ml-8 -mb-12">
        <img src={fleetCardIcon} alt="aim" className="w-12" />
        <h1 className="text-black text-xl font-semibold mt-8">{title}</h1>
        <table className="w-full text-[#1919199e] text-base mt-4">
          <tr className="border-collapse border-y-[1px] border-[#19191923] ">
            <td className="py-2">
              <FaPeopleGroup size={25} className="text-[--primary-color]" />
            </td>
            <td className="py-2 px-4 ml-0 mr-auto">Persons</td>
            <td className="py-2 text-right">{numberOfPersons}</td>
          </tr>
          <tr className="border-collapse border-y-[1px] border-[#19191923] ">
            <td className="py-2">
              <RiRulerLine size={25} className="text-[--primary-color]" />
            </td>
            <td className="py-2 px-4 ml-0 mr-auto">Length</td>
            <td className="py-2 text-right">{length}</td>
          </tr>
          <tr className="border-collapse border-y-[1px] border-[#19191923] ">
            <td className="py-2">
              <RiAnchorLine size={25} className="text-[--primary-color]" />
            </td>
            <td className="py-2 px-4 ml-0 mr-auto">Engine Power</td>
            <td className="py-2 text-right">{power}</td>
          </tr>
          <tr className="border-collapse border-y-[1px] border-[#19191923] ">
            <td className="py-2">
              <HiOutlineIdentification
                size={25}
                className="text-[--primary-color]"
              />
            </td>
            <td className="py-2 px-4 ml-0 mr-auto">License Required</td>
            <td className="py-2 text-right">{licenseRequired}</td>
          </tr>
        </table>
        <div className="w-full mt-12 mb-4 flex gap-4">
          <button className="text-[var(--primary-color)] grow rounded-lg border-[1px] border-[var(--primary-color)]  px-4 py-2">
            Login
          </button>
          <button className="text-white bg-[var(--primary-color)] grow rounded-lg border-[1px] border-[var(--primary-color)]  px-4 py-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default FleetCard;
