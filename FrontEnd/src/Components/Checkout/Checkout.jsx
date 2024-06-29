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
const stripePromise = loadStripe('pk_test_51OwXJ9RtqZkTuUjdPn7IZ2nUJQ77VYiDdsW3s8ddWFQRUh4yUWKiXhYLAy54Y2249fgzSTPtcvfgUr2MoiWhBE5p00zp6MUFHe');

const Checkout = () => {
  const { id } = useParams();
  const { fetchBoatDetailsById } = useContext(UserContext);
  const [boatDetails, setBoatDetails] = useState(null);
  const [error, setError] = useState(null);
  const [activeComponent, setActiveComponent] = useState("details");
  const [selectedRate, setSelectedRate] = useState(null);

  useEffect(() => {
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
        return <Details />;
    }
  };

  const isLogin = true;

  console.log('id:', id);
  console.log('boatDetails:', boatDetails);

  const handleSelection = (rate) => {
    setSelectedRate(rate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await baseURL.post('/checkout/payment', {
        userId: '1',
        username: 'yourUsername', // Replace with actual user data
        email: 'yourEmail@example.com', // Replace with actual user data
        phoneNumber: 'yourPhoneNumber', // Replace with actual user data
        countryOfBirth: 'yourCountry', // Replace with actual user data
        cityOfBirth: 'yourCity', // Replace with actual user data
        message: 'Your custom message', // Optional
        amount: selectedRate * 100, // Stripe expects the amount in cents
      });

      const { sessionId } = await response.data;
      console.log("sessionId",sessionId)
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
                <img src={item.avatar} alt="" className="md:w-64" />
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
                  <h1 className="font-medium text-[#383838] text-sm">
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
                  <h1 className="font-medium text-[#383838] text-sm">
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
                  <h1 className="font-medium text-[#383838] text-sm">
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
                  <h1 className="font-medium text-[#383838] text-md">
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
                  <h1 className="font-medium text-[#383838] text-md">
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
                  <h1 className="font-medium text-[#383838] text-md">
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
            </div>
            <div className="border-t border-b border-[#CBA557] py-9 px-12 leading-7">
              <h1 className="font-medium text-[#383838] text-lg">
                Amount to be Paid Online
              </h1>
              <div className="flex justify-between w-[90%] mt-[1%]">
                <p className="text-lg font-normal text-[#676767]">Amount</p>
                <p className="text-lg font-medium text-[#383838]">$5712.00</p>
              </div>
            </div>
            <div className="border-b border-[#CBA557] py-9 px-12 leading-7">
              <h1 className="font-medium text-[#383838] text-lg">
                Amount to be Paid on Harbor
              </h1>
              <div className="flex justify-between w-[90%] mt-[1%]">
                <p className="text-lg font-normal text-[#676767]">Skipper</p>
                <p className="text-lg font-medium text-[#383838]">$10.00</p>
              </div>
              <div className="flex justify-between w-[90%] mt-[1%]">
                <p className="text-lg font-normal text-[#676767]">Tickets</p>
                <p className="text-lg font-medium text-[#383838]">$10.00</p>
              </div>
            </div>
            <div className="py-9 px-12 leading-7">
              <div className="flex justify-between w-[90%] mt-[1%]">
                <p className="text-lg font-normal text-[#676767]">Subtotal</p>
                <p className="text-lg font-medium text-[#383838]">$5712.00</p>
              </div>
              <div className="flex justify-between w-[90%] mt-[1%]">
                <p className="text-lg font-normal text-[#676767]">
                  Skipper Charges:
                </p>
                <p className="text-lg font-medium text-[#383838]">$10.00</p>
              </div>
              <div className="flex justify-between w-[90%] mt-[1%]">
                <p className="text-lg font-normal text-[#676767]">Tickets</p>
                <p className="text-lg font-medium text-[#383838]">$10.00</p>
              </div>
              <div className="flex justify-between w-[90%] mt-[1%]">
                <p className="text-lg font-normal text-[#676767]">Total</p>
                <p className="text-lg font-medium text-[#383838]">$5712.00</p>
              </div>
            </div>
            <hr className="border-b border-[#DCDCDC] mb-[5%]" />
          </div>
          <div className="flex flex-col w-[100%] gap-5">
            {isLogin && (
              <div className="flex items-baseline ml-8">
                <div className="flex flex-col items-center gap-2 text-sm text-[#CBA557]">
                  <button
                    className={`rounded-[50%] h-8 w-8 bg-transparent border-2 border-[#CBA557] ${
                      activeComponent === "details" ? "bg-[#cba557] text-white" : ""
                    }`}
                    onClick={() => setActiveComponent("details")}
                  >
                    01
                  </button>
                  <div className="font-semibold">Details</div>
                </div>
                <div className="w-[10%] h-0.5 bg-gray-400"></div>
                <div className="flex flex-col items-center gap-2 text-sm text-[#CBA557]">
                  <button
                    className={`rounded-[50%] h-8 w-8 bg-transparent border-2 border-[#CBA557] ${
                      activeComponent === "payment" ? "bg-[#cba557] text-white" : ""
                    }`}
                    onClick={() => setActiveComponent("payment")}
                  >
                    02
                  </button>
                  <div className="font-semibold">Payment</div>
                </div>
                <div className="w-[10%] h-0.5 bg-gray-400"></div>
                <div className="flex flex-col items-center gap-2 text-sm text-[#CBA557]">
                  <button
                    className={`rounded-[50%] h-8 w-8 bg-transparent border-2 border-[#CBA557] ${
                      activeComponent === "greeting" ? "bg-[#cba557] text-white" : ""
                    }`}
                    onClick={() => setActiveComponent("greeting")}
                  >
                    03
                  </button>
                  <div className="font-semibold">Greeting</div>
                </div>
              </div>
            )}
            {renderComponent()}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={handleSubmit}
            className="bg-[#cba557] text-white py-2 px-4 rounded-lg"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
