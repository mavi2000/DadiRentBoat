import React, { useState, useEffect, useContext, useRef, forwardRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  IoShareSocialOutline,
  IoHeartOutline,
  IoHammerOutline,
} from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiEngine, PiDiamondsFourLight } from "react-icons/pi";
import { RiAnchorLine, RiRulerLine } from "react-icons/ri";
import { TbTool } from "react-icons/tb";
import { GrUserPolice } from "react-icons/gr";
import { IoIosArrowUp } from "react-icons/io";
import { RxChevronRight } from "react-icons/rx";
import FleetCard from "../Home/FleetCard";
import fleetBoat1 from "../../assets/Images/fleetBoat1.webp";
import fleetBoat2 from "../../assets/Images/fleetBoat2.webp";
import fleetBoat3 from "../../assets/Images/fleetBoat3.webp";
import Awning from "../../assets/Images/awning.png";
import Table1 from "../../assets/Images/table.png";
import Sundeck from "../../assets/Images/sundeck.png";
import DeckShower from "../../assets/Images/deckShower.png";
import FreeParking from "../../assets/Images/freeParking.png";
import SwimPlatform from "../../assets/Images/swimPlatform.png";
import OutdoorCushion from "../../assets/Images/outdoorCushion.png";
import Mp3 from "../../assets/Images/mp3.png";
import Bluetooth from "../../assets/Images/bluetooth.png";
import Dvd from "../../assets/Images/dvdPlayer.png";
import Socket220 from "../../assets/Images/socket220.png";
import UsbPlug from "../../assets/Images/usbPlug.png";
import GPS from "../../assets/Images/GPS.png";
import Sounder from "../../assets/Images/Sounder.png";
import ElectricWindlass from "../../assets/Images/electric-windlass.png";
import OutboardEngine from "../../assets/Images/outboard-engine.png";
import Speedometer from "../../assets/Images/speedometer.png";
import Anemometer from "../../assets/Images/anemometer.png";
import Compass from "../../assets/Images/compass.png";
import Surbed from "../../assets/Images/surbed.png";
import UmbrellaRental from "../../assets/Images/umbrella-rental.png";
import PoolLifeguard from "../../assets/Images/pool-lifeguard.png";
import Draught from "../../assets/Images/Draught.png";
import FuelType from "../../assets/Images/FuelType.png";
import FuelTank from "../../assets/Images/FuelTank.png";
import {jwtDecode} from "jwt-decode";
import Prices from "./Prices";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import { toast } from "react-toastify";
import baseURL from "../../../APi/BaseUrl";
import { loadStripe } from "@stripe/stripe-js";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const stripePromise = loadStripe(
  "pk_test_51OwXJ9RtqZkTuUjdPn7IZ2nUJQ77VYiDdsW3s8ddWFQRUh4yUWKiXhYLAy54Y2249fgzSTPtcvfgUr2MoiWhBE5p00zp6MUFHe"
);

