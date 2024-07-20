import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import baseURL from "../../../APi/BaseUrl";
import {jwtDecode} from "jwt-decode";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Details from "./Details";
import Greeting from "./Greeting";
import Payment from "./Payment";
import { UserContext } from "../../../Context/UserContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stripePromise = loadStripe('pk_test_51OwXJ9RtqZkTuUjdPn7IZ2nUJQ77VYiDdsW3s8ddWFQRUh4yUWKiXhYLAy54Y2249fgzSTPtcvfgUr2MoiWhBE5p00zp6MUFHe');

const Checkout = () => {
  const { fetchBoatDetailsById } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [boatDetails, setBoatDetails] = useState(null);
  const [selectedRate, setSelectedRate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [paymentOption, setPaymentOption] = useState('full');
  const [user, setUser] = useState("");
  const [activeComponent, setActiveComponent] = useState("details");
  const [isAvailable, setIsAvailable] = useState(true);
  const [isWeekend, setIsWeekend] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const getBoatDetails = async () => {
      try {
        const details = await fetchBoatDetailsById(id);
        setBoatDetails(details);
        setSelectedRate(details?.rate?.[0]);
      } catch (error) {
        console.error('Error fetching boat details:', error);
      }
    };

    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded._id);
    }

    if (id) {
      getBoatDetails();
    }
  }, [id, fetchBoatDetailsById]);

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const minimumRentalDuration = boatDetails?.rate[0]?.minimumRentalDuration;
    const durationInDays = minimumRentalDuration ? parseInt(minimumRentalDuration.split(' ')[0]) : 1;

    const newEndDate = new Date(date);
    newEndDate.setDate(date.getDate() + durationInDays - 1);
    setEndDate(newEndDate);

    if (boatDetails && boatDetails.boatBookings) {
      const available = !boatDetails.boatBookings.some(booking => {
        const startDate = new Date(booking.startDate);
        const endDate = new Date(booking.endDate);
        return (date >= startDate && date <= endDate) || (newEndDate >= startDate && newEndDate <= endDate);
      });

      setIsAvailable(available);
    } else {
      setIsAvailable(true);
    }

    const dayOfWeek = date.getDay();
    setIsWeekend(dayOfWeek === 0 || dayOfWeek === 6);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      toast.error("User must be logged in to book a boat");
      setTimeout(() => {
        navigate('/login');
      }, 2500);
      return;
    }

    if (!selectedRate) {
      toast.error("Please select a rate.");
      return;
    }

    let amountToCharge = selectedRate.oneDayRate; // Example rate for one day
    if (paymentOption === 'partial') {
      amountToCharge = amountToCharge * 0.3;
    }

    const amountToChargeInCents = Math.round(amountToCharge * 100);

    try {
      const boatName = boatDetails?.rental?.map((item) => item.BoatName).join(', ');

      const response = await baseURL.post('/checkout/payment', {
        userId: user,
        boatName,
        amount: amountToChargeInCents,
        rateType: selectedRate.nameOfTheRate,
        totalAmount: amountToCharge,
        availableDate: selectedDate,
        boatId: boatDetails?.boat._id
      });

      const { sessionId } = await response.data;
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe Checkout error:', error);
        toast.error('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment failed:', error);
      toast.error(error.response?.data?.message || 'Payment failed. Please try again.');
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "payment":
        return <Payment />;
      case "greeting":
        return <Greeting />;
      default:
        return <Details id={id} />;
    }
  };

  const getDisabledDates = () => {
    if (!boatDetails || !boatDetails.boatBookings) {
      return [];
    }

    return boatDetails.boatBookings.map(booking => {
      const start = new Date(booking.startDate);
      const end = new Date(booking.endDate);
      const dates = [];
      while (start <= end) {
        dates.push(new Date(start));
        start.setDate(start.getDate() + 1);
      }
      return dates;
    }).flat();
  };

  const disabledDates = getDisabledDates();

  return (
    <div>
      <div className="checkout-bg !h-[50svh] md:!h-[100svh]">
        <div className="h-[50svh] md:h-[100svh] flex flex-col justify-center mx-[6%] ">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Check Out
          </h1>
        </div>
      </div>
      <div className=" mx-[6%] mt-[3%]">
        <h1 className="font-medium text-3xl text-[#000000]">Check Out</h1>
        <p className="para-book mt-2">
          Book your rental in two simple steps. <br />
          Renting boats from us means relying on a competent team that takes
          care of all the pre and post boat rental phases. But not only that,
          all our boats are periodically checked and tested according to current
          regulations. This is why boat rental with DaDi Rent is safe. Not only
          in the price but also in the quality of our boats and in the service
          that we are able to provide always and in any case.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-[2%] mt-[2%] space-y-[5%] md:space-y-[0%]">
          <div className="md:w-[35%] bg-white rounded-xl shadow-checkout mb-[1%]">
            <div className="py-9 px-12 flex flex-col justify-center items-center">
              <h2 className="text-xl font-medium leading-7">
                Booking #240401-104107563
              </h2>
            </div>
            <hr className="border border-[#DCDCDC]" />

            <div className="py-9 px-12 flex justify-center flex-col text-[#383838]">
              {boatDetails?.boatImages?.map((item) => (
                <img key={item.id} src={item.images[0]} alt="" className="md:w-64 mb-4" />
              ))}
              {boatDetails ? (
                <>
                  <h2 className="heading-book mt-[4%] text-[#383838]">
                    {boatDetails?.rental?.map((item) => (item.BoatName))}
                  </h2>
                  <div className="flex flex-col gap-1 mt-[3%]">
                    <p>
                      From:{" "}
                      <span className="text-[#676767] font-normal">
                        {format(new Date(boatDetails?.boatBookings.map((item)=>(item.startDate))), 'dd MMMM yyyy')}
                      </span>
                    </p>
                    <p>
                      To:{" "}
                      <span className="text-[#676767] font-normal">
                        {format(new Date(boatDetails?.boatBookings.map((item)=>(item.endDate))), 'dd MMMM yyyy')}
                      </span>
                    </p>
                    <p className="text-[#676767] font-normal">{boatDetails?.description?.map((item) => (
                      <p className="text-[#676767] font-normal">
                        {item.rentalType === "bareBoat" ? " withSkipper" : "without Skipper"}
                      </p>
                    ))}</p>
                    <div className="mb-4">
                      <label htmlFor="bookingDate" className="block text-gray-700 text-sm font-bold mb-2">
                        Select Booking Date:
                      </label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        monthsShown={2}
                        excludeDates={disabledDates}
                        dateFormat="dd/MM/yyyy"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!isAvailable ? 'border-red-500' : ''}`}
                      />
                      {!isAvailable && (
                        <p className="text-red-500 text-xs italic">This boat is not available on the selected date.</p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <p>Loading boat details...</p>
              )}
              <div className="mb-4">
                {selectedRate && (
                  <p className="text-gray-700 text-xl font-bold">
                    Starting from: {selectedRate.oneDayRate} per day
                  </p>
                )}
              </div>
              <div className="my-4">
                <h2 className="font-medium text-lg mb-2">Payment Option:</h2>
                <label className="block mt-2">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="full"
                    checked={paymentOption === 'full'}
                    onChange={() => setPaymentOption('full')}
                    className="mr-2"
                  />
                  Pay Full Amount
                </label>
                <label className="block mt-2">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="partial"
                    checked={paymentOption === 'partial'}
                    onChange={() => setPaymentOption('partial')}
                    className="mr-2"
                  />
                  Pay 30% (Remaining 70% will be paid at the harbour)
                </label>
              </div>
              <button
                onClick={handleSubmit}
                className={`w-[90%] py-2 bg-[#f24f04] rounded-lg text-white font-semibold mt-[3%]`}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="md:w-[65%] bg-white rounded-xl shadow-checkout px-3">
            {renderComponent()}
            <div className="flex flex-col items-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
