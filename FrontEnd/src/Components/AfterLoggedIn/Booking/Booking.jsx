import React, { useContext, useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSwap } from "react-icons/io";
import { UserContext } from '../../../../Context/UserContext';
import { Link } from 'react-router-dom';

const Booking = () => {
  const { myBookings, fetchMyBookings } = useContext(UserContext);
  // fetch bookings
  useEffect(() => {
    if (!myBookings) {
      fetchMyBookings()
    }
  }, [])
  return (
    <div className='mx-[3%] md:mx-[6%] mt-[4%] md:mt-[7%] mb-[1%]'>
      <div className=' flex justify-between'>
        <div className='flex gap-2 items-center py-2 pl-3 pr-4 bg-[#ffff] w-[35%] rounded-xl border border-[#DBDADE]'>
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
      <div className="overflow-x-auto">
        <table className="w-full my-[3%] border border-[#DBDADE]">
          <thead className=' bg-[#CBA557]'>
            <tr className=" text-gray-600 text-left uppercase font-medium">
              <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">BOAT NAME</th>
              <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">DATE</th>
              <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">DURATION</th>
              <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">PAYMENT</th>
              <th className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#FFFFFF] font-medium">INVOICE</th>
            </tr>
          </thead>
          {/* mapping the bookings here */}
          <tbody>
            {
              myBookings?.map((booking) => {
                const date = new Date(booking.availableDate);
                const options = {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                };
                const formattedDate = date.toLocaleDateString('en-GB', options).toUpperCase().replace(/\s/g, '. ');
                return (
                  <tr className="border-b border-[#DBDADE] hover:bg-gray-100" key={booking._id}>
                    <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">{booking.boatName}</td>
                    <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">{formattedDate}</td>
                    <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">{booking.rateType}</td>
                    <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
                      <span className=" text-[#0074FF]">
                        ${booking.amount / 100}</span>/{booking.stripeDetails.amount_total / 100}
                      <p className=' text-[#4B465C] text-[13px]'>Deposit Paid</p>
                    </td>
                    <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-[#4B465C]">
                      <Link to={"/user/booking/" + booking._id} className="text-blue-500 underline">VIEW INVOICE</Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>


      <div className=' mt-[5%] flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-between items-center'>

        <p className=' text-[#4B465C] text-sm font-semibold font-[Manrope]'>Showing 1 to 7 of 100 entries</p>


        <div className="flex items-center justify-between md:justify-center space-x-2">
          <button className="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF] disabled:opacity-50" disabled>Previous</button>
          <button className="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">1</button>
          <button className="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">2</button>
          <button className="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">3</button>
          <button className="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">4</button>
          <button className="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">5</button>
          <button className="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">Next</button>
        </div>


      </div>

    </div>
  )
}

export default Booking