const BookNow = () => {
  const { id } = useParams();
  const { fetchBoatDetailsById } = useContext(UserContext);
  const navigate = useNavigate();
  const [boatDetails, setBoatDetails] = useState(null);
  const [user, setUser] = useState("");
  const [selectedRate, setSelectedRate] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const [customRate, setCustomRate] = useState("");
  const [paymentOption, setPaymentOption] = useState("full");
  const [isAvailable, setIsAvailable] = useState(true);
  const [quickChoice, setQuickChoice] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [disabledDates, setDisabledDates] = useState([]);
  const [data, setData] = useState({ rentalType: [] }); // Initialize data state
  const datePickerRef = useRef(null);
  const dummyTimeSlots = [
    {
      id: 1,
      slot: "4h00",
      price: "$238.92",
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
    console.log("Selected time slot:", selectedSlot);
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

    let amountToCharge = calculateTotal();

    if (data.rentalType.includes("with skipper")) {
      amountToCharge += 10; // Add skipper cost
    }

    if (paymentOption === "partial") {
      amountToCharge = amountToCharge * 0.3;
    }

    const amountToChargeInCents = Math.round(amountToCharge);

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

  const getMinimumRate = () => {
    if (!boatDetails || !boatDetails.rate || boatDetails.rate.length === 0) {
      return "N/A";
    }
    return boatDetails.rate.reduce((min, rate) => {
      const rateValue = typeof rate.oneDayRate === 'string' ? parseFloat(rate.oneDayRate.replace("€", "")) : rate.oneDayRate;
      return rateValue < min ? rateValue : min;
    }, Infinity);
  };

  const calculateTotal = () => {
    let total = 0;
    if (selectedTimeSlot) {
      total = parseFloat(selectedTimeSlot.price.replace("€", ""));
    } else if (selectedDates.length === 2) {
      const durationInDays =
        (selectedDates[1] - selectedDates[0]) / (1000 * 60 * 60 * 24) + 1;
      const rate = customRate || (selectedRate && selectedRate.oneDayRate) || 0;
      total = rate * durationInDays;
    }

    if (data.rentalType.includes("with skipper")) {
      total += 10; // Add skipper cost
    }

    return total;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      if (prevState[name].includes(value)) {
        return {
          ...prevState,
          [name]: prevState[name].filter((item) => item !== value),
        };
      } else {
        return {
          ...prevState,
          [name]: [...prevState[name], value],
        };
      }
    });
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline €{
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

  console.log("boatDetails for booking",boatDetails)

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

  if (!boatDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="boat-page-bg !h-[50svh] md:!h-[100svh]"></div>
      <div className="flex flex-col md:flex-row mx-[3%] gap-[3%] mt-[2%] md:mx-[6%] md:gap-[7%] md:mt-[2%]">
        <div className="left-container md:w-[60%]">
          <div className="top mt-[3%]">
            <h1 className="font-sans font-poppins font-medium text-3xl text-[#000000]">
              {boatDetails?.rental?.map((item) => item.BoatName)}
            </h1>
            <div className="flex my-3 md:justify-between justify-center flex-wrap space-y-3 space-x-3">
              <div className="flex justify-center items-center">
                <span className="mr-1 text-[#B7B7B7]">
                  <FaLocationDot />
                </span>
                <p className="font-sans font-poppins font-normal text-[#B7B7B7]">
                  {boatDetails?.boat?.region}
                </p>
              </div>
            </div>
            <div className="flex mt-[8%] gap-[1%] flex-wrap sm:justify-between border-t border-b border-[#CBA557] border-opacity-30 py-2 items-center space-y-1 justify-center">
              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className="text-[#CBA557]">
                  <HiOutlineUserGroup />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  {boatDetails?.boat?.boardingCapacity} pers
                </p>
              </div>
              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className="text-[#CBA557]">
                  <RiAnchorLine />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  {boatDetails?.boat?.totalEnginePowerHP} hp
                </p>
              </div>
              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className="text-[#CBA557]">
                  <PiEngine />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  {boatDetails?.boat?.model}
                </p>
              </div>
              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className="text-[#CBA557]">
                  <TbTool />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  {boatDetails?.boat?.year}
                </p>
              </div>
              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className="text-[#CBA557]">
                  <GrUserPolice />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  With or without skipper
                </p>
              </div>
            </div>
          </div>
          <div className="center mt-[8%]">
            <h1 className="heading-book">Description</h1>
            <p className="para-book">
              {boatDetails?.description?.map((item, key) => (
                <span key={key}>{item?.details?.descriptionEnglish}</span>
              ))}
            </p>
            <div className="mt-[4%]">
              <div className="flex gap-[1%] items-center">
                <span className="text-[#CBA557] transform text-2xl">
                  <RiAnchorLine />
                </span>
                <h1 className="heading-book">Satellite Tracking:</h1>
              </div>
              <p className="para-book">
                Our dinghy is equipped with a GPS tracking system; The system
                allows you to locate the boat in real time. This safety device
                allows the customer to always feel safe and for us charterers to
                have an immediate position of the boat and evaluate any problems
                or area trespasses.
              </p>
            </div>
            <div className="mt-[4%]">
              <div className="flex gap-[1%] items-center">
                <span className="text-[#CBA557] transform text-2xl">
                  <RiAnchorLine />
                </span>
                <h1 className="heading-book">
                  This dinghy has the authorization to carry out the activity in
                  the marine protected area of the Secche della Meloria.
                </h1>
              </div>
              <p className="para-book">
                {boatDetails?.description?.map((item, key) => (
                  <span key={key}>{item?.details?.descriptionItalian}</span>
                ))}
              </p>
            </div>
            <div className="mt-[4%]">
              <div className="flex items-center gap-[1%] text-[#CBA557]">
                <p className="underline">View Less</p>
                <span>
                  <IoIosArrowUp />
                </span>
              </div>
              <div className="mt-[2%]">
                <div className="flex flex-wrap gap-[2%]">
                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className="text-[1.15rem] text-[#CBA557]">
                        <RiRulerLine />
                      </span>
                      <p className="text-[#676767]">Length</p>
                    </div>
                    <p className="text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails?.boat?.lengthMeters}
                    </p>
                  </div>
                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className="text-[1.15rem] text-[#CBA557]">
                        <RiRulerLine />
                      </span>
                      <p className="text-[#676767]">Width</p>
                    </div>
                    <p className="text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>
                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className="text-[1.15rem] text-[#CBA557]">
                        <IoHammerOutline />
                      </span>
                      <p className="text-[#676767]">Draft</p>
                    </div>
                    <p className="text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>
                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <img src={Draught} alt="" className="w-5 h-5" />
                      <p className="text-[#676767]">Draught</p>
                    </div>
                    <p className="text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails?.boat?.droughtMeters}m
                    </p>
                  </div>
                  <div className="py-5 px-8 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <img src={FuelTank} alt="" className="w-4 h-5" />
                      <p className="text-[#676767]">Fuel Tank</p>
                    </div>
                    <p className="text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails?.boat?.fuelTankLiters}m
                    </p>
                  </div>
                  <div className="py-5 px-8 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <img src={FuelType} alt="" className="w-5 h-5" />
                      <p className="text-[#676767]">Fuel Type</p>
                    </div>
                    <p className="text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>
                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className="text-[1.15rem] text-[#CBA557]">
                        <RiAnchorLine />
                      </span>
                      <p className="text-[#676767]">Power</p>
                    </div>
                    <p className="text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails?.boat?.totalEnginePowerHP} hp
                    </p>
                  </div>
                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className="text-[1.15rem] text-[#CBA557]">
                        <TbTool />
                      </span>
                      <p className="text-[#676767]">Phone</p>
                    </div>
                    <p className="text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails?.boat?.telephone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[4%]">
              <h1 className="heading-book">Equipment</h1>
              <h2 className="min-heading mt-[2%]">Comfort</h2>
              <div className="flex flex-wrap">
                <div>
                  <ul>
                    {boatDetails?.equipment?.map((item) => (
                      <li key={item._id}>
                        <ul className="flex gap-10">
                          {item?.comfort?.map((comfortItem, index) => (
                            <li
                              key={index}
                              className="text-[#000000] font-normal text-opacity-50"
                            >
                              {comfortItem}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <h2 className="font-medium text-lg mt-10">Navigation:</h2>
                  <ul>
                    {boatDetails?.equipment?.map((item) => (
                      <li key={item?._id}>
                        <ul className="flex gap-10">
                          {item?.navigation?.map((navItem, index) => (
                            <li
                              key={index}
                              className="text-[#000000] font-normal text-opacity-50"
                            >
                              {navItem}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <h2 className="font-medium text-lg mt-10">Services:</h2>
                  <ul>
                    {boatDetails?.equipment?.map((item) => (
                      <li key={item._id}>
                        <ul className="flex gap-10">
                          {item?.services?.map((serviceItem, index) => (
                            <li
                              key={index}
                              className="text-[#000000] font-normal text-opacity-50"
                            >
                              {serviceItem}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <h2 className="font-medium text-lg mt-10">Energy:</h2>
                  <ul>
                    {boatDetails?.equipment?.map((item) => (
                      <li key={item?._id}>
                        <ul className="flex gap-10">
                          {item?.energy?.map((energyItem, index) => (
                            <li
                              key={index}
                              className="text-[#000000] font-normal text-opacity-50 "
                            >
                              {energyItem}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-[4%]">
              <h1 className="heading-book">Things to know</h1>
              <div className="mt-[3%] gap-3 flex">
                <span className="text-[#CBA557] text-2xl">
                  <PiDiamondsFourLight />
                </span>
                <p className="font-medium text-[#191919]">
                  Security Deposit <br className="mb-[1%]" />
                  <p className="text-sm font-normal text-opacity-70 text-[#4B465C]">
                    Please note that the rental fee does not include Security
                    Deposit costs.
                  </p>
                </p>
              </div>
              <div className="mt-[3%] gap-3 flex">
                <span className="text-[#CBA557] text-2xl">
                  <PiDiamondsFourLight />
                </span>
                <p className="font-medium text-[#191919]">
                  Fuel excluded <br className="mb-[1%]" />
                  <p className="text-sm font-normal text-opacity-70 text-[#4B465C]">
                    Please note that the rental fee does not include fuel costs.
                    Renters will be responsible for purchasing fuel separately
                    during the rental period.
                  </p>
                </p>
              </div>
              <div className="mt-[3%] gap-3 flex">
                <span className="text-[#CBA557] text-2xl">
                  <PiDiamondsFourLight />
                </span>
                <p className="font-medium text-[#191919]">
                  Pre-Payment <br className="mb-[1%]" />
                  <p className="text-sm font-normal text-opacity-70 text-[#4B465C]">
                    30% pre-payment is required to confirm your booking.
                  </p>
                </p>
              </div>
              <div className="mt-[3%] gap-3 flex">
                <span className="text-[#CBA557] text-2xl">
                  <PiDiamondsFourLight />
                </span>
                <p className="font-medium text-[#191919] leading-6">
                  Cancellation Policy for Boat and Dinghy Rentals in Livorno:
                  <br className="mb-[1%]" />
                  <p className="text-lg font-normal text-opacity-70 text-[#4B465C]">
                    Customer Impossibility
                  </p>
                  <p className="text-sm font-normal text-opacity-70 text-[#4B465C]">
                    Full refund of rental and deposit paid up to 48 hours before
                    arrival. Refund of up to 70% up to 24 hours before the
                    rental, with loss of the deposit amounts paid (which will be
                    deducted if the rental is rescheduled). Notification of
                    impossibility required within 24 hours prior to rental for
                    full refund.
                  </p>
                  <p className="text-lg font-normal text-opacity-70 text-[#4B465C] mt-1">
                    Bad weather:
                  </p>
                  <p className="text-sm font-normal text-opacity-70 text-[#4B465C]">
                    Tenant's discretion to suspend rental service. If the
                    service cannot be carried out due to bad weather or for
                    reasons attributable to DaDi Rent, the customer has the
                    right to recovery of the service on the first available
                    date.
                  </p>
                </p>
              </div>
            </div>
            <div className="mt-[4%]">
              <h1 className="heading-book">Pancaldi Acquaviva</h1>
              <p className="mt-[3%] text-sm font-normal text-opacity-70 text-[#4B465C] leading-5">
                You can find us at Bagni Pancaldi Acquaviva, located at Viale
                Italia 62, nestled in the heart of Livorno's seafront. Situated
                adjacent to the Terrazza Mascagni, our location offers stunning
                views of the Tuscan islands and Corsica. Facing us is the
                expansive Meloria Park, further enhancing the natural beauty of
                the surroundings. It's an elegant and rejuvenating spot with
                impeccable amenities and an enchanting sea view. At our
                establishment, customers have access to a range of services upon
                payment of an 8 Euro ticket. They can enjoy a refreshing shower
                upon their return, take advantage of the swimming pool, rent
                umbrellas and sun loungers, access the beach and children's play
                area, use the beach volleyball court for a quick match, or take
                a dip in Livorno's oldest and largest seaside establishment.
              </p>
            </div>
          </div>
        </div>
        <div className="right-container md:w-[35%] px-5 py-10 bg-white rounded-xl shadow-checkout flex flex-col gap-8 md:h-full">
          <div className="flex items-center gap-1">
            <p className="text-sm text-[#000000] font-normal">Total</p>
            <p className="text-lg font-bold text-[#CBA557]">
              Starting from €{getMinimumRate()}
            </p>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="text-sm text-[#000000] font-normal mb-[1%]"
            >
              Date
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
          </div>
          <div className="">
            <h2 className="text-sm font-normal text-[#000000] mb-[2%]">
              No of Persons
            </h2>
            <h1 className="border p-4 rounded-md">
              {boatDetails?.boat?.boardingCapacity}
            </h1>
          </div>
          <div>
            {quickChoice === "slot" && (
              <div className="mt-4">
                <label
                  htmlFor="timeSlot"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Time Slot
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  onChange={handleTimeSlotChange}
                >
                  <option value="">Select a slot</option>
                  {dummyTimeSlots.map((slot) => (
                    <option key={slot.id} value={slot.id}>
                      {slot.slot} - {slot.price}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="space-y-4">
            <h1 className="font-normal text-lg text-[#000000]">
              Type of Rental
            </h1>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={data.rentalType.includes("with skipper")}
                  onChange={handleChange}
                  id="rentalType"
                  name="rentalType"
                  className="w-5 h-5"
                  value={"with skipper"}
                />
                <label
                  htmlFor="rentalType"
                  className="font-normal text-[#676767] text-sm"
                >
                  With Skipper
                </label>
              </div>
              <p className="font-normal text-[#676767] text-sm">€10</p>
            </div>
          </div>
          <p className="font-normal text-[#676767] text-sm">
            You will only be charged if your request is confirmed
          </p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-[#000000] font-normal">Total Amount</p>
            <p className="text-lg font-bold text-[#CBA557]">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className="btn-5 flex items-center justify-center space-x-2"
          >
            <p>Instant Booking</p>
            <span className="text-2xl">
              <RxChevronRight />
            </span>
          </button>
        </div>
      </div>
      <div className="my-[5%] mx-[6%]">
        <div className="mt-[4%]">
          <h1 className="mb-[2%] heading-book">Prices</h1>
          <div className="flex flex-wrap gap-4">
            <Prices
              month="January"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="February"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="March"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="April"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="May"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="June"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="July"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="August"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="September"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="October"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="November"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
            <Prices
              month="December"
              normalDay="$30"
              normalHalfMorning="$30"
              normalHalfAfternoon="$30"
              weekend="$30"
              weekendHalfMorning="$30"
              weekendHalfAfternoon="$30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
