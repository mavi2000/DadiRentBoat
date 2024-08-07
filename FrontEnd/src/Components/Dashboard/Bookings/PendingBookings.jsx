import React, { useState, useEffect } from "react";
import BookingNavbar from "./BookingNavbar";
import { IoSearchOutline } from "react-icons/io5";
import BoatType from "../../../assets/Images/BoatType.png";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import baseURL from "../../../../APi/BaseUrl";
import { useTranslation } from "react-i18next";

const boatOptions = [
  "Nemo - Blumax 19 open boat - Red",
  "Annina - Open Sea Ghost 550 boat",
  "Dory - Blumax 19 open boat - Blue",
  "Diva - Blumax 19 open boat - Beaje",
];
const platformOptions = ["Click&Boat", "Samboat", "Zizzo", "Filovent"];

const PendingBookings = () => {
  const { t } = useTranslation();
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
    username: "",
    email: "",
    mobile: "",
    boatName: "",
    rentalType: "",
    availableDates: [null, null],
    startTime: null,
    endTime: null,
    bookingPlatform: "",
    platformInvoice: null,
    platformAmount: "",
    amountPaid: "",
    totalAmount: "",
    address: "",
    taxCode: "",
    peopleOnBoard: "",
    skipperName: "",
    skipperPhone: "",
    departurePoint: "",
    arrivalPoint: "",
    accessories: [], // Change to array
    customerNotes: "",
    petrolPrepaid: false,
    contract: false,
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
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setNewBooking((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "checkbox") {
      setNewBooking((prev) => ({ ...prev, [name]: checked }));
    } else {
      setNewBooking((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setNewBooking((prev) => ({ ...prev, availableDates: [start, end] }));
    if (start && end && start.getTime() === end.getTime()) {
      setShowTimeSlots(true);
    } else {
      setShowTimeSlots(false);
    }
  };

  const handleNewBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in newBooking) {
        if (key === "availableDates" || key === "accessories") {
          formData.append(key, JSON.stringify(newBooking[key]));
        } else {
          formData.append(key, newBooking[key]);
        }
      }

      const response = await baseURL.post(
        "/checkout/create-payment",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setBookings([...bookings, response.data]);
      setShowPopup(false);
      setNewBooking({
        username: "",
        email: "",
        mobile: "",
        boatName: "",
        rentalType: "",
        availableDates: [null, null],
        startTime: null,
        endTime: null,
        bookingPlatform: "",
        platformInvoice: null,
        platformAmount: "",
        amountPaid: "",
        totalAmount: "",
        address: "",
        taxCode: "",
        peopleOnBoard: "",
        skipperName: "",
        skipperPhone: "",
        departurePoint: "",
        arrivalPoint: "",
        accessories: [], // Reset to array
        customerNotes: "",
        petrolPrepaid: false,
        contract: false,
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

  const handleAddAccessory = () => {
    setNewBooking((prev) => ({
      ...prev,
      accessories: [...prev.accessories, ""],
    }));
  };

  const handleRemoveAccessory = (index) => {
    setNewBooking((prev) => ({
      ...prev,
      accessories: prev.accessories.filter((_, i) => i !== index),
    }));
  };

  const handleAccessoryChange = (index, value) => {
    const updatedAccessories = [...newBooking.accessories];
    updatedAccessories[index] = value;
    setNewBooking((prev) => ({
      ...prev,
      accessories: updatedAccessories,
    }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBookings = filteredBookings.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  if (loading) {
    return <div>{t("loading")}</div>; // Display a loading indicator while fetching data
  }

  if (error) {
    return (
      <div>
        {t("error")}: {error}
      </div>
    ); // Display an error message if fetching data fails
  }

  return (
    <>
      <BookingNavbar />
      <div className="mx-[3%] md:mx-[1%] mt-[3%]">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium text-[#4B465C]">
            {t("pendingBookings")}
          </h1>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#CBA557] text-white font-bold py-2 px-4 rounded"
          >
            {t("addNewBooking")}
          </button>
        </div>

        <div className="flex justify-between mt-[2%] md:gap-6">
          <div className="flex gap-2 items-center py-2 pl-3 pr-4 bg-[#ffff] w-[35%] rounded-xl border border-[#DBDADE] flex-grow">
            <IoSearchOutline className="text-gray-500" />
            <input
              type="text"
              placeholder={t("search")}
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
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">
                  {t("orderId")}
                </th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">
                  {t("requesterName")}
                </th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">
                  {t("requestDate")}
                </th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">
                  {t("boatType")}
                </th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">
                  {t("totalPrice")}
                </th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">
                  {t("depositPrice")}
                </th>
                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">
                  {t("status")}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentBookings?.map((booking) => (
                <tr
                  key={booking._id}
                  onClick={() =>
                    navigate(`/dashboard/booking-details/${booking._id}`)
                  }
                  className="border-b cursor-pointer border-[#DBDADE] hover:bg-gray-100"
                >
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    #{booking._id}
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    {booking.userId?.username || booking.username || "N/A"}
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    {new Date(booking.availableDates[0]).toLocaleDateString() ||
                      booking.availableDate.toLocaleDateString()}
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
                    €
                    {(
                      booking.amount && booking.amount !== 0
                        ? booking.amount
                        : booking.amountPaid || 0
                    ).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    €{booking.totalAmount.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 md:px-5 md:py-4 whitespace-nowrap text-sm text-[#4B465C]">
                    <span className="px-4 py-3 rounded-[10px] bg-[#FF7A00] bg-opacity-10 text-[#FF7A00] font-bold text-sm">
                      {t("pending")}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-row justify-between w-[97%] mt-4">
          <div>
            {t("showingEntries", {
              start: indexOfFirstItem + 1,
              end: Math.min(indexOfLastItem, filteredBookings.length),
              total: filteredBookings.length,
            })}
          </div>
          <div className="flex flex-row items-center justify-center gap-1 text-sm">
            <button
              className="bg-[#4B465C14] h-7 w-20 rounded-md"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {t("previous")}
            </button>
            <div className="flex gap-1">
              {[...Array(Math.ceil(filteredBookings.length / itemsPerPage)).keys()].map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page + 1)}
                    className={`w-6 h-7 ${
                      currentPage === page + 1
                        ? "bg-[#CBA557]"
                        : "bg-[#4B465C14]"
                    } flex justify-center items-center rounded-md`}
                  >
                    {page + 1}
                  </button>
                )
              )}
            </div>
            <button
              className="bg-[#4B465C14] h-7 w-14 rounded-md"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(filteredBookings.length / itemsPerPage)
              }
            >
              {t("next")}
            </button>
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 md:h-1/2 overflow-auto">
              <h2 className="text-lg font-bold mb-4">{t("addNewBooking")}</h2>
              <form onSubmit={handleNewBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700">{t("userName")}</label>
                  <input
                    type="text"
                    name="username"
                    value={newBooking.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">{t("email")}</label>
                  <input
                    type="email"
                    name="email"
                    value={newBooking.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    {t("mobileNumber")}
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={newBooking.mobile}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">{t("address")}</label>
                  <input
                    type="text"
                    name="address"
                    value={newBooking.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">{t("taxCode")}</label>
                  <input
                    type="text"
                    name="taxCode"
                    value={newBooking.taxCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">{t("boatName")}</label>
                  <select
                    name="boatName"
                    value={newBooking.boatName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="">{t("selectBoat")}</option>
                    {boatOptions.map((boat, index) => (
                      <option key={index} value={boat}>
                        {boat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">
                    {t("peopleOnBoard")}
                  </label>
                  <input
                    type="number"
                    name="peopleOnBoard"
                    value={newBooking.peopleOnBoard}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    {t("rentalType")}
                  </label>
                  <select
                    name="rentalType"
                    value={newBooking.rentalType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="">{t("selectRentalType")}</option>
                    <option value="with skipper">{t("withSkipper")}</option>
                    <option value="without skipper">{t("withoutSkipper")}</option>
                  </select>
                </div>
                {newBooking.rentalType === "with skipper" && (
                  <>
                    <div>
                      <label className="block text-gray-700">
                        {t("skipperName")}
                      </label>
                      <input
                        type="text"
                        name="skipperName"
                        value={newBooking.skipperName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        {t("skipperPhone")}
                      </label>
                      <input
                        type="tel"
                        name="skipperPhone"
                        value={newBooking.skipperPhone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </>
                )}
                <div>
                  <label className="block text-gray-700">
                    {t("availableDates")}
                  </label>
                  <DatePicker
                    selected={newBooking.availableDates[0]}
                    onChange={handleDateChange}
                    startDate={newBooking.availableDates[0]}
                    endDate={newBooking.availableDates[1]}
                    selectsRange
                    className="w-full px-3 py-2 border rounded"
                    dateFormat="yyyy/MM/dd"
                  />
                </div>
                {showTimeSlots && (
                  <>
                    <div>
                      <label className="block text-gray-700">
                        {t("startTime")}
                      </label>
                      <DatePicker
                        selected={newBooking.startTime}
                        onChange={(time) =>
                          setNewBooking((prev) => ({
                            ...prev,
                            startTime: time,
                          }))
                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">{t("endTime")}</label>
                      <DatePicker
                        selected={newBooking.endTime}
                        onChange={(time) =>
                          setNewBooking((prev) => ({
                            ...prev,
                            endTime: time,
                          }))
                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </>
                )}
                <div>
                  <label className="block text-gray-700">
                    {t("departurePoint")}
                  </label>
                  <input
                    type="text"
                    name="departurePoint"
                    value={newBooking.departurePoint}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">{t("arrivalPoint")}</label>
                  <input
                    type="text"
                    name="arrivalPoint"
                    value={newBooking.arrivalPoint}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">{t("accessories")}</label>
                  {newBooking.accessories.map((accessory, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={accessory}
                        onChange={(e) =>
                          handleAccessoryChange(index, e.target.value)
                        }
                        className="w-full px-3 py-2 border rounded"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveAccessory(index)}
                        className="ml-2 px-3 py-2 bg-red-500 text-white rounded"
                      >
                        {t("remove")}
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddAccessory}
                    className="px-4 py-2 bg-[#CBA557] text-white rounded"
                  >
                    {t("addAccessory")}
                  </button>
                </div>
                <div>
                  <label className="block text-gray-700">
                    {t("customerNotes")}
                  </label>
                  <textarea
                    name="customerNotes"
                    value={newBooking.customerNotes}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700">
                    {t("petrolPrepaid")}
                  </label>
                  <input
                    type="checkbox"
                    name="petrolPrepaid"
                    checked={newBooking.petrolPrepaid}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">{t("contract")}</label>
                  <input
                    type="checkbox"
                    name="contract"
                    checked={newBooking.contract}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    {t("bookingPlatform")}
                  </label>
                  <select
                    name="bookingPlatform"
                    value={newBooking.bookingPlatform}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="">{t("selectPlatform")}</option>
                    {platformOptions.map((platform, index) => (
                      <option key={index} value={platform}>
                        {platform}
                      </option>
                    ))}
                  </select>
                </div>
                {newBooking.bookingPlatform && (
                  <>
                    <div>
                      <label className="block text-gray-700">
                        {t("platformInvoice")}
                      </label>
                      <input
                        type="file"
                        name="platformInvoice"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">
                        {t("platformAmount")}
                      </label>
                      <input
                        type="number"
                        name="platformAmount"
                        value={newBooking.platformAmount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </>
                )}
                <div>
                  <label className="block text-gray-700">
                    {t("amountPaid")}
                  </label>
                  <input
                    type="number"
                    name="amountPaid"
                    value={newBooking.amountPaid}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    {t("totalAmount")}
                  </label>
                  <input
                    type="number"
                    name="totalAmount"
                    value={newBooking.totalAmount}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    {t("cancel")}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#CBA557] text-white rounded"
                  >
                    {t("save")}
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
