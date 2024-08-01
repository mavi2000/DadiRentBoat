import React, { useState, useEffect } from "react";
import BookingNavbar from "./BookingNavbar";
import { IoSearchOutline } from "react-icons/io5";
import BoatType from "../../../assets/Images/BoatType.png";
import baseURL from "../../../../APi/BaseUrl";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const dummyTimeSlots = [
  {
    id: 1,
    slot: "4h00",
    price: "$238.92",
    duration: "4h00",
    departure: "Schedule to be agreed with the owner",
  },
  {
    id: 2,
    slot: "Morning",
    price: "$179.19",
    duration: "4h00",
    departure: "8:00 AM",
  },
  {
    id: 3,
    slot: "Noon",
    price: "$238.92",
    duration: "4h00",
    departure: "12:00 PM",
  },
  {
    id: 4,
    slot: "Afternoon",
    price: "$238.92",
    duration: "4h00",
    departure: "2:00 PM",
  },
  {
    id: 5,
    slot: "Evening",
    price: "$238.92",
    duration: "5h00",
    departure: "6:00 PM",
  },
];

const PendingBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [newBooking, setNewBooking] = useState({
    userId: "",
    boatName: "",
    boatId: "",
    boatImage: [],
    amount: "",
    stripeDetails: {},
    rateType: "",
    availableDates: [null, null],
    amountPaid: "",
    totalAmount: "",
    timeSlot: null,
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await baseURL.get("/checkout/getPayment");
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setNewBooking((prev) => ({ ...prev, availableDates: [start, end] }));
    if (start && !end) {
      setShowTimeSlots(true);
    } else {
      setShowTimeSlots(false);
    }
  };

  const handleNewBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await baseURL.post("/checkout/create-payment", {
        ...newBooking,
        amount: parseFloat(newBooking.amount),
        amountPaid: parseFloat(newBooking.amountPaid),
        totalAmount: parseFloat(newBooking.totalAmount),
        availableDates: newBooking.availableDates.map(date => date ? date.toISOString() : null)
      });
      setBookings([...bookings, response.data]);
      setShowPopup(false);
      setNewBooking({
        userId: "",
        boatName: "",
        boatId: "",
        boatImage: [],
        amount: "",
        stripeDetails: {},
        rateType: "",
        availableDates: [null, null],
        amountPaid: "",
        totalAmount: "",
        timeSlot: null,
      });
    } catch (error) {
      setError(error.message);
    }
  };

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

  return (
    <>
      <BookingNavbar />
      <div className="mx-[3%] md:mx-[1%] mt-[3%]">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium text-[#4B465C]">Pending Bookings</h1>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#CBA557] text-white font-bold py-2 px-4 rounded"
          >
            Add New Booking
          </button>
        </div>

        <div className="flex justify-between mt-[2%] md:gap-6">
          <div className="flex gap-2 items-center py-2 pl-3 pr-4 bg-[#ffff] w-[35%] rounded-xl border border-[#DBDADE] flex-grow">
            <IoSearchOutline className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none focus:ring-0 w-full"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="container overflow-x-auto">
          <table className="w-full my-[3%] border border-[#DBDADE]">
            <thead className="bg-[#CBA557] bg-opacity-30">
              <tr className="text-gray-600 cursor-pointer text-left uppercase font-medium">
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">Order ID</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">Requester Name</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">Request Date</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">Boat Type</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">Total Price</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">Deposit Price</th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentBookings?.map((booking) => (
                <tr
                  key={booking._id}
                  onClick={() => navigate(`/dashboard/booking-details/${booking._id}`)}
                  className="border-b cursor-pointer border-[#DBDADE] hover:bg-gray-100"
                >
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">#{booking._id}</td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    {booking.userId?.username || booking.username || "N/A"}
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    {new Date(booking.availableDates[0]).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    <div className="flex items-center justify-center">
                      <img
                        src={booking?.boatImage[0] || BoatType}
                        alt=""
                        className="md:w-9 w-6 rounded-full aspect-square"
                      />
                      <p className="px-2">{booking.boatName}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    €{(booking.amount && booking.amount !== 0 ? booking.amount : booking.amountPaid || 0).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">€{booking.totalAmount.toFixed(2)}</td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    <span className="px-4 py-3 rounded-[10px] bg-[#FF7A00] bg-opacity-10 text-[#FF7A00] font-bold text-sm">Pending</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-row justify-between w-[97%] mt-4">
          <div>
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredBookings.length)} of {filteredBookings.length} entries
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

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 md:h-1/2 overflow-auto">
              <h2 className="text-lg font-bold mb-4">Add New Booking</h2>
              <form onSubmit={handleNewBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700">User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={newBooking.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Boat Name</label>
                  <input
                    type="text"
                    name="boatName"
                    value={newBooking.boatName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Rental Type</label>
                  <input
                    type="text"
                    name="rentalType"
                    value={newBooking.rentalType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Rental Dates</label>
                  <DatePicker
                    selected={newBooking.availableDates[0]}
                    onChange={handleDateChange}
                    startDate={newBooking.availableDates[0]}
                    endDate={newBooking.availableDates[1]}
                    selectsRange
                    inline
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                {showTimeSlots && (
                  <div>
                    <label className="block text-gray-700">Time Slot</label>
                    <select
                      name="timeSlot"
                      value={newBooking.timeSlot}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded"
                      required
                    >
                      <option value="">Select a time slot</option>
                      {dummyTimeSlots.map((slot) => (
                        <option key={slot.id} value={slot.slot}>
                          {slot.slot} - {slot.departure} ({slot.price})
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div>
                  <label className="block text-gray-700">Amount Paid</label>
                  <input
                    type="number"
                    name="amountPaid"
                    value={newBooking.amountPaid}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Total Amount</label>
                  <input
                    type="number"
                    name="totalAmount"
                    value={newBooking.totalAmount}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#CBA557] text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PendingBookings;
