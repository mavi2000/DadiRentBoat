import React, { useState, useEffect } from 'react';
import BookingNavbar from './BookingNavbar';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdSwap } from 'react-icons/io';
import BoatType from '../../../assets/Images/BoatType.png'; // Assuming this is your boat type image
import Pagination from '../Pagination/Pagination';
import baseURL from '../../../../APi/BaseUrl';
import { useNavigate } from 'react-router-dom';

const PreviousBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await baseURL.get('/checkout/getPayment'); // Corrected endpoint
        console.log('API Response:', response.data); // Logging response data for debugging

        const todayDate = new Date().setHours(0, 0, 0, 0); // Get today's date at midnight for accurate comparison
        const filteredBookings = response.data.filter(
          (booking) => new Date(booking?.availableDate).setHours(0, 0, 0, 0) < todayDate
        );

        setBookings(filteredBookings);
        setFilteredBookings(filteredBookings);
      } catch (error) {
        console.error('Error fetching upcoming bookings:', error); // Logging error for debugging
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    const applyFilters = () => {
      if (searchText) {
        setFilteredBookings(
          bookings.filter((booking) =>
            booking.boatName.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      } else {
        setFilteredBookings(bookings);
      }
    };

    applyFilters();
  }, [searchText, bookings]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("bookings", bookings)
  return (
    <>
      <BookingNavbar />
      <div className='mx-[3%] md:mx-[1%] mt-[3%]'>
        <div className='flex justify-between'>
          <h1 className='text-lg font-medium text-[#4B465C]'>Previous Bookings</h1>
        
        </div>

        <div className='flex justify-between mt-[2%] md:gap-6'>
          <div className='flex gap-2 items-center py-2 pl-3 pr-4 bg-[#ffff] w-[35%] rounded-xl border border-[#DBDADE] flex-grow'>
            <IoSearchOutline className='text-gray-500' />
            <input
              type='text'
              placeholder='Search'
              className='bg-transparent outline-none focus:ring-0 w-full'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
         
        </div>

        <div className="container overflow-x-auto">
          {filteredBookings.length > 0 ? (
            <table className="w-full my-[3%] border border-[#DBDADE]">
              <thead className='bg-[#CBA557] bg-opacity-30'>
                <tr className="text-gray-600 text-left uppercase font-medium">
                  <th className="px-4 py-3 md:whitespace-nowrap md:px-5 md:py-5 text-sm text-[#808080] font-medium">Order ID</th>
                  <th className="px-4 py-3 md:whitespace-nowrap md:px-5 md:py-5 text-sm text-[#808080] font-medium">Requester Name</th>
                  <th className="px-4 py-3 md:whitespace-nowrap md:px-5 md:py-5 text-sm text-[#808080] font-medium">Request Date</th>
                  <th className="px-4 py-3 md:whitespace-nowrap md:px-5 md:py-5 text-sm text-[#808080] font-medium">Boat Type</th>
                  <th className="px-4 py-3 md:whitespace-nowrap md:px-5 md:py-5 text-sm text-[#808080] font-medium">Total Price</th>
                  <th className="px-4 py-3 md:whitespace-nowrap md:px-5 md:py-5 text-sm text-[#808080] font-medium">Deposit Price</th>
                  <th className="px-4 py-3 md:whitespace-nowrap md:px-5 md:py-5 text-sm text-[#808080] font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking._id} className="border-b cursor-pointer border-[#DBDADE] hover:bg-gray-100" onClick={() => navigate(`/dashboard/booking-details/${booking._id}`)}>
                    <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">{booking?._id}</td>
                    <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">{booking?.userId?.username  || "N/A "}</td>
                    <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">{new Date(booking?.availableDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                      <div className='flex items-center justify-center'>
                          <img
                        src={booking?.boatImage[0] || BoatType}
                        alt=''
                        className='md:w-9 w-6 rounded-full aspect-square'
                      />
                        <p className='px-2'>{booking.boatName}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">{booking.totalAmount.toFixed(2)}</td>
                    <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">{booking.amount.toFixed(2)}</td>
                    <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                      <div className='px-4 py-3 rounded-[10px] bg-[#E3B5111A] bg-opacity-10 text-[#E3B511] font-bold text-sm'>
                        completed
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-10 text-lg text-gray-500">
              No requests available for previous dates.
            </div>
          )}
        </div>

        <Pagination />
      </div>
    </>
  );
}

export default PreviousBooking;
