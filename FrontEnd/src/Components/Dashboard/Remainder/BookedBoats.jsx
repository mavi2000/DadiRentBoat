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
import { SlCloudDownload } from "react-icons/sl";
import { RiExpandUpDownLine } from "react-icons/ri";
import { RiBold } from "react-icons/ri";
import { FiItalic } from "react-icons/fi";
import { MdFormatUnderlined } from "react-icons/md";
import { PiTextStrikethroughBold } from "react-icons/pi";
import { HiMiniPlusSmall } from "react-icons/hi2";

const BookedBoats = () => {
    const [infoBoxes, setInfoBoxes] = useState({});
    const [infoContent, setInfoContent] = useState("");

    const [showReminderPopup, setShowReminderPopup] = useState(false);

    const handleReminderClick = () => {
        setShowReminderPopup(true); // Show the Reminder confirmation popup
    };

    const handleSendReminder = () => {
        setShowReminderPopup(false);
    };

    const handleCreateReminder = () => {
        setShowReminderPopup(false); 
    };
    const handleCancelReminder = () => {
        setShowReminderPopup(false); 
    };

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
    <div className='mx-[3%] md:mx-[1%] mt-[3%]' >
        
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
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]" onClick={handleReminderClick}>Send Reminder</button>
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
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]" onClick={handleReminderClick}>Send Reminder</button>
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
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]" onClick={handleReminderClick}>Send Reminder</button>
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
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]" onClick={handleReminderClick}>Send Reminder</button>
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
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]" onClick={handleReminderClick}>Send Reminder</button>
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
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]" onClick={handleReminderClick}>Send Reminder</button>
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
          <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]" onClick={handleReminderClick}>Send Reminder</button>
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


            {/* Delete Popup */}
            {showReminderPopup &&  (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" >
                    <div className="bg-[#FAFAFA] w-[50%] py-10 px-12 rounded-md space-y-3 max-h-[100vh] overflow-auto">
                        <div className=' border-[1.14px] border-[#EDEDED] rounded-[9px]'>
                        <div className=' flex gap-2 items-center border-b border-b-[#EDEDED] py-4 w-full pb-2 bg-[#ffff]'>
                        <h2 className="text-[#404040] font-bold px-4 py-2 text-lg">Reminder</h2>
                        </div>
                        

                        <div className="flex grow w-full flex-col space-y-1 gap-2 mx-[1%] my-[2%] px-5 py-2">

                            <select
                              name="platform"
                              id="platform"
                              className="border-[1.14px] px-3 py-2 border-[#DBDADE] w-full text-[#C2C2C2] outline-none rounded-lg bg-[#ffff]"
                            >
                              <option value="Select Country">Select Platform(WhatsApp, Email, Text Message)</option>
                              <option value="Select Country">Whatsapp</option>
                              <option value="Select Country">Email</option>
                              <option value="Select Country">Text Message</option>
                            </select>

                            <input type="text" name="" id="" placeholder='Reminder Title' className='border-[1.14px] px-3 py-2 border-[#DBDADE] w-full text-[#C2C2C2] outline-none rounded-lg bg-[#ffff] placeholder:text-[#C2C2C2]' />

                            <div className=' bg-[#CBA5571A] bg-opacity-10 border border-dashed border-[#78BC6133] border-opacity-20 py-2 px-6 flex flex-col items-center space-y-3'>
                              <span className=' text-3xl text-[#CBA557]'><SlCloudDownload/></span>
                              <p className=' text-[#0F0F0F] text-xs font-semibold'>Drag & drop files or <span className=' text-[#CBA557]'>Browse</span>
                              </p>
                              <p className=' text-[10px] text-[#676767] font-normal'>Supported formats: JPEG, JPG, PNG, PDF, Excel</p>
                            </div>

                            <div className=' border-[1.14px] border-[#D2D2D2] rounded-[9px]'>
                              <div className=' px-2 py-3 flex gap-4 items-center'>
                                <div className=' flex gap-4 items-center'>
                                <p>Normal</p>
                                <span><RiExpandUpDownLine/></span>

                                </div>
                                <span><RiBold/></span>
                                <span><FiItalic/></span>
                                <span><MdFormatUnderlined/></span>
                                <span><PiTextStrikethroughBold/></span>

                                <div className=' flex gap-2 items-center'>
                                  <span className=' text-xl'><HiMiniPlusSmall/></span>
                                  <p className=' font-["Manrope"] text-sm font-normal'>Add Variabel</p>
                                </div>


                              </div>

                              <textarea name="" id="" cols="30" rows="10" placeholder='Enter the text for your Message..' className='border-[1.14px] border-[#D2D2D2] w-full py-4 px-3 placeholder:text-[#C2C2C2] resize-none'>

                              </textarea>

                            </div>
                            <p className=' text-[#404040] text-sm'>When do you want to send this reminder?</p>

                            <div className="flex gap-12 my-[3%] mx-[1%]">
                            <label className="flex items-center gap-2">
                              <input type="radio" name="payment" className="w-5 h-5" />
                              <span className=" font-normal text-[#676767] text-sm">
                              Send immediately
                              </span>
                            </label>

                            <label className="flex items-center gap-2">
                              <input type="radio" name="payment" className="w-5 h-5" />
                              <span className=" font-normal text-[#676767] text-sm">
                              Send at a specific time
                              </span>
                            </label>
                          </div>

          <div className="flex gap-6 mt-4  flex-wrap md:flex-nowrap">
              <div className="flex grow flex-col gap-2">
                  <input type="date" name="" id="" className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#4B465C] outline-none rounded-lg bg-[#ffff]" />
              </div>
              <div className="flex grow flex-col gap-2">
              <input type="time" name="" id="" placeholder="Time (00:00)" className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#4B465C] outline-none rounded-lg bg-[#ffff]" />
              </div>
        </div>

                          </div>
  
                        <div className="flex gap-3 justify-end px-5 py-2">
                            <button className=" px-4 py-2 bg-[#F2F2F2] text-[#B3B3B3] rounded-lg" onClick={handleCreateReminder}>Create</button>
                            <button className="px-4 py-2 border-[1.14px] border-[#CBA557] text-[#CBA557] bg-opacity-15 rounded-lg" onClick={handleSendReminder}>Send</button>
                            <button className="px-4 py-2 bg-[#FF6347] text-white rounded" onClick={handleCancelReminder}>Cancel</button>
                        </div>
                    </div>
                    </div>
                </div>
            )}









    </div>

</>
  )
}

export default BookedBoats
