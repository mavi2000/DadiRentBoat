import React, { useContext, useEffect, useState } from "react";
import Annina from "../../../assets/Images/annina.webp";
import { GrDocumentPdf } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../Context/UserContext";
import InvoiceModal from "../../Dashboard/Bookings/InvoiceModal";
import RentalAgreementModal from "../../Dashboard/Bookings/RentalAgreementModal";
const Booking2 = () => {
  const { id } = useParams();
  const [boatDetails, setBoatDetails] = useState(null);
  const [isINPopUp, setIsINPopUp] = useState(null);
  const [isRAPopUp, setIsRAPopUp] = useState(null);
  const { myBookings, fetchMyBookings, fetchBoatDetailsById } =
    useContext(UserContext);
  // fetch bookings
  useEffect(() => {
    if (!myBookings) {
      fetchMyBookings();
    }
  }, []);
  const thisBooking = myBookings?.find((booking) => booking._id == id);
  const date = new Date(thisBooking?.availableDate);
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .toUpperCase()
    .replace(/\s/g, ". ");
  // fetch boat details
  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetchBoatDetailsById(thisBooking.boatId);
      setBoatDetails(details);
    };
    if (thisBooking) {
      fetchDetails();
    }
  }, [myBookings]);
  console.log(boatDetails);
  return (
    <div className=" mx-[3%] md:mx-[6%] my-44">
      {thisBooking && (
        <>
          <InvoiceModal
            isINPopUp={isINPopUp}
            setIsINPopUp={setIsINPopUp}
            booking={thisBooking}
          />
          <RentalAgreementModal
            isRAPopUp={isRAPopUp}
            setIsRAPopUp={setIsRAPopUp}
            booking={thisBooking}
          />
        </>
      )}
      <div className=" flex flex-col md:flex-row md:space-x-[2%] mt-[2%] space-y-[5%] md:space-y-[0%]">
        <div className="md:w-[35%] bg-white rounded-xl shadow-checkout mb-[1%]">
          <div className="py-9 px-12 flex flex-col justify-center items-center">
            <h2 className=" text-xl font-medium leading-7">
              Booking #{thisBooking?._id}
            </h2>
          </div>
          <hr className=" border border-[#DCDCDC]" />

          <div className="py-9 px-12 flex justify-center flex-col text-[#383838]">
            <img
              src={boatDetails && boatDetails?.boatImages[0]?.avatar}
              alt=""
              className="md:w-64"
            />
            <h2 className="heading-book mt-[4%] text-[#383838]">
              {thisBooking?.boatName}
            </h2>

            <div className=" flex flex-col gap-1 mt-[3%]">
              {/* <p>
                From:{' '}
                <span className=" text-[#676767] font-normal">
                  April 3, 2024 - 7:00 am
                </span>
              </p> */}
              {/* <p>
                To:{' '}
                <span className=" text-[#676767] font-normal">
                  April 5, 2024 - 7:00 am
                </span>
              </p> */}
              {/* <p>
                No of persons:{' '}
                <span className=" text-[#676767] font-normal">4</span>
              </p> */}
              {/* <p>
                With Skipper:{' '}
                <span className=" text-[#676767] font-normal">$10.00</span>
              </p> */}
              <p>
                Model:{" "}
                <span className=" text-[#676767] font-normal">
                  {boatDetails?.boat?.model}
                </span>
              </p>
              <p>
                Engine Power:{" "}
                <span className=" text-[#676767] font-normal">
                  {boatDetails?.boat?.totalEnginePowerHP} HP
                </span>
              </p>
              <p>
                Fuel Capacity:{" "}
                <span className=" text-[#676767] font-normal">
                  {boatDetails?.boat?.fuelTankLiters} L
                </span>
              </p>
              <p>
                Water Capacity:{" "}
                <span className=" text-[#676767] font-normal">
                  {boatDetails?.boat?.waterTankLiters} L
                </span>
              </p>
              <p>
                Date:{" "}
                <span className=" text-[#676767] font-normal">
                  {formattedDate}
                </span>
              </p>
              {/* <p>
                Payment Status:{' '}
                <span className=" text-[#676767] font-normal capitalize">{thisBooking?.paymentStatus}</span>
              </p>
              <p>
                Duration:{' '}
                <span className=" text-[#676767] font-normal capitalize">{thisBooking?.rateType}</span>
              </p> */}
              {/* <p>{thisBooking?.rateType}</p> */}
            </div>
          </div>

          <div className="border-t border-b border-[#CBA557] py-9 px-12 leading-7">
            <h1 className="font-medium text-[#383838] text-lg">
              Amount to be Paid Online
            </h1>

            <div className=" flex justify-between w-[90%] mt-[1%]">
              <p className=" text-lg font-normal text-[#676767]">Amount</p>
              <p className=" text-lg font-medium text-[#383838]">
                ${thisBooking?.amount / 100}
              </p>
            </div>
            <div className=" flex justify-between w-[90%] mt-[1%]">
              <p className=" text-lg font-normal text-[#676767]">
                Payment Status
              </p>
              <p className=" text-lg font-medium text-[#383838]">
                {thisBooking?.paymentStatus}
              </p>
            </div>
            <div className=" flex justify-between w-[90%] mt-[1%]">
              <p className=" text-lg font-normal text-[#676767]">Duration</p>
              <p className=" text-lg font-medium text-[#383838]">
                {thisBooking?.rateType}
              </p>
            </div>
          </div>

          {/* <div className="border-b border-[#CBA557] py-9 px-12 leading-7">
            <h1 className="font-medium text-[#383838] text-lg">
              Amount to be Paid on Harbor
            </h1>

            <div className=" flex justify-between w-[90%] mt-[1%]">
              <p className=" text-lg font-normal text-[#676767]">Skipper</p>
              <p className=" text-lg font-medium text-[#383838]">$10.00</p>
            </div>

            <div className=" flex justify-between w-[90%] mt-[1%]">
              <p className=" text-lg font-normal text-[#676767]">Tickets</p>
              <p className=" text-lg font-medium text-[#383838]">$10.00</p>
            </div>
          </div>

          <div className="py-9 px-12 leading-7">
            <div className=" flex justify-between w-[90%] mt-[1%]">
              <p className=" text-lg font-normal text-[#676767]">Subtotal</p>
              <p className=" text-lg font-medium text-[#383838]">$5712.00</p>
            </div>

            <div className=" flex justify-between w-[90%] mt-[1%]">
              <p className=" text-lg font-normal text-[#676767]">
                Skipper Charges:
              </p>
              <p className=" text-lg font-medium text-[#383838]">$10.00</p>
            </div>

            <div className=" flex justify-between w-[90%] mt-[1%]">
              <p className=" text-lg font-normal text-[#676767]">Tickets</p>
              <p className=" text-lg font-medium text-[#383838]">$10.00</p>
            </div>

            <div className=" flex justify-between w-[90%] mt-[1%]">
              <p className=" text-lg font-normal text-[#676767]">Total</p>
              <p className=" text-lg font-medium text-[#383838]">${thisBooking?.amount / 100}</p>
            </div>
          </div> */}

          <hr className="border-b border-[#DCDCDC] mb-[8%]" />

          <div className=" flex justify-center mb-[8%]">
            <button className="px-14 py-2 md:px-20 md:py-3 border border-[#CBA557] text-[#CBA557]">
              Cancel Booking
            </button>
          </div>
        </div>

        <div className="md:w-[65%] bg-white rounded-xl shadow-checkout mb-[3%] py-9 pl-8 pr-16 h-full">
          <div className=" mx-[3%]">
            <div className=" flex flex-col gap-3 justify-center items-center">
              <span className=" p-1 bg-[#CBA557] max-w-6 overflow-hidden rounded-full flex justify-center font-light text-[#FFFFFF] text-lg">
                <TiTick />
              </span>

              <p className=" text-[13px] font-bold text-[#CBA557]">Half Paid</p>
            </div>

            <hr className="border-b border-[#DCDCDC] my-[8%]" />

            <div className=" flex flex-col space-y-10 flex-wrap">
              <div className=" flex md:justify-between flex-wrap justify-center space-y-4 md:space-y-0">
                <button className=" flex items-center space-x-2 bg-[#CBA557] px-8 py-2 md:px-12 md:py-3 rounded-xl text-[#FFFFFF]">
                  <span className=" text-sm md:text-2xl">
                    <GrDocumentPdf />
                  </span>
                  <p className=" md:font-bold text-xs md:text-base font-medium">
                    Rules & Conditions
                  </p>
                </button>

                <button
                  onClick={() => setIsINPopUp(!isINPopUp)}
                  className=" flex items-center space-x-2 bg-[#CBA557] px-8 py-2 md:px-12 md:py-3 rounded-xl text-[#FFFFFF]"
                >
                  <span className="text-sm md:text-2xl">
                    <GrDocumentPdf />
                  </span>
                  <p className="md:font-bold text-xs md:text-base font-medium">
                    Invoice
                  </p>
                </button>
              </div>

              <div
                onClick={() => setIsRAPopUp(!isRAPopUp)}
                className=" flex md:justify-between flex-wrap justify-center space-y-4 md:space-y-0"
              >
                <button className=" flex items-center space-x-2 bg-[#CBA557] px-8 py-2 md:px-12 md:py-3 rounded-xl text-[#FFFFFF]">
                  <span className="text-sm md:text-2xl">
                    <GrDocumentPdf />
                  </span>
                  <p className="md:font-bold text-xs md:text-base font-medium">
                    Rental Agreement
                  </p>
                </button>
              </div>
            </div>

            <hr className="border-b border-[#DCDCDC] my-[8%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking2;
