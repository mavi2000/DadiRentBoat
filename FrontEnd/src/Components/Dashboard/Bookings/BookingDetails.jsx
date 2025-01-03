import React, { useState, useEffect, useContext } from "react";
import { format, isValid } from "date-fns";
import dummyBoatImage from "../../../assets/Images/annina.webp";
import ReminderModal from "./ReminderModal";
import InvoiceModal from "./InvoiceModal";
import RentalAgreementModal from "./RentalAgreementModal";
import CheckInModal from "./CheckInModal";
import CheckOutModal from "./CheckOutModal";
import CancelReservationModal from "./CancelReservationModal";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../../../../Context/AdminContext";

const BookingDetails = () => {
  const { id } = useParams();
  const { getSinglePayment } = useContext(AdminContext);

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fuelQuantity, setFuelQuantity] = useState(1);
  const [fuelPrice, setFuelPrice] = useState(100);
  const [isRPopUp, setIsRPopUp] = useState(null);
  const [isINPopUp, setIsINPopUp] = useState(null);
  const [isRAPopUp, setIsRAPopUp] = useState(null);
  const [isCheckIN, setIsCheckIN] = useState(null);
  const [isCheckOut, setIsCheckOut] = useState(null);
  const [isCancel, setIsCancel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const bookingData = await getSinglePayment(id);
        console.log("Fetched booking data:", bookingData);
        setBooking(bookingData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id, getSinglePayment]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!booking) return <div>No booking details found</div>;

  const totalPrice = fuelQuantity * fuelPrice;
  const arrivalDate = isValid(new Date(booking?.createdAt))
    ? format(new Date(booking?.createdAt), "PPPP")
    : "N/A";
  const departureDate = isValid(new Date(booking?.availableDates[0]))
    ? format(new Date(booking?.availableDates[0]), "PPPP")
    : "N/A";

  return (
    <div className="sm:m-8 mt-8 grid md:grid-cols-5 bg-white rounded-2xl">
      <ReminderModal
        isRPopUp={isRPopUp}
        setIsRPopUp={setIsRPopUp}
        booking={booking}
      />
      <InvoiceModal
        isINPopUp={isINPopUp}
        setIsINPopUp={setIsINPopUp}
        booking={booking}
      />
      <RentalAgreementModal
        isRAPopUp={isRAPopUp}
        setIsRAPopUp={setIsRAPopUp}
        booking={booking}
      />
      <CheckInModal isCheckIN={isCheckIN} setIsCheckIN={setIsCheckIN} />
      <CheckOutModal isCheckOut={isCheckOut} setIsCheckOut={setIsCheckOut} />
      <CancelReservationModal
        isCancel={isCancel}
        setIsCancel={setIsCancel}
        booking={booking}
      />
      <div className="md:col-span-3 pr-4">
        <div className="p-4 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <img
              onClick={() => navigate(-1)}
              src="/icons/icon-yellow-back-arrow-box.svg"
              alt="Back"
            />
            <h3 className="text-black text-2xl">Booking Details</h3>
          </div>
          <div className="flex flex-col text-center sm:text-start sm:flex-row gap-3 items-center">
            <img
              src={booking?.userId?.image || "/images/account-person.png"}
              alt="profile"
              className="w-24 h-24 rounded-lg sm:mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{booking.userId?.username}</h2>
              <p>{booking?.userId?.phoneNumber}</p>
              <p className="flex items-center flex-col flex-wrap sm:flex-row gap-3">
                {booking?.userId?.email}{" "}
                <span
                  onClick={() => setIsRPopUp(!isRPopUp)}
                  className="bg-[#faf6ef] cursor-pointer text-[#cba353] text-sm font-semibold mr-2 px-6 py-2 rounded"
                >
                  Reminder
                </span>
              </p>
            </div>
          </div>
          <p className="mt-6 px-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <hr className="mt-6" />
          <div className="mt-6">
            <h3 className="text-lg font-bold">Documents</h3>
            <div className="flex gap-4 flex-wrap mt-4">
              <button className="bg-[#cba353] text-white py-2 px-4 rounded-lg flex items-center gap-2">
                <img src="/icons/icon-white-pdf-file.svg" alt="PDF" />
                RULES OF CONDUCT
              </button>
              <button
                onClick={() => setIsRAPopUp(!isRAPopUp)}
                className="bg-[#cba353] text-white py-2 px-4 rounded-lg flex items-center gap-2"
              >
                <img src="/icons/icon-white-pdf-file.svg" alt="PDF" />
                RENTAL AGREEMENT
              </button>
              <button
                onClick={() => setIsINPopUp(!isINPopUp)}
                className="bg-[#cba353] text-white py-2 px-4 rounded-lg flex items-center gap-2"
              >
                <img src="/icons/icon-white-pdf-file.svg" alt="PDF" />
                INVOICE
              </button>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4">
            <button
              onClick={() => setIsCheckIN(!isCheckIN)}
              className="bg-[#cba353] text-white py-2 px-4 rounded-lg"
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
      <div className="md:col-span-2 min-w-full p-4">
        <div className="p-4 border rounded-2xl sm:p-8">
          <h2 className="text-xl font-bold truncate">
            Booking No. {booking._id}
          </h2>
          <p className="mt-2">Rental was There.</p>
          <p className="mt-2">The rental began on {departureDate}.</p>
          <div className="flex space-x-4 mt-4">
            <div>
              <p className="text-gray-600">Arrive</p>
              <p className="font-bold">{arrivalDate}</p>
            </div>
            <div>
              <p className="text-gray-600">Departure</p>
              <p className="font-bold">{departureDate}</p>
            </div>
          </div>
          <div className="mt-4">
            <img
              src={booking.boatImage ? booking.boatImage[0] : dummyBoatImage}
              alt="boat"
              className="w-full rounded-lg"
            />
            <p className="text-center font-bold mt-2">{booking.boatName}</p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>€{booking.subtotal || booking.totalAmount}</p>
            </div>
            <div className="flex justify-between">
              <p>Skipper Charges:</p>
              <p>€{booking.skipperCharges || 0}</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total:</p>
              <p>€{booking.totalAmount}</p>
            </div>
            <div className="flex justify-between">
              <p>Amount Due:</p>
              <p>€{booking.amountDue || booking.totalAmount}</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-[#e6f3e6] text-[#0d860d] flex items-center gap-2 justify-center font-semibold py-2 px-4 rounded-lg w-full">
              Change reservation Status
              <img src="/icons/icon-green-down-arrow.svg" alt="Arrow" />
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
