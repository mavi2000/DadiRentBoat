import Annina from "../../assets/Images/annina.webp";
import Payment from "./Payment";
import Greeting from "./Greeting";
import Details from "./Details";
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import { format } from 'date-fns';
import { loadStripe } from '@stripe/stripe-js';
import baseURL from "../../../APi/BaseUrl";
import { jwtDecode } from "jwt-decode";


const stripePromise = loadStripe('pk_test_51OwXJ9RtqZkTuUjdPn7IZ2nUJQ77VYiDdsW3s8ddWFQRUh4yUWKiXhYLAy54Y2249fgzSTPtcvfgUr2MoiWhBE5p00zp6MUFHe');

const Checkout = () => {
  const { id } = useParams();
  const { fetchBoatDetailsById } = useContext(UserContext);
  const [boatDetails, setBoatDetails] = useState(null);
  const [error, setError] = useState(null);
  const [activeComponent, setActiveComponent] = useState("details");
  const [selectedRate, setSelectedRate] = useState(null);
  const [paymentOption, setPaymentOption] = useState('full'); // New state for payment option
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryOfBirth, setCountryOfBirth] = useState('');
  const [cityOfBirth, setCityOfBirth] = useState('');
  const [user ,setUser] =useState("")

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const getBoatDetails = async () => {
      try {
        console.log('Fetching boat details for ID:', id); // Log ID being used
        const details = await fetchBoatDetailsById(id);
        console.log('Boat details fetched:', details); // Log fetched details
        setBoatDetails(details);
      } catch (error) {
        console.error('Error fetching boat details:', error); // Log error
        setError(error.message || 'Error loading boat details');
      }
    };

    if (token) {
      const decoded = jwtDecode(token)
      setUser(decoded._id)
    }

    if (id) {
      getBoatDetails();
    }
  }, [id, fetchBoatDetailsById]);

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

  const isLogin = true; // Placeholder for login check

  console.log('id:', id);
  console.log('boatDetails:', boatDetails);

  const handleSelection = (rate) => {
    setSelectedRate(rate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let amountToCharge = selectedRate * 100; // Default to full amount

    if (paymentOption === 'partial') {
      amountToCharge = (selectedRate * 0.3) * 100; // 30% of the selected amount
    }

    try {
      const response = await baseURL.post('/checkout/payment', {
        userId: user, // Replace with actual user ID
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        countryOfBirth: countryOfBirth,
        cityOfBirth: cityOfBirth,
        message: 'Your custom message', // Optional
        amount: amountToCharge, // Stripe expects the amount in cents
      });

      const { sessionId } = await response.data;
      console.log("sessionId", sessionId);
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe Checkout error:', error);
      }
    } catch (error) {
      console.error('Payment failed', error);
    }
  };

  console.log("selectedRate", selectedRate);
  console.log("user", user);

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
                      <p>
                        No of persons:{" "}
                        <span className="text-[#676767] font-normal">
                          {boatDetails?.boat?.boardingCapacity}
                        </span>
                      </p>
                      {boatDetails?.description.map((descItem, descKey) => (
                        <div className="flex flex-col gap-1 mt-[3%]" key={descKey}>
                          <p>
                            {descItem?.rentalType?.withoutSkipper ? "Without Skipper" : "With Skipper"}:{" "}
                            <span className="text-[#676767] font-normal">
                              {descItem?.rentalType?.withoutSkipper ? "Yes" : "No"}
                            </span>
                          </p>
                        </div>
                      ))}
                      <p>Full Day</p>
                      <p className="text-[#EA5455]">Fuel Not Included</p>
                    </div>
                  ))}
                </>
              ) : (
                <p>Loading boat details...</p>
              )}
              {boatDetails?.rate.map((item, key) => (
                <div key={key} className="border rounded-lg p-4 my-4 shadow-lg">
                  <h1 className="font-medium text-[#383838] text-sm mb-2">
                    Price Half Day Morning: 
                    <span className="text-[#676767] font-normal"> ${item?.normalDayRates?.halfDayMorning}</span>
                    <input 
                      type="radio" 
                      name="rate" 
                      value={item?.normalDayRates?.halfDayMorning} 
                      onChange={() => handleSelection(item?.normalDayRates?.halfDayMorning)} 
                      className="ml-2"
                    />
                  </h1>
                  <h1 className="font-medium text-[#383838] text-sm mb-2">
                    Price Half Day Evening: 
                    <span className="text-[#676767] font-normal"> ${item?.normalDayRates?.halfDayEvening}</span>
                    <input 
                      type="radio" 
                      name="rate" 
                      value={item?.normalDayRates?.halfDayEvening} 
                      onChange={() => handleSelection(item?.normalDayRates?.halfDayEvening)} 
                      className="ml-2"
                    />
                  </h1>
                  <h1 className="font-medium text-[#383838] text-sm mb-2">
                    Price Full Day: 
                    <span className="text-[#676767] font-normal"> ${item?.normalDayRates?.fullDay}</span>
                    <input 
                      type="radio" 
                      name="rate" 
                      value={item?.normalDayRates?.fullDay} 
                      onChange={() => handleSelection(item?.normalDayRates?.fullDay)} 
                      className="ml-2"
                    />
                  </h1>
                  <h1 className="font-medium text-[#383838] text-md mb-2">
                    Weekend Price Half Day Morning: 
                    <span className="text-[#676767] font-normal"> ${item?.weekendRates?.halfDayMorning}</span>
                    <input 
                      type="radio" 
                      name="rate" 
                      value={item?.weekendRates?.halfDayMorning} 
                      onChange={() => handleSelection(item?.weekendRates?.halfDayMorning)} 
                      className="ml-2"
                    />
                  </h1>
                  <h1 className="font-medium text-[#383838] text-md mb-2">
                    Weekend Price Half Day Evening: 
                    <span className="text-[#676767] font-normal"> ${item?.weekendRates?.halfDayEvening}</span>
                    <input 
                      type="radio" 
                      name="rate" 
                      value={item?.weekendRates?.halfDayEvening} 
                      onChange={() => handleSelection(item?.weekendRates?.halfDayEvening)} 
                      className="ml-2"
                    />
                  </h1>
                  <h1 className="font-medium text-[#383838] text-md mb-2">
                    Weekend Price Full Day: 
                    <span className="text-[#676767] font-normal"> ${item?.weekendRates?.fullDay}</span>
                    <input 
                      type="radio" 
                      name="rate" 
                      value={item?.weekendRates?.fullDay} 
                      onChange={() => handleSelection(item?.weekendRates?.fullDay)} 
                      className="ml-2"
                    />
                  </h1>
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
              {/* <button
                onClick={() => setActiveComponent("details")}
                className={`w-[90%] py-2 bg-[#f24f04] rounded-lg text-white font-semibold mt-[3%]`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveComponent("greeting")}
                className={`w-[90%] py-2 bg-[#f24f04] rounded-lg text-white font-semibold mt-[3%]`}
              >
                Greeting
              </button>
              <button
                onClick={() => setActiveComponent("payment")}
                className={`w-[90%] py-2 bg-[#f24f04] rounded-lg text-white font-semibold mt-[3%]`}
              >
                Payment
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
