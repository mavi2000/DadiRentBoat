import Annina from "../../assets/Images/annina.webp";
import Payment from "./Payment";
import Greeting from "./Greeting";
import Details from "./Details";
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const Checkout = () => {
  const { id } = useParams();
  const { fetchBoatDetailsById } = useContext(UserContext);
  const [boatDetails, setBoatDetails] = useState(null);
  const [error, setError] = useState(null);
  const [activeComponent, setActiveComponent] = useState("details");

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
             {boatDetails?.boatImages.map((item)=>( <img src={item.avatar} alt="" className="md:w-64" />))}
              {boatDetails ? (
                <>
                  <h2 className="heading-book mt-[4%] text-[#383838]">
                    {boatDetails.boat.type}
                  </h2>
                  <div className="flex flex-col gap-1 mt-[3%]">
                    <p>
                      From:{" "}
                      <span className="text-[#676767] font-normal">
                        April 3, 2024 - 7:00 am
                      </span>
                    </p>
                    <p>
                      To:{" "}
                      <span className="text-[#676767] font-normal">
                        April 5, 2024 - 7:00 am
                      </span>
                    </p>
                    <p>
                      No of persons:{" "}
                      <span className="text-[#676767] font-normal">{boatDetails.boat.boardingCapacity}</span>
                    </p>
                    <p>
                      With Skipper:{" "}
                      <span className="text-[#676767] font-normal">$10.00</span>
                    </p>
                    <p>Full Day</p>
                    <p className="text-[#EA5455]">Fuel Not Included</p>
                  </div>
                </>
              ) : (
                <p>Loading boat details...</p>
              )}
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
      </div>
    </div>
  );
};

export default Checkout;
