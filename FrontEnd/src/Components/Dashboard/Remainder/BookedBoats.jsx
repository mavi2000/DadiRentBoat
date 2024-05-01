import React,{useState} from 'react'
import RemainderNavbar from './RemainderNavbar'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSwap } from "react-icons/io";
import BoatType from '../../../assets/Images/BoatType.png'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineAttachEmail } from "react-icons/md";
import Pagination from '../Pagination/Pagination';
import Boat from '../../../assets/Images/our-fleet-boat1.webp'
import { TiArrowSortedUp } from "react-icons/ti";

const BookedBoats = () => {
    const [infoBoxes, setInfoBoxes] = useState({});
    const [infoContent, setInfoContent] = useState("");

    const handleMouseEnter = (id, content) => {
        setInfoBoxes((prevState) => ({
          ...prevState,
          [id]: true,
        }));
        setInfoContent(content);
      };
      
      const handleMouseLeave = (id) => {
        setInfoBoxes((prevState) => ({
          ...prevState,
          [id]: false,
        }));
      };
  return (
<>
    <RemainderNavbar/>
    <div className='mx-[3%] md:mx-[1%] mt-[3%]'>
        
        <div className=' flex justify-between'>
          <h1 className=' text-lg font-medium text-[#4B465C]'>Booked Boats</h1>
          <button className=' px-[30px] py-[14px] rounded-[10px] border border-[#DBDADE] text-[#4B465C] font-normal text-sm'>Add new booking</button>
          
        </div>

        <div className=' flex justify-between mt-[2%] md:gap-6'>
        <div className='flex gap-2 items-center py-2 pl-3 pr-4 bg-[#ffff] w-[35%] rounded-xl border border-[#DBDADE] md:flex-grow'>
          <IoSearchOutline className='text-gray-500' />
          <input
            type="text"
            placeholder='Search'
            className='bg-transparent outline-none focus:ring-0 w-full'
          />
    </div>

    <div className='flex gap-2 items-center px-3 py-1 md:py-2 md:pl-3 md:pr-4 border border-[#DBDADE] rounded-xl w-[30%] md:w-[16%] bg-[#ffff]'>
      <span>
        <IoMdSwap />
      </span>
      <select name="filter" className='bg-[#ffff] rounded-md outline-none focus:ring-0 appearance-none w-full'>
        <option value="">Filter</option>
        {/* Add more options as needed */}
      </select>
    </div>

    </div>

    <div class="container overflow-x-auto">
    <table className="w-full my-[3%] border border-[#DBDADE]">
  <thead className=' bg-[#CBA557] bg-opacity-30'>
    <tr className=" text-gray-600 text-left uppercase font-medium">
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm  text-[#808080] font-medium">Boat Name</th>
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm  text-[#808080] font-medium">14 April 2024</th>
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm  text-[#808080] font-medium">15 April 2024</th>
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm  text-[#808080] font-medium">16 April 2024</th>
    </tr>
  </thead>
  <tbody>
    
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <div className='flex flex-col gap-2'>
            <img src={Boat} alt="" className=' w-28 md:w-36' />
            <p className=' text-[#808080] font-medium text-sm'>Pay DepSuper Mario - Sessa key largo 16osit</p>
        </div>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
  <span
    className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'
    onMouseEnter={(e) => handleMouseEnter(1, e.target.textContent)}
    onMouseLeave={() => handleMouseLeave(1)}
    style={{ position: 'relative' }}
  >
    Half Day Morning
    {infoBoxes[1] && (
      <div className="absolute top-full left-0 z-10">
        <div className="mt-[-9px]">
          <TiArrowSortedUp className="text-[#CBA557] text-3xl" />
        </div>
        <div className="mt-[-13px] px-[15px] py-[20px] space-y-3 bg-[#CBA557] rounded-[8px] text-[#ffff]">
          <h2 className="text-sm font-medium">{infoContent}:</h2>
          <p className="text-xs font-normal">Requester Name: Thomas Charles</p>
          <p className="text-xs font-normal">Rental Contract: Completed</p>
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]">Send Reminder</button>
        </div>
      </div>
    )}
  </span>
</td>
<td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
  <span
    className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'
    onMouseEnter={(e) => handleMouseEnter(2, e.target.textContent)}
    onMouseLeave={() => handleMouseLeave(2)}
    style={{ position: 'relative' }}
  >
    Half Day Morning
    {infoBoxes[2] && (
      <div className="absolute top-full left-0 z-10">
        <div className="mt-[-9px]">
          <TiArrowSortedUp className="text-[#CBA557] text-3xl" />
        </div>
        <div className="mt-[-13px] px-[15px] py-[20px] space-y-3 bg-[#CBA557] rounded-[8px] text-[#ffff]">
          <h2 className="text-sm font-medium">{infoContent}:</h2>
          <p className="text-xs font-normal">Requester Name: Thomas Charles</p>
          <p className="text-xs font-normal">Rental Contract: Completed</p>
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]">Send Reminder</button>
        </div>
      </div>
    )}
  </span>
</td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
      <span
    className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'
    onMouseEnter={(e) => handleMouseEnter(3, e.target.textContent)}
    onMouseLeave={() => handleMouseLeave(3)}
    style={{ position: 'relative' }}
  >
    Half Day Morning
    {infoBoxes[3] && (
      <div className="absolute top-full left-0 z-10">
        <div className="mt-[-9px]">
          <TiArrowSortedUp className="text-[#CBA557] text-3xl" />
        </div>
        <div className="mt-[-13px] px-[15px] py-[20px] space-y-3 bg-[#CBA557] rounded-[8px] text-[#ffff]">
          <h2 className="text-sm font-medium">{infoContent}:</h2>
          <p className="text-xs font-normal">Requester Name: Thomas Charles</p>
          <p className="text-xs font-normal">Rental Contract: Completed</p>
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]">Send Reminder</button>
        </div>
      </div>
    )}
  </span>
        </span>
      </td>



    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
    <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <div className='flex flex-col gap-2'>
            <img src={Boat} alt="" className=' w-28 md:w-36' />
            <p className=' text-[#808080] font-medium text-sm'>Pay DepSuper Mario - Sessa key largo 16osit</p>
        </div>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
      <span
    className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'
    onMouseEnter={(e) => handleMouseEnter(4, e.target.textContent)}
    onMouseLeave={() => handleMouseLeave(4)}
    style={{ position: 'relative' }}
  >
    Full Day Morning
    {infoBoxes[4] && (
      <div className="absolute top-full left-0 z-10">
        <div className="mt-[-9px]">
          <TiArrowSortedUp className="text-[#CBA557] text-3xl" />
        </div>
        <div className="mt-[-13px] px-[15px] py-[20px] space-y-3 bg-[#CBA557] rounded-[8px] text-[#ffff]">
          <h2 className="text-sm font-medium">{infoContent}:</h2>
          <p className="text-xs font-normal">Requester Name: Thomas Charles</p>
          <p className="text-xs font-normal">Rental Contract: Completed</p>
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]">Send Reminder</button>
        </div>
      </div>
    )}
  </span>
  <span
    className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'
    onMouseEnter={(e) => handleMouseEnter(5, e.target.textContent)}
    onMouseLeave={() => handleMouseLeave(5)}
    style={{ position: 'relative' }}
  >
    Full Day Morning
    {infoBoxes[5] && (
      <div className="absolute top-full left-0 z-10">
        <div className="mt-[-9px]">
          <TiArrowSortedUp className="text-[#CBA557] text-3xl" />
        </div>
        <div className="mt-[-13px] px-[15px] py-[20px] space-y-3 bg-[#CBA557] rounded-[8px] text-[#ffff]">
          <h2 className="text-sm font-medium">{infoContent}:</h2>
          <p className="text-xs font-normal">Requester Name: Thomas Charles</p>
          <p className="text-xs font-normal">Rental Contract: Completed</p>
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]">Send Reminder</button>
        </div>
      </div>
    )}
  </span>
      </span>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
      <span
    className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'
    onMouseEnter={(e) => handleMouseEnter(6, e.target.textContent)}
    onMouseLeave={() => handleMouseLeave(6)}
    style={{ position: 'relative' }}
  >
    Full Day Morning
    {infoBoxes[6] && (
      <div className="absolute top-full left-0 z-10">
        <div className="mt-[-9px]">
          <TiArrowSortedUp className="text-[#CBA557] text-3xl" />
        </div>
        <div className="mt-[-13px] px-[15px] py-[20px] space-y-3 bg-[#CBA557] rounded-[8px] text-[#ffff]">
          <h2 className="text-sm font-medium">{infoContent}:</h2>
          <p className="text-xs font-normal">Requester Name: Thomas Charles</p>
          <p className="text-xs font-normal">Rental Contract: Completed</p>
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]">Send Reminder</button>
        </div>
      </div>
    )}
  </span>
  <span
    className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'
    onMouseEnter={(e) => handleMouseEnter(7, e.target.textContent)}
    onMouseLeave={() => handleMouseLeave(7)}
    style={{ position: 'relative' }}
  >
    Half Day Evening
    {infoBoxes[7] && (
      <div className="absolute top-full left-0 z-10">
        <div className="mt-[-9px]">
          <TiArrowSortedUp className="text-[#CBA557] text-3xl" />
        </div>
        <div className="mt-[-13px] px-[15px] py-[20px] space-y-3 bg-[#CBA557] rounded-[8px] text-[#ffff]">
          <h2 className="text-sm font-medium">{infoContent}:</h2>
          <p className="text-xs font-normal">Requester Name: Thomas Charles</p>
          <p className="text-xs font-normal">Rental Contract: Completed</p>
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]">Send Reminder</button>
        </div>
      </div>
    )}
  </span>
      </span>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
      </span>
      </td>




    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
    <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <div className='flex flex-col gap-2'>
            <img src={Boat} alt="" className=' w-28 md:w-36' />
            <p className=' text-[#808080] font-medium text-sm'>Pay DepSuper Mario - Sessa key largo 16osit</p>
        </div>
      </td>
        <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Half Day
        </span>
        </span>
      </td>
            <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Half Day
        </span>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Half Day
        </span>
        </span>
      </td>



    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
            <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <div className='flex flex-col gap-2'>
            <img src={Boat} alt="" className=' w-28 md:w-36' />
            <p className=' text-[#808080] font-medium text-sm'>Pay DepSuper Mario - Sessa key largo 16osit</p>
        </div>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
      </span>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
      </span>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
      </span>
      </td>



    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
            <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <div className='flex flex-col gap-2'>
            <img src={Boat} alt="" className=' w-28 md:w-36' />
            <p className=' text-[#808080] font-medium text-sm'>Pay DepSuper Mario - Sessa key largo 16osit</p>
        </div>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Half Day Morning
        </span>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Half Day Morning
        </span>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Half Day Evening Morning
        </span>
        </span>
      </td>



    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
            <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <div className='flex flex-col gap-2'>
            <img src={Boat} alt="" className=' w-28 md:w-36' />
            <p className=' text-[#808080] font-medium text-sm'>Pay DepSuper Mario - Sessa key largo 16osit</p>
        </div>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Morning
        </span>
      </span>
      </td>
            <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Evening
        </span>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Full Day Evening
        </span>
        </span>
      </td>



    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
            <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <div className='flex flex-col gap-2'>
            <img src={Boat} alt="" className=' w-28 md:w-36' />
            <p className=' text-[#808080] font-medium text-sm'>Pay DepSuper Mario - Sessa key largo 16osit</p>
        </div>
      </td>
     <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Half Day Evening
        </span>
      </td>
     <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Half Day Evening
        </span>
      </td>
      <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
      <span className=' flex flex-col gap-6 items-start'>
        <span className=' px-3 py-2 rounded-[10px] bg-[#CA18181A] bg-opacity-10 text-[#CA1818] font-normal text-sm'>
          Half Day
        </span>
        </span>
      </td>



    </tr>
    </tbody>
</table>
</div>


   <Pagination/>


{/* Additional information box */}









    </div>

</>
  )
}

export default BookedBoats
