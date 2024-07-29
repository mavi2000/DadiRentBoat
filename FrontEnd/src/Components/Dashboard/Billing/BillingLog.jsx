import React, { useState, useEffect } from "react";
import baseURL from "../../../../APi/BaseUrl";

const BillingLog = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await baseURL.get("/checkout/getPayment"); // Replace with your API endpoint
        setBookings(response.data);
        setFilteredBookings(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

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

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if fetching data fails
  }
console.log("billings",bookings)
  return (
    <div className="my-8 flex flex-col justify-center items-center gap-3 bg-white w-full rounded-md shadow py-5 text-[#4b465cb4]">
      <div className="flex flex-row justify-between w-[97%]">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            required
            autoComplete="off"
            name="text"
            placeholder="Search Invoice"
            className="border border-[#DBDADE] p-2 rounded-md text-sm"
            value={searchText}
            onChange={handleSearchChange}
          />
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
            <div className="w-[15%] border-b border-[#DBDADE] p-3">
              Amount Paid
            </div>
            <div className="w-[15%] border-b border-[#DBDADE] p-3">
              Total Paid
            </div>
            <div className="w-[10%] border-b border-[#DBDADE] p-3">Balance</div>
          </div>

          {/* Display Each Booking */}
          {currentBookings?.map((booking) => (
            <div key={booking._id} className="flex w-full">
              <div className="w-[10%] border-b border-[#DBDADE] p-3">
                #{booking?._id.slice(-7)}{" "}
                {/* Example of displaying part of ID */}
              </div>
              <div className="flex items-center gap-2 w-[20%] border-b border-[#DBDADE] p-3">
                <div className="flex justify-center rounded-full bg-[#CBA55726] items-center w-8 h-8 text-[#CBA557]">
                  {/* Example of displaying initials */}
                  <div>{booking.userId?.username.charAt(0)}</div>
                  <div>{booking.userId?.username.charAt(1)}</div>
                </div>
                <div>
                  <div className="text-sm">{booking.userId?.username}</div>
                  <div className="text-xs text-[#a9a3ba]">
                    {booking.userId?.email}
                  </div>
                </div>
              </div>
              <div className="w-[20%] border-b border-[#DBDADE] p-3">
                {booking?.boatName}
              </div>
              <div className="w-[10%] border-b border-[#DBDADE] p-3">
                {new Date(booking.createdAt).toLocaleDateString()}{" "}
                {/* Format date */}
              </div>
              <div className="w-[15%] border-b border-[#DBDADE] p-3">
                ${booking.amount.toFixed(2)}
              </div>
              <div className="w-[15%] border-b border-[#DBDADE] p-3">
                ${booking.totalAmount.toFixed(2)}
              </div>
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
        <div>
          Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {filteredBookings.length} entries
        </div>
        <div className="flex flex-row items-center justify-center gap-1 text-sm">
          <button
            className="bg-[#4B465C14] h-7 w-20 rounded-md"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex gap-1">
            {[...Array(Math.ceil(filteredBookings.length / itemsPerPage)).keys()].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page + 1)}
                className={`w-6 h-7 ${currentPage === page + 1 ? 'bg-[#CBA557]' : 'bg-[#4B465C14]'} flex justify-center items-center rounded-md`}
              >
                {page + 1}
              </button>
            ))}
          </div>
          <button
            className="bg-[#4B465C14] h-7 w-14 rounded-md"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredBookings.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingLog;
