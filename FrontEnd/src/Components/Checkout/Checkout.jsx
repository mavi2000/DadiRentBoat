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
import { useTranslation } from "react-i18next";

const stripePromise = loadStripe(
  "pk_test_51OwXJ9RtqZkTuUjdPn7IZ2nUJQ77VYiDdsW3s8ddWFQRUh4yUWKiXhYLAy54Y2249fgzSTPtcvfgUr2MoiWhBE5p00zp6MUFHe"
);

const Checkout = () => {
  const { t } = useTranslation();
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
  const [isChecked, setIsChecked] = useState(true);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [totalAmount, setTotalAmount] = useState(0); // New state for total amount

  const skipperCost = 10; // Define the skipper cost here

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    calculateTotalAmount(
      selectedRate,
      customRate,
      selectedDates,
      startTime,
      endTime,
      event.target.checked
    );
  };

  const datePickerRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const getBoatDetails = async () => {
      try {
        const details = await fetchBoatDetailsById(id);
        setBoatDetails(details);
        setSelectedRate(details?.rate?.[0]);
        // Calculate initial total amount
        calculateTotalAmount(
          details?.rate?.[0],
          customRate,
          selectedDates,
          startTime,
          endTime,
          isChecked
        );
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
    calculateTotalAmount(selectedRate, customRate, selectedDates, startTime, endTime, isChecked);
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
      return;
    }

    if (durationInDays > maxDays) {
      toast.error(`Maximum rental duration is ${maximumRentalDuration}`);
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

    calculateTotalAmount(selectedRate, customRate, [start, end], startTime, endTime, isChecked);
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
      setStartTime("");
      setEndTime("");
    } else if (choice === "week") {
      end.setDate(
        start.getDate() +
          parseDuration(boatDetails?.rate[0]?.maximumRentalDuration) -
          1
      );
      setStartTime("");
      setEndTime("");
    }
    setSelectedDates([start, end]);
    if (choice === "slot") {
      setIsDatePickerOpen(false);
    } else {
      handleSave();
    }
    setQuickChoice(choice);
  };

  const calculateTotalAmount = (rate, customRate, dates, startTime, endTime, isChecked) => {
    let amount = 0;

    if (dates && dates.length === 2) {
      const durationInDays = (dates[1] - dates[0]) / (1000 * 60 * 60 * 24) + 1;
      const dailyRate = parseFloat(customRate || rate?.oneDayRate || 0);
      amount = dailyRate * durationInDays;
    } else if (startTime && endTime) {
      const startHour = parseInt(startTime.split(":")[0]);
      const endHour = parseInt(endTime.split(":")[0]);
      const durationInHours = endHour - startHour;
      const hourlyRate = parseFloat(customRate || rate?.oneHourRate || 0);
      amount = hourlyRate * durationInHours;
    }

    if (isChecked) {
      amount += skipperCost; // Add skipper cost if checked
    }

    setTotalAmount(amount); // Update total amount state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) {
      toast.error(t("userMustBeLoggedIn"));
      setTimeout(() => {
        navigate("/login");
      }, 2500);
      return;
    }

    if (!selectedRate && (!startTime || !endTime)) {
      toast.error(t("selectRateOrTimeSlot"));
      return;
    }

    let amountToCharge = totalAmount;

    if (paymentOption === "partial") {
      amountToCharge = totalAmount * 0.3;
    }

    const amountToChargeInCents = Math.round(amountToCharge * 100);
    const totalAmountInCents = Math.round(totalAmount * 100);

    try {
      const boatName = boatDetails?.rental
        ?.map((item) => item.BoatName)
        .join(", ");

      const response = await baseURL.post("/checkout/payment", {
        userId: user,
        boatName,
        amount: amountToChargeInCents,
        rateType: selectedRate ? selectedRate.nameOfTheRate : "Time Slot",
        totalAmount: totalAmountInCents,
        boatImage: boatDetails.boatImages.map((item) => item.images[0]),
        availableDates: selectedDates,
        boatId: boatDetails?.boat._id,
        startTime,
        endTime,
        isChecked, // Add the checkbox state to the payload
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
      toast.error(error.response?.data?.message || t("paymentFailed"));
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
                {t("quickChoice")} :
              </button>
              {boatDetails?.rate[0]?.minimumRentalDuration === "1 day" && (
                <button
                  className="text-white bg-[#cba557] hover:bg-[#d9d5d1] rounded-lg font-semibold px-4 py-2"
                  onClick={() => {
                    handleQuickChoice("slot");
                  }}
                >
                  {t("timeSlot")}
                </button>
              )}
              <button
                className="text-white bg-[#cba557] hover:bg-[#d9d5d1] rounded-lg font-semibold px-4 py-2"
                onClick={() => {
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
            {t("checkOut")}
          </h1>
        </div>
      </div>
      <div className="mx-[6%] mt-[3%]">
        <h1 className="font-medium text-3xl text-[#000000]">
          {t("checkOut")}
        </h1>
        <p className="para-book mt-2">{t("bookRentalDescription")}</p>

        <div className="flex flex-col md:flex-row md:space-x-[2%] mt-[2%] space-y-[5%] md:space-y-[0%]">
          <div className="md:w-[35%] bg-white rounded-xl shadow-checkout mb-[1%]">
            <div className="py-9 px-12 flex flex-col justify-center items-center">
              <h2 className="text-xl font-medium leading-7">
                {t("bookingNumber")}
              </h2>
            </div>
            <hr className="border border-[#DCDCDC]" />

            <div className="py-9 px-12 flex justify-center flex-col text-[#383838]">
            {boatDetails?.boatImages?.[0] && (
  <img key={boatDetails.boatImages[0]._id} src={boatDetails.boatImages[0].images[0]} alt="" className="md:w-64 mb-4" />
)}
              {boatDetails ? (
                <>
                  <h2 className="heading-book mt-[4%] text-[#383838]">
                    {boatDetails?.rental?.map((item) => item.BoatName)}
                  </h2>
                  <div className="flex flex-col  gap-4 mt-[3%]">
                                    <p className="font-bold">
                    {t("from")} : 
                    <span className="text-[#676767] font-normal">
                      {format(new Date(boatDetails?.boatBookings[0]?.startDate), "dd MMMM yyyy")}
                    </span>
                  </p>
                  <p className="font-bold">
                    {t("to")} : 
                    <span className="text-[#676767] font-normal">
                      {format(new Date(boatDetails?.boatBookings[0]?.endDate), "dd MMMM yyyy")}
                    </span>
                  </p>
                                      <p className="text-[#676767] font-normal">
                     <span className="font-bold text-normal">Number of persons </span> {boatDetails.boat.boardingCapacity}
                    </p>
                    <label className="flex gap-2">
                      <input
                        type="checkbox"
                        name="withSkipper"
                        value="10"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      With skipper 10 €
                    </label>

                    <div className="mb-4">
                      <label
                        htmlFor="bookingDate"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        {t("selectBookingDates")}
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
                          {t("boatNotAvailable")}
                        </p>
                      )}
                    </div>
                    {quickChoice === "slot" && (
                      <>
                        <div className="mb-4">
                          <label
                            htmlFor="startTime"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            {t("startTime")}
                          </label>
                          <select
                            id="startTime"
                            className="block w-full bg-white border border-gray-300 rounded-md shadow-sm outline-none px-3 py-2 sm:text-sm"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                          >
                            <option value="">{t("chooseStartTime")}</option>
                            {Array.from({ length: 18 }, (_, i) => i + 7).map(
                              (hour) => (
                                <option key={hour} value={`${hour}:00`}>
                                  {`${hour}:00`}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="endTime"
                            className="block text-gray-700 text-sm font-bold mb-2"
                          >
                            {t("endTime")}
                          </label>
                          <select
                            id="endTime"
                            className="block w-full bg-white border border-gray-300 rounded-md shadow-sm outline-none px-3 py-2 sm:text-sm"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                          >
                            <option value="">{t("chooseEndTime")}</option>
                            {Array.from({ length: 18 }, (_, i) => i + 7).map(
                              (hour) => (
                                <option key={hour} value={`${hour}:00`}>
                                  {`${hour}:00`}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <p>{t("loadingBoatDetails")}</p>
              )}
              <div className="mb-4">
                {selectedRate && isAvailable && !startTime && !endTime && (
                  <div>
                    <label
                      htmlFor="customRate"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      {t("perDayRate")}
                    </label>
                    <input
                      type="number"
                      id="customRate"
                      value={customRate || selectedRate.oneDayRate}
                      onChange={(e) => setCustomRate(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p className="text-gray-700 text-xl font-bold mt-2">
                      {t("total")}  €
                      {(
                        (customRate || selectedRate.oneDayRate) *
                        ((selectedDates[1] - selectedDates[0]) /
                          (1000 * 60 * 60 * 24) +
                          1)
                      ).toFixed(2)}
                    </p>
                  </div>
                )}
                {startTime && endTime && (
                  <div className="text-gray-700 text-xl font-bold mt-2">
                    {t("total")}:  €
                    {(
                      parseFloat(customRate || selectedRate.oneHourRate) *
                      (parseInt(endTime.split(":")[0]) -
                        parseInt(startTime.split(":")[0]))
                    ).toFixed(2)}
                  </div>
                )}
                <div className="text-gray-700 text-xl font-bold mt-2">
                with skipper{t("total")}€
                    {totalAmount.toFixed(2)}
                  </div>
              </div>
              <div className="my-4">
                <h2 className="font-medium text-lg mb-2">
                  {t("paymentOption")}
                </h2>
                <label className="block mt-2">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="full"
                    checked={paymentOption === "full"}
                    onChange={() => setPaymentOption("full")}
                    className="mr-2"
                  />
                  {t("payFullAmount")}
                </label>
                <label className="mt-2 flex gap-2">
                  <input
                    type="radio"
                    name="paymentOption"
                    value="partial"
                    checked={paymentOption === "partial"}
                    onChange={() => setPaymentOption("partial")}
                    className="mr-2"
                  />
                  {t("payPartialAmount")}
                </label>
              </div>
              <button
                onClick={handleSubmit}
                className={`w-[90%] py-2 bg-[#f24f04] rounded-lg text-white font-semibold mt-[3%]`}
              >
                {t("bookNow")}
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

