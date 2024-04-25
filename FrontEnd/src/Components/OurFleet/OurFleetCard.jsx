import { FaLocationDot, FaPersonMilitaryRifle } from 'react-icons/fa6';
import { GoHeart } from 'react-icons/go';
import { HiOutlineIdentification } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { PiRuler } from 'react-icons/pi';
import { RiAnchorLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const OurFleetCard = ({ loction, boatName, img, totalPersons, rate }) => {
  return (
    <section className="mb-12 flex flex-col md:flex-row items-stretch">
      <img src={img} alt="boat" className="w-ull md:w-3/5 h-auto rounded-lg " />
      <div className="rounded-lg shadow-xl p-4 pt-6 bg-white flex grow flex-col justify-evenly mx-8 md:mx-0 -mt-12 md:-ml-12 md:my-8">
        <div className="flex gap-3 items-center justify-between">
          <p className="text-[#00000080] text-xs flex gap-2 items-center mb-4">
            <FaLocationDot size={20} className="text-[#00000049]" /> PRAIA DE
            LEÇA DA PALMEIRA
          </p>
          <button>
            <GoHeart className="text-[var(--primary-color)]" size={25} />
          </button>
        </div>
        <h1 className="text-xl font-semibold">Bavaria 50 Cruiser</h1>
        <p className="text-[#676767] text-xs pt-2">
          <span>288'9 / 88m </span> &nbsp; <span> Perini Navi </span>&nbsp;
          <span>2006 / 2023</span>
        </p>
        <div className="flex gap-4 flex-wrap items-center mt-4">
          <p className="text-[#676767] text-sm flex items-center gap-1">
            <IoIosPeople className="text-[var(--primary-color)]" size={22} /> 6
          </p>
          <p className="text-[#676767] text-sm flex items-center gap-1">
            <PiRuler className="text-[var(--primary-color)]" size={20} />
            5.5 meter
          </p>
          <p className="text-[#676767] text-sm flex items-center gap-1">
            <RiAnchorLine size={20} className="text-[--primary-color]" />
            40 hp
          </p>
          <p className="text-[#676767] text-sm flex items-center gap-1">
            <FaPersonMilitaryRifle
              size={18}
              className="text-[--primary-color]"
            />
            Skipper
          </p>
        </div>
        <p className="text-[#00000080] mt-4 text-sm flex items-center gap-1">
          <HiOutlineIdentification
            size={20}
            className="text-[--primary-color] opacity-1"
          />
          License is not required
        </p>
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-between md:items-center">
          <p className="text-[#676767]">
            Starting from
            <span className="text-[--primary-color] font-medium text-xl ml-2">
              $114.00
            </span>
          </p>
          <Link to="/book-now">
            <button className="text-white w-full bg-[var(--primary-color)] rounded-lg border-[1px] border-[var(--primary-color)] font-bold text-sm px-4 py-3">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default OurFleetCard;
