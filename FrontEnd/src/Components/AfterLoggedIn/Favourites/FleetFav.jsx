import { useState } from 'react';
import fleetCardIcon from '../../../assets/Images/fleetCardIcon.png';
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { FaPeopleGroup } from 'react-icons/fa6';
import { RiRulerLine, RiAnchorLine } from 'react-icons/ri';
import { HiOutlineIdentification } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const FleetFav = ({
  boatImg,
  title,
  numberOfPersons,
  length,
  power,
  licenseRequired,
}) => {
    const [isLiked, setIsLiked] = useState(true);

    const handleClick = () => {
      setIsLiked(prevState => !prevState);
    };
  
  return (
    <div className="bg-white rounded-md p-3 w-full md:w-[350px] shadow-md">
      <img src={boatImg} alt="Boat" className="w-full h-56" />
      <div className="bg-white relative -top-12 ml-8 -mb-12">
        <div className='flex items-center justify-between w-[98%]'>
          <img src={fleetCardIcon} alt="aim" className="w-12" />
          <button
            className="focus:outline-none"
            onClick={handleClick}
          >
            <span className='text-2xl group'>
              {isLiked ? (
                <IoHeart className="group-hover:text-[#FF6347] focus:text-[#FF6347] text-[#FF6347]" />
              ) : (
                <IoHeartOutline className="group-hover:text-[#FF6347] focus:text-[#FF6347]" />
              )}
            </span>
          </button>
        </div>
        <h1 className="text-[#0D325E] text-xl font-semibold mt-8">{title}</h1>
        <table className="w-full text-[#1919199e] text-base mt-4">
          <tbody>
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
          </tbody>
        </table>
        <div className="w-full mt-12 mb-4 flex gap-4">
          <Link to="/book-now">
            <button className="text-[var(--primary-color)] text-sm font-normal grow rounded-lg border-[1px] border-[var(--primary-color)] uppercase px-4 py-2">
              Boat PAGE
            </button>
          </Link>
          <Link to="/check-out">
            <button className="text-white text-sm font-normal bg-[var(--primary-color)] grow rounded-lg border-[1px] border-[var(--primary-color)] uppercase px-4 py-2">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FleetFav;
