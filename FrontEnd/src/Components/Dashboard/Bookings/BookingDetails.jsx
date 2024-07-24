import React, { useState } from "react";
import dummyBoatImage from "../../../assets/Images/annina.webp";
import ReminderModal from "./ReminderModal";
import { useNavigate } from "react-router-dom";
import InvoiceModal from "./InvoiceModal";
import RentalAgreementModal from "./RentalAgreementModal";
import CheckInModal from "./CheckInModal";
import CheckOutModal from "./CheckOutModal";
import CancelReservationModal from "./CancelReservationModal";
const BookingDetails = () => {
  const [fuelQuantity, setFuelQuantity] = useState(1);
  const [fuelPrice, setFuelPrice] = useState(100);
  const totalPrice = fuelQuantity * fuelPrice;
  const [isRPopUp, setIsRPopUp] = useState(null);
  const [isINPopUp, setIsINPopUp] = useState(null);
  const [isRAPopUp, setIsRAPopUp] = useState(null);
  const [isCheckIN, setIsCheckIN] = useState(null);
  const [isCheckOut, setIsCheckOut] = useState(null);
  const [isCancel, setIsCancel] = useState(null);
  const navigate = useNavigate();
  const user = {
    name: "John Doe",
    phone: "0998123171",
    email: "abc123@email.com",
    profilePic: "/images/account-person.png",
    bookingNumber: "750391",
    bookingStartDate: "5/15/2024 at 08:00",
    bookingStartTime: "8:00am",
    bookingEndDate: "5/5/2023",
    bookingEndTime: "5:00pm",
    boatImage: dummyBoatImage,
    boatName: "Sea Ghost open",
    subtotal: 5712,
    skipperCharges: 0,
    total: 5712,
    amountPaid: 0,
    amountDue: 5712,
  };

  return (
    <div className="sm:m-8 mt-8 grid md:grid-cols-5 bg-white rounded-2xl">
      <ReminderModal isRPopUp={isRPopUp} setIsRPopUp={setIsRPopUp} />
      <InvoiceModal isINPopUp={isINPopUp} setIsINPopUp={setIsINPopUp} />
      <RentalAgreementModal isRAPopUp={isRAPopUp} setIsRAPopUp={setIsRAPopUp} />
      <CheckInModal isCheckIN={isCheckIN} setIsCheckIN={setIsCheckIN} />
      <CheckOutModal isCheckOut={isCheckOut} setIsCheckOut={setIsCheckOut} />
      <CancelReservationModal isCancel={isCancel} setIsCancel={setIsCancel} />
      <div className=" md:col-span-3 pr-4">
        <div className="p-4 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <img
              onClick={() => navigate(-1)}
              src="/icons/icon-yellow-back-arrow-box.svg"
            />
            <h3 className=" text-black text-2xl">Booking Details</h3>
          </div>
          <div className="flex items-center">
            <img
              src={user.profilePic}
              alt="profile"
              className="w-24 h-24 rounded-lg mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p>{user.phone}</p>
              <p className="flex items-center flex-wrap gap-3">
                {user.email}{" "}
                <span
                  onClick={() => setIsRPopUp(!isRPopUp)}
                  className="bg-[#faf6ef] cursor-pointer text-[#cba353] text-sm font-semibold mr-2 px-6 py-2 rounded"
                >
                  Reminder
                </span>
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <hr className="mt-6" />
          <div className="mt-6">
            <h3 className="text-lg font-bold">Documents</h3>
            <div className="flex gap-4 flex-wrap mt-4">
              <button className="bg-[#cba353] text-white py-2 px-4 rounded-lg flex items-center gap-2">
                <img src="/icons/icon-white-pdf-file.svg" />
                RULES OF CONDUCT
              </button>
              <button
                onClick={() => setIsRAPopUp(!isRAPopUp)}
                className="bg-[#cba353] text-white py-2 px-4 rounded-lg flex items-center gap-2"
              >
                <img src="/icons/icon-white-pdf-file.svg" />
                RENTAL AGREEMENT
              </button>
              <button
                onClick={() => setIsINPopUp(!isINPopUp)}
                className="bg-[#cba353] text-white py-2 px-4 rounded-lg flex items-center gap-2"
              >
                <img src="/icons/icon-white-pdf-file.svg" />
                INVOICE
              </button>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="mt-6">
            <h3 className="text-lg font-bold">Fuel Charges</h3>
            <div className="flex gap-4 flex-wrap items-start mt-2">
              <div className="flex flex-col gap-2">
                <label className=" text-black">Price per Liter</label>
                <div className="flex items-center">
                  <span className="text-lg border border-gray-300 rounded p-1.5 border-r-0 rounded-r-none">
                    €
                  </span>
                  <input
                    type="number"
                    value={fuelPrice}
                    onChange={(e) => setFuelPrice(e.target.value)}
                    className="w-20 border border-gray-300 outline-none rounded rounded-l-none p-2"
                    placeholder="Enter"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className=" text-black">Fuel Quantity</label>
                <input
                  type="number"
                  value={fuelQuantity}
                  onChange={(e) => setFuelQuantity(e.target.value)}
                  placeholder="1 Liter"
                  className="w-20 border border-gray-300 outline-none rounded p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className=" text-black">Total Price</label>
                <span className="ml-auto font-bold">{totalPrice}</span>
              </div>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4">
            <button
              onClick={() => setIsCheckIN(!isCheckIN)}
              className="bg-[#cba353] text-white  py-2 px-4 rounded-lg"
            >
              CHECK IN
            </button>
            <button
              onClick={() => setIsCheckOut(!isCheckOut)}
              className="bg-[#cba353] text-white py-2 px-4 rounded-lg"
            >
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
      <div className=" md:col-span-2 p-4">
        <div className="p-4 border rounded-2xl sm:p-8">
          <h2 className="text-xl font-bold">Booking No.{user.bookingNumber}</h2>
          <p className="mt-2">Rental was There.</p>
          <p className="mt-2">
            The rental was begin on {user.bookingStartDate}.
          </p>
          <div className="flex space-x-4 mt-4">
            <div>
              <p className="text-gray-600">Arrive</p>
              <p className="font-bold">{user.bookingStartTime}</p>
            </div>
            <div>
              <p className="text-gray-600">Departure</p>
              <p className="font-bold">{user.bookingEndTime}</p>
            </div>
          </div>
          <div className="mt-4">
            <img
              src={user.boatImage}
              alt="boat"
              className="w-full rounded-lg"
            />
            <p className="text-center font-bold mt-2">{user.boatName}</p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${user.subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Skipper Charges:</p>
              <p>${user.skipperCharges}</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total:</p>
              <p>${user.total}</p>
            </div>
            <div className="flex justify-between">
              <p>Amount Paid:</p>
              <p>${user.amountPaid}</p>
            </div>
            <div className="flex justify-between">
              <p>Amount Due:</p>
              <p>${user.amountDue}</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-[#e6f3e6] text-[#0d860d] flex items-center gap-2 justify-center font-semibold py-2 px-4 rounded-lg w-full">
              Change reservation Status
              <img src="/icons/icon-green-down-arrow.svg" />
            </button>
          </div>
          <div className="mt-2 text-center">
            <button
              onClick={() => setIsCancel(!isCancel)}
              className="text-red-500"
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
