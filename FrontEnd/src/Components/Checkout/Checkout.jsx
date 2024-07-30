import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import baseURL from "../../../APi/BaseUrl";
import { jwtDecode } from "jwt-decode";
import { format } from "date-fns";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Details from "./Details";
import Greeting from "./Greeting";
import Payment from "./Payment";
import { UserContext } from "../../../Context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const stripePromise = loadStripe(
  "pk_test_51OwXJ9RtqZkTuUjdPn7IZ2nUJQ77VYiDdsW3s8ddWFQRUh4yUWKiXhYLAy54Y2249fgzSTPtcvfgUr2MoiWhBE5p00zp6MUFHe"
);

const Checkout = () => {
  const { fetchBoatDetailsById } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [boatDetails, setBoatDetails] = useState(null);
  const [selectedRate, setSelectedRate] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const [customRate, setCustomRate] = useState("");
  const [paymentOption, setPaymentOption] = useState("full");
  const [user, setUser] = useState("");
  const [activeComponent, setActiveComponent] = useState("details");
  const [isAvailable, setIsAvailable] = useState(true);
  const [quickChoice, setQuickChoice] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const datePickerRef = useRef(null);
  const dummyTimeSlots = [
    {
      id: 1,
      slot: "4h00",
      price: "€238.92",
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

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const getBoatDetails = async () => {
      try {
        const details = await fetchBoatDetailsById(id);
        setBoatDetails(details);
        setSelectedRate(details?.rate?.[0]);
      } catch (error) {
        console.error("Error fetching boat details:", error);
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

  const handleSave = () => {
    setIsDatePickerOpen(false);
    console.log("Saved dates:", selectedDates);
  };

  const handleTimeSlotChange = (e) => {
    const selectedSlot = dummyTimeSlots.find(
      (slot) => slot.id === parseInt(e.target.value)
    );
    setSelectedTimeSlot(selectedSlot);
  };

  const parseDuration = (duration) => {
    const [amount, unit] = duration.split(" ");
    if (unit.startsWith("week")) {
      return parseInt(amount) * 7;
    }
    if (unit.startsWith("day")) {
      return parseInt(amount);
    }
    return 1; // default to 1 day if no unit is provided
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setSelectedDates([start, end]);

    const minimumRentalDuration =
      boatDetails?.rate[0]?.minimumRentalDuration || "1 day";
    const maximumRentalDuration =
      boatDetails?.rate[0]?.maximumRentalDuration || "Infinity days";

    const durationInDays =
      (end ? end - start : start - start) / (1000 * 60 * 60 * 24) + 1;

    const minDays = parseDuration(minimumRentalDuration);
    const maxDays = parseDuration(maximumRentalDuration);

    if (durationInDays < minDays) {
      toast.error(`Minimum rental duration is ${minimumRentalDuration}`);
      // setIsAvailable(false);
      return;
    }

    if (durationInDays > maxDays) {
      toast.error(`Maximum rental duration is ${maximumRentalDuration}`);
      // setIsAvailable(false);
      return;
    }

    if (boatDetails && boatDetails.boatBookings) {
      const available = !boatDetails.boatBookings.some((booking) => {
        const startDate = new Date(booking?.startDate);
        const endDate = new Date(booking?.endDate);
        return (
          (start >= startDate && start <= endDate) ||
          (end && end >= startDate && end <= endDate)
        );
      });

      setIsAvailable(available);
    } else {
      setIsAvailable(true);
    }
  };

  const handleQuickChoice = (choice) => {
    const start = selectedDates[0] || new Date();
    const end = new Date(start);
    if (choice === "day") {
      end.setDate(
        start.getDate() +
          parseDuration(boatDetails?.rate[0]?.minimumRentalDuration) -
          1
      );
    } else if (choice === "week") {
      end.setDate(
        start.getDate() +
          parseDuration(boatDetails?.rate[0]?.maximumRentalDuration) -
          1
      );
    }
    setSelectedDates([start, end]);
    handleSave();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      toast.error("User must be logged in to book a boat");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
      return;
    }

    if (!selectedRate && !selectedTimeSlot) {
      toast.error("Please select a rate or time slot.");
      return;
    }

    let amountToCharge;

    if (selectedTimeSlot) {
      amountToCharge = parseFloat(selectedTimeSlot.price.replace("$", ""));
    } else {
      const durationInDays =
        (selectedDates[1] - selectedDates[0]) / (1000 * 60 * 60 * 24) + 1;
      const rate = customRate || selectedRate.oneDayRate;
      amountToCharge = rate * durationInDays;
    }

    if (paymentOption === "partial") {
      amountToCharge = amountToCharge * 0.3;
    }

    const amountToChargeInCents = Math.round(amountToCharge * 100);

    try {
      const boatName = boatDetails?.rental
        ?.map((item) => item.BoatName)
        .join(", ");

      const response = await baseURL.post("/checkout/payment", {
        userId: user,
        boatName,
        amount: amountToChargeInCents,
        rateType: selectedRate ? selectedRate.nameOfTheRate : "Time Slot",
        totalAmount: amountToChargeInCents,
        boatImage: boatDetails.boatImages.map((item) => item.images[0]),
        availableDates: selectedDates,
        boatId: boatDetails?.boat._id,
        selectedTimeSlot: selectedTimeSlot ? selectedTimeSlot.slot : null,
      });

      const { sessionId } = await response.data;
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Stripe Checkout error:", error);
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error(
        error.response?.data?.message || "Payment failed. Please try again."
      );
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

  const getDisabledDates = async () => {
    try {
      const response = await baseURL.post("/checkout/unAvailableDates", {
        boatName: boatDetails?.rental?.[0]?.BoatName,
      });
      return response.data.availableDates.map((date) => new Date(date));
    } catch (error) {
      console.error("Error fetching unavailable dates:", error);
      return [];
    }
  };

  useEffect(() => {
    if (boatDetails) {
      getDisabledDates().then((dates) => setDisabledDates(dates));
    }
  }, [boatDetails]);

  const [disabledDates, setDisabledDates] = useState([]);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        !isAvailable ? "border-red-500" : ""
      }`}
      onClick={(e) => {
        onClick(e);
        setIsDatePickerOpen(true);
      }}
      ref={ref}
      value={value}
      readOnly
    />
  ));

  const CustomCalendarContainer = ({ className, children }) => (
    <div className={`${className} mx-8`}>
      <CalendarContainer className="relative">{children}</CalendarContainer>
      {selectedDates && selectedDates.length > 0 && (
        <div className="w-full flex flex-col gap-3 py-2">
          <div className="h-[1px] bg-black w-full"></div>
          <div className=" flex flex-wrap px-3 gap-3">
            <div className="flex flex-wrap gap-3 px-3">
              <button className="text-black font-semibold py-2">
                Quick Choice :
              </button>
              {boatDetails?.rate[0]?.minimumRentalDuration === "1 day" && (
                <button
                  className="text-white bg-[#cba557] hover:bg-[#d9d5d1] rounded-lg font-semibold px-4 py-2"
                  onClick={() => {
                    setQuickChoice("slot");
                    handleSave();
                  }}
                >
                  Time slot
                </button>
              )}
              <button
                className="text-white bg-[#cba557] hover:bg-[#d9d5d1] rounded-lg font-semibold px-4 py-2"
                onClick={() => {
                  setQuickChoice("day");
                  handleQuickChoice("day");
                }}
              >
                {boatDetails?.rate[0]?.minimumRentalDuration}
              </button>
              {["1 week", "2 weeks"].includes(
                boatDetails?.rate[0]?.maximumRentalDuration
              ) && (
                <button
                  className="text-white bg-[#cba557] hover:bg-[#d9d5d1] rounded-lg font-semibold px-4 py-2"
                  onClick={() => {
                    setQuickChoice("week");
                    handleQuickChoice("week");
                  }}
                >
                  {boatDetails?.rate[0]?.maximumRentalDuration}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <div className="checkout-bg !h-[50svh] md:!h-[100svh]">
        <div className="h-[50svh] md:h-[100svh] flex flex-col justify-center mx-[6%]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Check Out
          </h1>
        </div>
      </div>
      <div className="mx-[6%] mt-[3%]">
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
                <img
                  key={item.id}
                  src={item.images[0]}
                  alt=""
                  className="md:w-64 mb-4"
                />
              ))}
              {boatDetails ? (
                <>
                  <h2 className="heading-book mt-[4%] text-[#383838]">
                    {boatDetails?.rental?.map((item) => item.BoatName)}
                  </h2>
                  <div className="flex flex-col gap-1 mt-[3%]">
                    <p>
                      From:{" "}
                      <span className="text-[#676767] font-normal">
                        {format(
                          new Date(
                            boatDetails?.boatBookings.map(
                              (item) => item.startDate
                            )
                          ),
                          "dd MMMM yyyy"
                        )}
                      </span>
                    </p>
                    <p>
                      To:{" "}
                      <span className="text-[#676767] font-normal">
                        {format(
                          new Date(
                            boatDetails?.boatBookings.map(
                              (item) => item.endDate
                            )
                          ),
                          "dd MMMM yyyy"
                        )}
                      </span>
                    </p>
                    <p className="text-[#676767] font-normal">
                      {boatDetails?.description?.map((item) => (
                        <p className="text-[#676767] font-normal">
                          {item.rentalType === "bareBoat"
                            ? " withSkipper"
                            : "without Skipper"}
                        </p>
                      ))}
                    </p>
                    <div className="mb-4">
                      <label
                        htmlFor="bookingDate"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Select Booking Dates:
                      </label>
                      <DatePicker
                        ref={datePickerRef}
                        selected={selectedDates[0]}
                        onChange={handleDateChange}
                        startDate={selectedDates[0]}
                        endDate={selectedDates[1]}
                        selectsRange
                        minDate={new Date()}
                        monthsShown={2}
                        excludeDates={disabledDates}
                        dateFormat="dd/MM/yyyy"
                        calendarContainer={CustomCalendarContainer}
                        customInput={<CustomInput />}
                        open={isDatePickerOpen}
                        onClickOutside={() => setIsDatePickerOpen(false)}
                      />
                      {!isAvailable && (
                        <p className="text-red-500 text-xs italic">
                          This boat is not available on the selected dates.
                        </p>
                      )}
                    </div>
                    {quickChoice === "slot" && (
                      <div className="mb-4">
                        <label
                          htmlFor="timeslots"
                          className="block text-gray-700 text-sm font-bold mb-2"
                        >
                          Time Slots:
                        </label>
                        <div className="relative">
                          <select
                            id="timeslots"
                            className="block w-full bg-white border border-gray-300 rounded-md shadow-sm outline-none px-3 py-2 sm:text-sm"
                            onChange={handleTimeSlotChange}
                          >
                            <option value="">Choose a slot</option>
                            {dummyTimeSlots.map((timeSlot) => (
                              <option key={timeSlot.id} value={timeSlot.id}>
                                {timeSlot.slot} - {timeSlot.price}
                              </option>
                            ))}
                          </select>
                          {selectedTimeSlot && (
                            <div className="mt-2 p-2 bg-white shadow-md rounded-md">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h3 className="text-black font-semibold">
                                    {selectedTimeSlot.slot}
                                  </h3>
                                  <p className="text-gray-600">
                                    Duration: {selectedTimeSlot.duration}
                                  </p>
                                  <p className="text-gray-600">
                                    Departure: {selectedTimeSlot.departure}
                                  </p>
                                </div>
                                <div className="text-black font-semibold">
                                  {selectedTimeSlot.price}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <p>Loading boat details...</p>
              )}
              <div className="mb-4">
                {selectedRate && isAvailable && !selectedTimeSlot && (
                  <div>
                    <label
                      htmlFor="customRate"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Per Day Rate:
                    </label>
                    <input
                      type="number"
                      id="customRate"
                      value={customRate || selectedRate.oneDayRate}
                      onChange={(e) => setCustomRate(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p className="text-gray-700 text-xl font-bold mt-2">
                      Total: $
                      {(
                        (customRate || selectedRate.oneDayRate) *
                        ((selectedDates[1] - selectedDates[0]) /
                          (1000 * 60 * 60 * 24) +
                          1)
                      ).toFixed(2)}
                    </p>
                  </div>
                )}
                {selectedTimeSlot && (
                  <div className="text-gray-700 text-xl font-bold mt-2">
                    Total: {selectedTimeSlot.price}
                  </div>
                )}
              </div>
              <div className="my-4">
                <h2 className="font-medium text-lg mb-2">Payment Option:</h2>
                <label className="block mt-2">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="full"
                    checked={paymentOption === "full"}
                    onChange={() => setPaymentOption("full")}
                    className="mr-2"
                  />
                  Pay Full Amount
                </label>
                <label className="block mt-2">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="partial"
                    checked={paymentOption === "partial"}
                    onChange={() => setPaymentOption("partial")}
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
            <div className="flex flex-col items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
