import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import baseURL from "../../../APi/BaseUrl";
import { jwtDecode } from "jwt-decode";
import { format } from "date-fns";

// Import your Details, Greeting, and Payment components
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
  const [boatDetails, setBoatDetails] = useState(null);
  const [selectedRateType, setSelectedRateType] = useState(""); // Use a string to store selected rate type
  const [selectedDate, setSelectedDate] = useState(""); // State for selected date
  const [paymentOption, setPaymentOption] = useState('full');
  const [user, setUser] = useState(""); // Initialize user state
  const [activeComponent, setActiveComponent] = useState("details"); // Default to 'details' component

  const [bookingDate, setBookingDate] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [isWeekend, setIsWeekend] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const getBoatDetails = async () => {
      try {
        const details = await fetchBoatDetailsById(id);
        setBoatDetails(details);
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

  const handleSelection = (rateType, isChecked) => {
    if (isChecked) {
      setSelectedRateType(rateType);
    } else {
      setSelectedRateType("");
    }
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);

    const { rate } = boatDetails;
    if (rate && rate.length > 0) {
      const available = rate.some(rate => {
        const startDate = new Date(rate.startDate);
        const endDate = new Date(rate.endDate);
        return selectedDate >= startDate && selectedDate <= endDate;
      });

      setIsAvailable(available);
    } else {
      setIsAvailable(false); // If no rates are defined, assume not available
    }

    const dayOfWeek = selectedDate.getDay(); 
    setIsWeekend(dayOfWeek === 0 || dayOfWeek === 6);

    setBookingDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let amountToCharge = 0; 
    let rateType = ''; 

    console.log("selectedRateType", selectedRateType);
    console.log("boatDetails", boatDetails);

    if (boatDetails && boatDetails.rate) {
      boatDetails.rate.forEach(rateDetails => {
        if (selectedRateType === rateDetails?.normalDayRates?.halfDayMorning) {
          rateType = 'halfDayMorning';
        } else if (selectedRateType === rateDetails?.normalDayRates?.halfDayEvening) {
          rateType = 'halfDayEvening';
        } else if (selectedRateType === rateDetails?.normalDayRates?.fullDay) {
          rateType = 'fullDay';
        } else if (selectedRateType === rateDetails?.weekendRates?.halfDayMorning) {
          rateType = 'weekendHalfDayMorning';
        } else if (selectedRateType === rateDetails?.weekendRates?.halfDayEvening) {
          rateType = 'weekendHalfDayEvening';
        } else if (selectedRateType === rateDetails?.weekendRates?.fullDay) {
          rateType = 'weekendFullDay';
        }
      });
    }

    // Calculate amount to charge based on payment option
    if (paymentOption === 'partial') {
      amountToCharge = selectedRateType * 0.3; // 30% of selected rate type
    } else {
      amountToCharge = selectedRateType; // Full amount of selected rate type
    }

    // Convert amount to cents for Stripe
    const amountToChargeInCents = Math.round(amountToCharge * 100);

    try {
      const response = await baseURL.post('/checkout/payment', {
        userId: user,
        boatName: boatDetails?.boat?.type,
        amount: amountToChargeInCents,
        rateType, // Pass dynamically selected rateType
        totalAmount: amountToCharge,
        availableDate: isAvailable
      });

      const { sessionId } = await response.data;
      console.log("sessionId", sessionId);
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe Checkout error:', error);
      }
    } catch (error) {
      console.error('Payment failed:', error);

      // Show error using Toastify
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(`Payment failed: ${error.response.data.message}`);
      } else {
        toast.error('Payment failed. Please try again.');
      }
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

  console.log("boatDetails",boatDetails)

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
              {boatDetails?.boatImages.map((item) => (
                <img key={item.id} src={item.avatar} alt="" className="md:w-64 mb-4" />
              ))}
              {boatDetails ? (
                <>
                  <h2 className="heading-book mt-[4%] text-[#383838]">
                    {boatDetails?.boat?.type}
                  </h2>
                  {boatDetails?.rate.map((item, key) => (
                    <div className="flex flex-col gap-1 mt-[3%]" key={key}>
                      <p>
                        From:{" "}
                        <span className="text-[#676767] font-normal">
                          {format(new Date(item?.startDate), 'dd MMMM yyyy')}
                        </span>
                      </p>
                      <p>
                        To:{" "}
                        <span className="text-[#676767] font-normal">
                          {format(new Date(item?.endDate), 'dd MMMM yyyy')}
                        </span>
                      </p>
                      <p className="text-[#676767] font-normal">{boatDetails?.description.map((item)=>(
                        <p className="text-[#676767] font-normal">
                          {item.rentalType === "bareBoat" ? " withSkipper" :"without Skipper"}
                        </p>
                      ))}</p>
                      <div className="mb-4">
                        <label htmlFor="bookingDate" className="block text-gray-700 text-sm font-bold mb-2">
                          Select Booking Date:
                        </label>
                        <input
                          type="date"
                          id="bookingDate"
                          name="bookingDate"
                          value={bookingDate}
                          onChange={handleDateChange}
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${!isAvailable ? 'border-red-500' : ''}`}
                        />
                        {!isAvailable && (
                          <p className="text-red-500 text-xs italic">This boat is not available on the selected date.</p>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <p>Loading boat details...</p>
              )}

              {/* Rate selection checkboxes */}
              {boatDetails?.rate.map((item, key) => (
                <div key={key} className="border rounded-lg p-4 my-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id={`rate-${key}-halfDayMorning`}
                      name={`rate-${key}-halfDayMorning`}
                      value={item?.normalDayRates?.halfDayMorning}
                      onChange={(e) => handleSelection(item?.normalDayRates?.halfDayMorning, e.target.checked)}
                      checked={selectedRateType === item?.normalDayRates?.halfDayMorning}
                      className="ml-2"
                    />
                    <label htmlFor={`rate-${key}-halfDayMorning`} className="font-medium text-[#383838] text-md mb-2">
                      {isWeekend ? "Weekend Price Half Day Morning:" : "Price Half Day Morning:"}
                      <span className="text-[#676767] font-normal"> ${isWeekend ? item?.weekendRates?.halfDayMorning : item?.normalDayRates?.halfDayMorning}</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id={`rate-${key}-halfDayEvening`}
                      name={`rate-${key}-halfDayEvening`}
                      value={item?.normalDayRates?.halfDayEvening}
                      onChange={(e) => handleSelection(item?.normalDayRates?.halfDayEvening, e.target.checked)}
                      checked={selectedRateType === item?.normalDayRates?.halfDayEvening}
                      className="ml-2"
                    />
                    <label htmlFor={`rate-${key}-halfDayEvening`} className="font-medium text-[#383838] text-md mb-2">
                      {isWeekend ? "Weekend Price Half Day Evening:" : "Price Half Day Evening:"}
                      <span className="text-[#676767] font-normal"> ${isWeekend ? item?.weekendRates?.halfDayEvening : item?.normalDayRates?.halfDayEvening}</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id={`rate-${key}-fullDay`}
                      name={`rate-${key}-fullDay`}
                      value={item?.normalDayRates?.fullDay}
                      onChange={(e) => handleSelection(item?.normalDayRates?.fullDay, e.target.checked)}
                      checked={selectedRateType === item?.normalDayRates?.fullDay}
                      className="ml-2"
                    />
                    <label htmlFor={`rate-${key}-fullDay`} className="font-medium text-[#383838] text-md mb-2">
                      {isWeekend ? "Weekend Price Full Day:" : "Price Full Day:"}
                      <span className="text-[#676767] font-normal"> ${isWeekend ? item?.weekendRates?.fullDay : item?.normalDayRates?.fullDay}</span>
                    </label>
                  </div>
                </div>
              ))}
              {/* Payment options */}
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
              {/* Additional buttons if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
