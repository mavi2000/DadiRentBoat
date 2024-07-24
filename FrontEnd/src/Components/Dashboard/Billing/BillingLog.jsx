import React, { useState, useEffect } from "react";
import baseURL from "../../../../APi/BaseUrl";

const BillingLog = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await baseURL.get('/checkout/getPayment'); // Replace with your API endpoint
        setBookings(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if fetching data fails
  }

  return (
    <div className="my-8 flex flex-col justify-center items-center gap-3 bg-white w-full rounded-md shadow py-5 text-[#4b465cb4]">
      <div className="flex flex-row justify-between w-[97%]">
        <select className="w-[10%] bg-transparent border border-[#DBDADE] p-2 rounded-md text-gray-400 text-sm font-light">
          <option>10</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            required
            autoComplete="off"
            name="text"
            placeholder="Search Invoice"
            className="border border-[#DBDADE] p-2 rounded-md text-sm"
          />
          <select className="w-[100%] border border-[#DBDADE] p-2 rounded-md bg-transparent text-gray-400 text-sm font-light">
            <option>Select Status</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>

      {/* Billing Table */}
      <div className="w-full border mt-4">
        <div className="gap-3 text-[#4B465C]">
          <div className="flex w-full">
            {/* Table Headers */}
            <div className="w-[10%] border-b border-[#DBDADE] p-3">ID</div>
            <div className="w-[20%] border-b border-[#DBDADE] p-3">Client</div>
            <div className="w-[20%] border-b border-[#DBDADE] p-3">Boat</div>
            <div className="w-[10%] border-b border-[#DBDADE] p-3">Date</div>
            <div className="w-[15%] border-b border-[#DBDADE] p-3">Amount Paid</div>
            <div className="w-[15%] border-b border-[#DBDADE] p-3">Total Paid</div>
            <div className="w-[10%] border-b border-[#DBDADE] p-3">Balance</div>
          </div>

          {/* Display Each Booking */}
          {bookings?.map((booking) => (
            <div key={booking._id} className="flex w-full">
              <div className="w-[10%] border-b border-[#DBDADE] p-3">
                #{booking?._id.slice(-7)} {/* Example of displaying part of ID */}
              </div>
              <div className="flex items-center gap-2 w-[20%] border-b border-[#DBDADE] p-3">
                <div className="flex justify-center rounded-full bg-[#CBA55726] items-center w-8 h-8 text-[#CBA557]">
                  {/* Example of displaying initials */}
                  <div>{booking.userId?.username.charAt(0)}</div>
                  <div>{booking.userId?.username.charAt(1)}</div>
                </div>
                <div>
                  <div className="text-sm">{booking.userId?.username}</div>
                  <div className="text-xs text-[#a9a3ba]">{booking.userId?.email}</div>
                </div>
              </div>
              <div className="w-[20%] border-b border-[#DBDADE] p-3">{booking?.boatName}</div>
              <div className="w-[10%] border-b border-[#DBDADE] p-3">
                {new Date(booking.createdAt).toLocaleDateString()} {/* Format date */}
              </div>
              <div className="w-[15%] border-b border-[#DBDADE] p-3">${booking.amount.toFixed(2)}</div>
              <div className="w-[15%] border-b border-[#DBDADE] p-3">${booking.totalAmount.toFixed(2)}</div>
              <div className="w-[10%] border-b border-[#DBDADE] p-3">
                {booking.amount === booking.totalAmount ? (
                  <span className="text-green-500 font-bold">Paid</span>
                ) : (
                  <span className="text-red-500 font-bold">30%</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-row justify-between w-[97%] mt-4">
        <div>Showing 1 to {bookings.length} of {bookings.length} entries</div>
        <div className="flex flex-row items-center justify-center gap-1 text-sm">
          <button className="bg-[#4B465C14] h-7 w-20 rounded-md">Previous</button>
          <div className="flex gap-1">
            {[...Array(Math.ceil(bookings.length / 10)).keys()].map((page) => (
              <div
                key={page}
                className="w-6 h-7 bg-[#4B465C14] flex justify-center items-center rounded-md"
              >
                {page + 1}
              </div>
            ))}
          </div>
          <button className="bg-[#4B465C14] h-7 w-14 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default BillingLog;
