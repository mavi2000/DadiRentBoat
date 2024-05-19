import React from 'react'
import BookingNavbar from './BookingNavbar'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSwap } from "react-icons/io";
import BoatType from '../../../assets/Images/BoatType.png'
import Pagination from '../Pagination/Pagination';

const PreviousBooking = () => {
  return (
<>
    <BookingNavbar/>
    <div className='mx-[3%] md:mx-[1%] mt-[3%]'>
        
        <div className=' flex justify-between'>
          <h1 className=' text-lg font-medium text-[#4B465C]'>Previous Bookings</h1>
          <button className=' px-[30px] py-[14px] rounded-[10px] border border-[#DBDADE] text-[#4B465C] font-normal text-sm'>Add new booking</button>
          
        </div>

        <div className=' flex justify-between mt-[2%] md:gap-6'>
        <div className='flex gap-2 items-center py-2 pl-3 pr-4 bg-[#ffff] w-[35%] rounded-xl border border-[#DBDADE] flex-grow'>
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
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm md:whitespace-nowrap  text-[#808080] font-medium">Order ID</th>
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm md:whitespace-nowrap  text-[#808080] font-medium">Requester Name</th>
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm md:whitespace-nowrap  text-[#808080] font-medium">Request Date</th>
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm md:whitespace-nowrap  text-[#808080] font-medium">Boat Type</th>
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm md:whitespace-nowrap  text-[#808080] font-medium">Total Price</th>
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm md:whitespace-nowrap  text-[#808080] font-medium">Deposit Price</th>
      <th className="px-4 py-3 md:px-5 md:py-5 text-sm md:whitespace-nowrap  text-[#808080] font-medium">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">#827930</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">Thomas Charles</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">13 April 2024</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <div className=' flex items-center justify-center'>
        <img src={BoatType} alt="" className=' md:w-9 w-6 rounded-full'/>
        <p className='px-2'>Boat Type</p>
        </div>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-4 py-3 rounded-[10px] bg-[#0080001A] bg-opacity-10 text-[#008000] font-bold text-sm'>
          Completed
        </span>
      </td>


    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">#827930</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">Thomas Charles</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">13 April 2024</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <div className=' flex items-center justify-center'>
        <img src={BoatType} alt="" className=' md:w-9 w-6 rounded-full'/>
        <p className='px-2'>Boat Type</p>
        </div>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-4 py-3 rounded-[10px] bg-[#0080001A] bg-opacity-10 text-[#008000] font-bold text-sm'>
          Completed
        </span>
      </td>


    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">#827930</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">Thomas Charles</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">13 April 2024</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <div className=' flex items-center justify-center'>
        <img src={BoatType} alt="" className=' md:w-9 w-6 rounded-full'/>
        <p className='px-2'>Boat Type</p>
        </div>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-4 py-3 rounded-[10px] bg-[#0080001A] bg-opacity-10 text-[#008000] font-bold text-sm'>
          Completed
        </span>
      </td>


    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">#827930</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">Thomas Charles</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">13 April 2024</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <div className=' flex items-center justify-center'>
        <img src={BoatType} alt="" className=' md:w-9 w-6 rounded-full'/>
        <p className='px-2'>Boat Type</p>
        </div>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-4 py-3 rounded-[10px] bg-[#0080001A] bg-opacity-10 text-[#008000] font-bold text-sm'>
          Completed
        </span>
      </td>


    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">#827930</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">Thomas Charles</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">13 April 2024</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <div className=' flex items-center justify-center'>
        <img src={BoatType} alt="" className=' md:w-9 w-6 rounded-full'/>
        <p className='px-2'>Boat Type</p>
        </div>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-4 py-3 rounded-[10px] bg-[#0080001A] bg-opacity-10 text-[#008000] font-bold text-sm'>
          Completed
        </span>
      </td>


    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">#827930</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">Thomas Charles</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">13 April 2024</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <div className=' flex items-center justify-center'>
        <img src={BoatType} alt="" className=' md:w-9 w-6 rounded-full'/>
        <p className='px-2'>Boat Type</p>
        </div>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-4 py-3 rounded-[10px] bg-[#0080001A] bg-opacity-10 text-[#008000] font-bold text-sm'>
          Completed
        </span>
      </td>


    </tr>
    <tr className="border-b border-[#DBDADE] hover:bg-gray-100">
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">#827930</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">Thomas Charles</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">13 April 2024</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <div className=' flex items-center justify-center'>
        <img src={BoatType} alt="" className=' md:w-9 w-6 rounded-full'/>
        <p className='px-2'>Boat Type</p>
        </div>
        </td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€54</td>
      <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
        <span className=' px-4 py-3 rounded-[10px] bg-[#0080001A] bg-opacity-10 text-[#008000] font-bold text-sm'>
          Completed
        </span>
      </td>


    </tr>
    </tbody>
</table>
</div>


      <Pagination/>








    </div>

</>
  )
}

export default PreviousBooking
