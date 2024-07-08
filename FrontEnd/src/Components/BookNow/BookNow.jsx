import { FaLocationDot } from 'react-icons/fa6';
import { IoShareSocialOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { PiEngine } from 'react-icons/pi';
import { RiAnchorLine } from 'react-icons/ri';
import { TbTool } from 'react-icons/tb';
import { GrUserPolice } from 'react-icons/gr';
import { IoIosArrowUp } from 'react-icons/io';
import { RiRulerLine } from 'react-icons/ri';
import { PiDiamondsFourLight } from 'react-icons/pi';
import { RxChevronRight } from 'react-icons/rx';
import { IoHammerOutline } from 'react-icons/io5';
import FleetCard from '../Home/FleetCard';
import fleetBoat1 from '../../assets/Images/fleetBoat1.webp';
import fleetBoat2 from '../../assets/Images/fleetBoat2.webp';
import fleetBoat3 from '../../assets/Images/fleetBoat3.webp';
import Awning from '../../assets/Images/awning.png';
import Table1 from '../../assets/Images/table.png';
import Sundeck from '../../assets/Images/sundeck.png';
import DeckShower from '../../assets/Images/deckShower.png';
import FreeParking from '../../assets/Images/freeParking.png';
import SwimPlatform from '../../assets/Images/swimPlatform.png';
import OutdoorCushion from '../../assets/Images/outdoorCushion.png';
import Mp3 from '../../assets/Images/mp3.png';
import Bluetooth from '../../assets/Images/bluetooth.png';
import Dvd from '../../assets/Images/dvdPlayer.png';
import Socket220 from '../../assets/Images/socket220.png';
import UsbPlug from '../../assets/Images/usbPlug.png';
import GPS from '../../assets/Images/GPS.png';
import Sounder from '../../assets/Images/Sounder.png';
import ElectricWindlass from '../../assets/Images/electric-windlass.png';
import OutboardEngine from '../../assets/Images/outboard-engine.png';
import Speedometer from '../../assets/Images/speedometer.png';
import Anemometer from '../../assets/Images/anemometer.png';
import Compass from '../../assets/Images/compass.png';
import Surbed from '../../assets/Images/surbed.png';
import UmbrellaRental from '../../assets/Images/umbrella-rental.png';
import PoolLifeguard from '../../assets/Images/pool-lifeguard.png';
import Draught from '../../assets/Images/Draught.png';
import FuelType from '../../assets/Images/FuelType.png';
import FuelTank from '../../assets/Images/FuelTank.png';

import Prices from './Prices';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import baseURL from '../../../APi/BaseUrl';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51OwXJ9RtqZkTuUjdPn7IZ2nUJQ77VYiDdsW3s8ddWFQRUh4yUWKiXhYLAy54Y2249fgzSTPtcvfgUr2MoiWhBE5p00zp6MUFHe');
const BookNow = () => {
  const { id } = useParams()
  const { fetchBoatDetailsById } = useContext(UserContext);
  const [boatDetails, setBoatDetails] = useState(null);
  const [error, setError] = useState(null);

  const [data, setData] = useState({ date: "", day: "normal", amount: null, boatName: "", rateType: "", availableDate: "" })
  const [ratesArr, setRatesArr] = useState(null)
  useEffect(() => {
    const getBoatDetails = async () => {
      try {
        const details = await fetchBoatDetailsById(id);
        setBoatDetails(details);
        setData({ ...data, boatName: details.boat.type })
      } catch (error) {
        setError(error.message || 'Error loading boat details');
      }
    };
    getBoatDetails();
  }, [id, fetchBoatDetailsById]);
  // Handle loading state


  // console.log("id",id)

  useEffect(() => {
    if (boatDetails) {
      const { rate } = boatDetails;
      const normalDayRates = Object.keys(rate[0]?.normalDayRates)
      const weekendRates = Object.keys(rate[0]?.weekendRates)
      setRatesArr({ normalDayRates, weekendRates })
    }
  }, [boatDetails])
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setData((prev) => {
        const updated = prev[name].includes(value)
          ? prev[name].filter((item) => item !== value)
          : [...prev[name], value];

        return {
          ...prev,
          [name]: updated
        };
      });
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };
  if (!boatDetails && !error) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }
  // submit handler for creating stripe session
  const handleSubmit = async () => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      return toast.error("User must be login to book a boat")
    }
    const decoded = jwtDecode(token)
    const userId = decoded._id
    if (!userId) {
      return toast.error("Something went wrong")
    }
    try {
      const response = await baseURL.post('/checkout/payment', {
        userId, amount: Number(data.amount.split(" ")[1]) * 100, boatName: data.boatName, rateType: data.day == "weekend" ? data.day + data.amount.split(" ")[0] : data.amount.split(" ")[0], totalAmount: Number(data.amount.split(" ")[1]) * 100, availableDate: data.availableDate, boatId: boatDetails?.boat?._id
      })
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
  }
  console.log("data", boatDetails);
  return (
    <div>
      <div className="boat-page-bg !h-[50svh] md:!h-[100svh]"></div>
      <div className="flex flex-col md:flex-row mx-[3%] gap-[3%] mt-[2%] md:mx-[6%] md:gap-[7%] md:mt-[2%]">
        <div className="left-container md:w-[60%]">
          <div className="top mt-[3%]">
            <h1 className="font-sans font-poppins font-medium text-3xl text-[#000000]">
              {boatDetails?.rental.map((item) => (item.BoatName))}
            </h1>

            <div className="flex my-3 md:justify-between justify-center flex-wrap space-y-3 space-x-3">
              <div className=" flex justify-center items-center">
                <span className=" mr-1 text-[#B7B7B7]">
                  <FaLocationDot />
                </span>
                <p className="font-sans font-poppins font-normal text-[#B7B7B7]">
                  {boatDetails?.boat?.region}
                </p>
              </div>

              <div className="flex gap-3 justify-center items-center">
                <button className="flex justify-center items-center gap-1 border rounded-md border-[#CBA557] px-4 py-1">
                  <span className=" text-[1.25rem] text-[#CBA557] ">
                    <IoShareSocialOutline />
                  </span>
                  <p className="text-[#676767] ">Share</p>
                </button>

                <button className="flex justify-center items-center gap-1 border rounded-md border-[#CBA557] px-4 py-1">
                  <span className=" text-[1.25rem] text-[#CBA557]">
                    <IoHeartOutline />
                  </span>
                  <p className="text-[#676767]">Add to Wishlist</p>
                </button>
              </div>
            </div>

            <div className="flex mt-[8%] gap-[1%] flex-wrap sm:justify-between border-t border-b border-[#CBA557] border-opacity-30 py-2  items-center space-y-1 justify-center">
              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className=" text-[#CBA557]">
                  <HiOutlineUserGroup />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  {boatDetails?.boat?.boardingCapacity
                  }pers
                </p>
              </div>

              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className=" text-[#CBA557] transform">
                  <RiAnchorLine />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  {boatDetails?.boat?.totalEnginePowerHP} hp
                </p>
              </div>

              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className=" text-[#CBA557]">
                  <PiEngine />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  {boatDetails?.boat?.model}
                </p>
              </div>

              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className=" text-[#CBA557]">
                  <TbTool />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  {boatDetails?.boat?.year}
                </p>
              </div>

              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className=" text-[#CBA557]">
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
              {boatDetails.description.map((item, key) => (
                <span key={key}>{item?.details?.descriptionEnglish}</span>
              ))}
            </p>

            <div className=" mt-[4%]">
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

            <div className=" mt-[4%]">
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
                {boatDetails.description.map((item, key) => (
                  <span key={key}>{item.details.descriptionItalian}</span>
                ))}
              </p>
            </div>

            <div className=" mt-[4%]">
              <div className="flex items-center gap-[1%] text-[#CBA557] ">
                <p className=" underline">View Less</p>
                <span>
                  <IoIosArrowUp />
                </span>
              </div>

              <div className="mt-[2%]">
                <div className="flex flex-wrap gap-[2%]">
                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <RiRulerLine />
                      </span>
                      <p className=" text-[#676767]">Length</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails?.boat?.lengthMeters}
                    </p>
                  </div>

                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <RiRulerLine />
                      </span>
                      <p className=" text-[#676767]">Width</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>

                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <IoHammerOutline />
                      </span>
                      <p className=" text-[#676767]">Draft</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>

                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <img src={Draught} alt="" className=" w-5 h-5" />
                      <p className=" text-[#676767]">Draught</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails.boat.droughtMeters}m
                    </p>
                  </div>

                  <div className="py-5 px-8 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <img src={FuelTank} alt="" className=" w-4 h-5" />
                      <p className=" text-[#676767]">Fuel Tank</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails?.boat?.fuelTankLiters}m
                    </p>
                  </div>

                  <div className="py-5 px-8 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <img src={FuelType} alt="" className=" w-5 h-5" />
                      <p className=" text-[#676767]">Fuel Type</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>

                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <RiAnchorLine />
                      </span>
                      <p className=" text-[#676767]">Power</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails?.boat?.totalEnginePowerHP} hp
                    </p>
                  </div>

                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <TbTool />
                      </span>
                      <p className=" text-[#676767]">phone</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      {boatDetails?.boat?.telephone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[4%]">
              <h1 className="heading-book">Equipment</h1>
              <h2 className="min-heading mt-[2%]">Comfort</h2>

              {boatDetails.equipment.map((item) => (
                <div className="flex flex-wrap">
                  {/* Awning */}
                  <div>

                    <ul>
                      {boatDetails.equipment.map((item) => (
                        <li key={item._id}>
                          <ul className='flex gap-10'>
                            {item.comfort.map((comfortItem, index) => (
                              <li key={index} className="text-[#000000] font-normal text-opacity-50">{comfortItem}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-medium text-lg mt-10">Navigation:</h2>
                    <ul>
                      {boatDetails.equipment.map((item) => (
                        <li key={item?._id}>

                          <ul className='flex gap-10'>
                            {item.navigation.map((navItem, index) => (
                              <li key={index} className="text-[#000000] font-normal text-opacity-50">{navItem}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-medium text-lg mt-10">Services:</h2>
                    <ul>
                      {boatDetails.equipment.map((item) => (
                        <li key={item._id}>

                          <ul className="flex gap-10">
                            {item.services.map((serviceItem, index) => (
                              <li key={index} className="text-[#000000] font-normal text-opacity-50">{serviceItem}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-medium text-lg mt-10">Energy:</h2>
                    <ul>
                      {boatDetails?.equipment.map((item) => (
                        <li key={item?._id}>
                          <ul className="flex gap-10">
                            {item.energy.map((energyItem, index) => (
                              <li key={index} className="text-[#000000] font-normal text-opacity-50 ">{energyItem}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}


            </div>

            <div className="mt-[4%]">
              <h1 className="heading-book">Things to know</h1>
              <div className=" mt-[3%] gap-3 flex">
                <span className="text-[#CBA557] text-2xl">
                  <PiDiamondsFourLight />
                </span>
                <p className="font-medium text-[#191919]">
                  Security Deposit <br className=" mb-[1%]" />
                  <p className=" text-sm font-normal text-opacity-70 text-[#4B465C]">
                    Please note that the rental fee does not Security Deposit
                    costs.
                  </p>
                </p>
              </div>

              <div className="mt-[3%] gap-3 flex">
                <span className="text-[#CBA557] text-2xl">
                  <PiDiamondsFourLight />
                </span>
                <p className="font-medium text-[#191919]">
                  Fuel excluded <br className=" mb-[1%]" />
                  <p className=" text-sm font-normal text-opacity-70 text-[#4B465C]">
                    Please note that the rental fee does not include fuel costs.
                    Renters will be responsible for purchasing fuel separately
                    during the rental period
                  </p>
                </p>
              </div>

              <div className="mt-[3%] gap-3 flex">
                <span className="text-[#CBA557] text-2xl">
                  <PiDiamondsFourLight />
                </span>
                <p className="font-medium text-[#191919]">
                  Pre-Payment <br className=" mb-[1%]" />
                  <p className=" text-sm font-normal text-opacity-70 text-[#4B465C]">
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
                  <br className=" mb-[1%]" />
                  <p className=" text-lg font-normal text-opacity-70 text-[#4B465C]">
                    Customer Impossibility
                  </p>
                  <p className=" text-sm font-normal text-opacity-70 text-[#4B465C]">
                    Full refund of rental and deposit paid up to 48 hours before
                    arrival. Refund of up to 70% up to 24 hours before the
                    rental, with loss of the deposit amounts paid (which will be
                    deducted if the rental is rescheduled). Notification of
                    impossibility required within 24 hours prior to rental for
                    full refund.
                  </p>
                  <p className=" text-lg font-normal text-opacity-70 text-[#4B465C] mt-1">
                    Bad weather:
                  </p>
                  <p className=" text-sm font-normal text-opacity-70 text-[#4B465C]">
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

              <p className=" mt-[3%] text-sm font-normal text-opacity-70 text-[#4B465C] leading-5">
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

            {/* <div className="mt-[4%]">
              <h1 className="heading-book">Location</h1>
            </div> */}
          </div>
        </div>
        <div className="right-container md:w-[35%] px-5 py-10 bg-white rounded-xl shadow-checkout flex flex-col gap-8 md:h-full">
          <div className="flex items-center gap-1">
            <p className=" text-sm text-[#000000] font-normal">Total</p>
            <p className=" text-lg font-bold text-[#CBA557]">
              $154.00/ Half Day
            </p>
          </div>

          <div className=" flex flex-col">
            <label htmlFor='data' className=" text-sm text-[#000000] font-normal mb-[1%]">
              Duration
            </label>
            <input
              type="date"
              name="availableDate"
              onChange={handleChange}
              id="date"
              placeholder="Choose Date"
              className=" border border-[#E8E8E8] px-6 py-4 rounded-lg"
            />
          </div>

          <div className="flex gap-12 my-[1%]">
            <label className="flex items-center gap-2">
              <input type="radio" name="day" value="normal" onChange={handleChange} className="w-5 h-5" checked={data.day == "normal"} />
              <span className=" font-normal text-[#676767] text-sm ">
                Normal Day
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" checked={data.day == "weekend"} value={"weekend"} onChange={handleChange} name="day" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm ">
                Weekend
              </span>
            </label>
          </div>

          {data.day == "normal" && <div className="flex flex-col gap-4">
            {
              ratesArr && ratesArr?.normalDayRates.map((item) => {
                return (
                  <>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="amount" value={item + " " + boatDetails.rate[0].normalDayRates[item]} onChange={handleChange} className="w-5 h-5" />
                      <span className=" font-normal text-[#676767] text-sm ">
                        {item} ({boatDetails.rate[0].normalDayRates[item]})
                      </span>
                    </label>
                  </>
                )
              })
            }
          </div>}
          {data.day == "weekend" && <div className="flex flex-col gap-4">
            {
              ratesArr && ratesArr?.weekendRates.map((item) => {
                return (
                  <>
                    <label className="flex items-center gap-2">
                      <input type="radio" name='amount' value={item + " " + boatDetails.rate[0].weekendRates[item]} onChange={handleChange} className="w-5 h-5" />
                      <span className=" font-normal text-[#676767] text-sm ">
                        {item} ({boatDetails.rate[0].weekendRates[item]})
                      </span>
                    </label>
                  </>
                )
              })
            }
          </div >}
          <div className="">
            <h2 className=" text-sm font-normal text-[#000000] mb-[2%]">
              No of Persons
            </h2>
            {/* <select
              id="bookingType"
              className="border border-[#E8E8E8] px-6 py-4 rounded-lg w-full bg-white"
            >
              <option value="">Select number of persons</option>
              <option value="halfDayMorning">1</option>
              <option value="halfDayEvening">2</option>
              <option value="halfDayEvening">3</option>
              <option value="halfDayEvening">4</option>
              <option value="halfDayEvening">5</option>
              <option value="halfDayEvening">6</option>
              <option value="halfDayEvening">7</option>
              <option value="halfDayEvening">8</option>
              <option value="halfDayEvening">9</option>
              <option value="halfDayEvening">10</option>
            </select> */}
            <h1 className='border p-4 rounded-md'>{boatDetails?.boat?.boardingCapacity}</h1>
          </div>

          <div className=" space-y-4">
            <h1 className=" font-normal text-lg text-[#000000">
              Type of Rental
            </h1>

            <div className="flex justify-between">
              <div className=" flex gap-2 items-center">
                <input type="checkbox" checked={boatDetails && !boatDetails.description[0]?.rentalType?.withoutSkipper} id='rentalType' name='rentalType' className="w-5 h-5" value={"with skipper"} />
                <label htmlFor='rentalType' className=" font-normal text-[#676767] text-sm">
                  With Skipper
                </label>
              </div>
              <p className=" font-normal text-[#676767] text-sm">$10</p>
            </div>
          </div>

          <div className=" space-y-4">
            <h1 className=" font-normal text-lg text-[#000000">
              Extra options
            </h1>

            <div className="flex justify-between">
              <div className=" flex gap-2 items-center">
                <input name='extraOptions' id='extraOptions' type="checkbox" className="w-5 h-5" value={"Bagni Pancaldi Tickets"} />
                <label htmlFor='extraOptions' className=" font-normal text-[#676767] text-sm">
                  Bagni Pancaldi Tickets
                </label>
              </div>
              <p className=" font-normal text-[#676767] text-sm">$10</p>
            </div>
            <p className="font-normal text-[#FF6347] text-sm">
              Fuel is excluded
            </p>
          </div>

          <p className=" font-normal text-[#676767] text-sm">
            You will only be charged if your request is confirmed
          </p>

          <button onClick={handleSubmit} className="btn-5 flex items-center justify-center space-x-2">
            <p>Instant Booking</p>
            <span className=" text-2xl">
              <RxChevronRight />
            </span>
          </button>

          <p className=" text-center text-lg font-medium text-[#CBA557]">
            Show price list
          </p>
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

      <div className="my-[5%] mx-[6%]">
        <h1 className="heading-book">Similar Sailboats Nearby</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <FleetCard
            boatImg={fleetBoat1}
            title="Lady Gio - Inflatable Boat Tornado 525 Fasty"
            numberOfPersons={8}
            length="5.4 Meters"
            power="40 HP"
            licenseRequired="No"
          />

          <FleetCard
            boatImg={fleetBoat2}
            title="Annina Open Sea Boat Ghost 550"
            numberOfPersons={6}
            length="5.4 Meters"
            power="40 HP"
            licenseRequired="No"
          />
          <FleetCard
            boatImg={fleetBoat3}
            title="Super Mario Sessa Key Wide 16"
            numberOfPersons={5}
            length="5.4 Meters"
            power="40 HP"
            licenseRequired="No"
          />
        </div>
      </div>
    </div>
  );
};

export default BookNow;
