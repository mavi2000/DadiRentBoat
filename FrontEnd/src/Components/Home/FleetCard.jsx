import { RiAnchorLine, RiRulerLine } from 'react-icons/ri';
import fleetCardIcon from '../../assets/Images/fleetCardIcon.png';
import { FaPeopleGroup } from 'react-icons/fa6';
import { HiOutlineIdentification } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const FleetCard = ({
  boatImg,
  title,
  numberOfPersons,
  length,
  power,
  licenseRequired,
  id,

}) => {
  return (
    <div className="bg-white rounded-md p-3 w-full md:w-[350px] shadow-md">
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
            <td className="py-2 text-right">{length} Meters</td>
          </tr>
          <tr className="border-collapse border-y-[1px] border-[#19191923] ">
            <td className="py-2">
              <RiAnchorLine size={25} className="text-[--primary-color]" />
            </td>
            <td className="py-2 px-4 ml-0 mr-auto">Engine Power</td>
            <td className="py-2 text-right">{power}hp</td>
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
          <Link to={`/book-now/${id}`}>
            <button className="text-[var(--primary-color)] text-sm font-normal grow rounded-lg border-[1px] border-[var(--primary-color)] uppercase px-4 py-2">
              Boat PAGE
            </button>
          </Link>
          <Link to={`/check-out/${id}`}>
            <button className="text-white text-sm font-normal bg-[var(--primary-color)] grow rounded-lg border-[1px] border-[var(--primary-color)] uppercase px-4 py-2">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FleetCard;
