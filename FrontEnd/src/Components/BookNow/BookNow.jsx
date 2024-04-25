import React, { useState } from 'react';
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

import Prices from './Prices';

const BookNow = () => {
  return (
    <>
      <div className="boat-page-bg !h-[50svh] md:!h-[100svh]"></div>
      <div className="md:container flex flex-col md:flex-row mx-[3%] gap-[3%] mt-[2%] md:mx-[6%] md:gap-[5%] md:mt-[2%]">
        <div className="left-container md:w-[54%]">
          <div className="top mt-[3%]">
            <h1 className="font-sans font-poppins font-medium text-3xl text-[#000000]">
              Yachts La Corniche
            </h1>

            <div className="flex my-3 md:justify-between justify-center flex-wrap space-y-3 space-x-3">
              <div className=" flex justify-center items-center">
                <span className=" mr-1 text-[#B7B7B7]">
                  <FaLocationDot />
                </span>
                <p className="font-sans font-poppins font-normal text-[#B7B7B7]">
                  PRAIA DE LEÇA DA PALMEIRA
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

            <div className="flex mt-[8%] gap-[2%] flex-wrap sm:justify-between border-t border-b border-[#CBA557] border-opacity-30 py-2  items-center space-y-1 justify-center">
              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className=" text-[#CBA557]">
                  <HiOutlineUserGroup />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  8 pers
                </p>
              </div>

              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className=" text-[#CBA557] transform">
                  <RiAnchorLine />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  40 hp
                </p>
              </div>

              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className=" text-[#CBA557]">
                  <PiEngine />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  2 Engines
                </p>
              </div>

              <div className="flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4">
                <span className=" text-[#CBA557]">
                  <TbTool />
                </span>
                <p className="font-sans font-poppins font-normal text-[#808080]">
                  2019
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
              All our Deluxe rooms have big windows to help you take a broad
              view of the cityscape and nature. We offer bigger bed and every
              bathroom has bathtub and shower, which brings relaxation to you
              after a long day.Fast WIFI connection, satelite TV and
              international standard electric socket are standard throughout
              Hotel. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit. A wonderful
              serenity has taken possession of my entire soul, like these sweet
              mornings of spring which I enjoy with my whole heart. I am alone,
              and feel the charm of existence in this spot, which was created
              for the bliss of souls like mine. I am so happy, my dear friend,
              so absorbed in the exquisite sense of mere tranquil existence,
              that I neglect my talents. I should be incapable of drawing a
              single stroke at the present moment; and yet I feel that I never
              was a greater artist than now.
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
                This vehicle has the authorization to carry out the activity in
                the marine protected area of the Secche della Meloria. We are
                pleased to confirm that our vehicle has the authorization to
                carry out the activity within the marine protected area of the
                Secche della Meloria. This area, with a history dating back to
                the twelfth century, was originally marked by the tower built by
                the maritime republic of Pisa to indicate the presence of
                shallow waters in the ancient Porto Pisano. During our
                excursions in this area, you have the chance to spot dolphins
                that travel the routes inside the cetacean sanctuary. This is an
                exciting and fascinating event that will allow you to get in
                touch with the wonderful marine wildlife present in the area. We
                are proud to offer the opportunity to explore this protected
                area and share the beauty and richness of its ecosystem with our
                customers. Our authorization allows us to operate in accordance
                with the rules and regulations established by the marine
                protected area, ensuring responsible navigation and respect for
                the marine environment. So, when you book our boat rental, you
                will have the opportunity to live a unique experience within the
                marine protected area of the Secche della Meloria, enjoying the
                spectacular nature and marine fauna that this area offers. We
                encourage you to prepare to venture into this remarkable
                environment and enjoy the thrill of spotting dolphins as you
                explore the routes within the cetacean sanctuary. Your
                experience on board our vehicle will be truly unforgettable.
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
                      14.42m
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
                        <RiRulerLine />
                      </span>
                      <p className=" text-[#676767]">Draft</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>

                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <RiRulerLine />
                      </span>
                      <p className=" text-[#676767]">Draught</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>

                  <div className="py-5 px-8 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <RiRulerLine />
                      </span>
                      <p className=" text-[#676767]">Fuel Tank</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>

                  <div className="py-5 px-8 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <RiRulerLine />
                      </span>
                      <p className=" text-[#676767]">Fuel Type</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>

                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <RiRulerLine />
                      </span>
                      <p className=" text-[#676767]">Power</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>

                  <div className="py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30 w-44 h-20">
                    <div className="flex gap-1 items-center">
                      <span className=" text-[1.15rem] text-[#CBA557]">
                        <RiRulerLine />
                      </span>
                      <p className=" text-[#676767]">Built</p>
                    </div>
                    <p className=" text-sm text-[#676767] text-opacity-70 text-center">
                      8m
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[4%]">
              <h1 className="heading-book">Equipment</h1>
              <h2 className="min-heading mt-[2%]">Comfort</h2>

              <div className="flex flex-wrap">
                {/* Awning */}
                <div className="equip-items flex items-center gap-2">
                  <img src={Awning} alt="" className=" w-6 h-6" />

                  <p className="text-[#000000] font-normal text-opacity-50">
                    Awning
                  </p>
                </div>

                {/* Table */}
                <div className="equip-items flex items-center gap-2">
                  <img src={Table1} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Table
                  </p>
                </div>

                {/* Sundeck */}
                <div className="equip-items flex items-center gap-2">
                  <img src={Sundeck} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Sundeck
                  </p>
                </div>

                {/* Deck shower */}
                <div className="equip-items flex items-center gap-2">
                  <img src={DeckShower} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Deck shower
                  </p>
                </div>

                {/* Free parking on site */}
                <div className="equip-items flex items-center gap-2">
                  <img src={FreeParking} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Free parking on site
                  </p>
                </div>

                {/* Swim platform */}
                <div className="equip-items flex items-center gap-2">
                  <img src={SwimPlatform} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Swim platform
                  </p>
                </div>

                {/* Outdoor cushions */}
                <div className="equip-items flex items-center gap-2">
                  <img src={OutdoorCushion} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Outdoor cushions
                  </p>
                </div>

                {/* MP3 player */}
                <div className="equip-items flex items-center gap-2">
                  <img src={Mp3} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    MP3 player
                  </p>
                </div>

                {/* Bluetooth Connection */}
                <div className="equip-items flex items-center gap-2">
                  <img src={Bluetooth} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Bluetooth Connection
                  </p>
                </div>

                {/* DVD player */}
                <div className="equip-items flex items-center gap-2">
                  <img src={Dvd} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    DVD player
                  </p>
                </div>
              </div>

              <h2 className="min-heading mt-[2%]">Energy</h2>
              <div className="flex flex-wrap">
                <div className="equip-items flex items-center gap-2">
                  <img src={Socket220} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Socket 220V
                  </p>
                </div>

                <div className="equip-items flex items-center gap-2">
                  <img src={UsbPlug} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    USB plug
                  </p>
                </div>
              </div>

              <h2 className="min-heading mt-[2%]">Navigation</h2>
              <div className="flex flex-wrap">
                <div className="equip-items flex items-center gap-2">
                  <img src={GPS} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    GPS
                  </p>
                </div>

                <div className="equip-items flex items-center gap-2">
                  <img src={Sounder} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Sounder
                  </p>
                </div>

                <div className="equip-items flex items-center gap-2">
                  <img src={ElectricWindlass} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Electric windlass
                  </p>
                </div>

                <div className="equip-items flex items-center gap-2">
                  <img src={OutboardEngine} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Outboard engine
                  </p>
                </div>

                <div className="equip-items flex items-center gap-2">
                  <img src={Speedometer} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Speedometer
                  </p>
                </div>

                <div className="equip-items flex items-center gap-2">
                  <img src={Anemometer} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Anemometer
                  </p>
                </div>

                <div className="equip-items flex items-center gap-2">
                  <img src={Compass} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Compas
                  </p>
                </div>
              </div>

              <h2 className="min-heading mt-[2%]">Services</h2>
              <div className="flex flex-wrap">
                <div className="equip-items flex items-center gap-2">
                  <img src={Surbed} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Surbed Rental
                  </p>
                </div>

                <div className="equip-items flex items-center gap-2">
                  <img src={UmbrellaRental} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Umbrella Rental
                  </p>
                </div>

                <div className="equip-items flex items-center gap-2">
                  <img src={PoolLifeguard} alt="" className=" w-6 h-6" />
                  <p className="text-[#000000] font-normal text-opacity-50">
                    Swimming pool life guard
                  </p>
                </div>
              </div>
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

        <div className="right-container md:w-[30%] px-5 py-10 bg-white rounded-xl shadow-checkout flex flex-col gap-8 md:h-full">
          <div className="flex items-center gap-1">
            <p className=" text-sm text-[#000000] font-normal">Total</p>
            <p className=" text-lg font-bold text-[#CBA557]">
              $154.00/ Half Day
            </p>
          </div>

          <div className=" flex flex-col">
            <label className=" text-sm text-[#000000] font-normal mb-[1%]">
              Duration
            </label>
            <input
              type="date"
              name=""
              id=""
              placeholder="Choose Date"
              className=" border border-[#E8E8E8] px-6 py-4 rounded-lg"
            />
          </div>

          <div className="flex gap-12 my-[1%]">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm ">
                Half Day
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm ">
                Full Day
              </span>
            </label>
          </div>

          <div>
            <select
              id="bookingType"
              className="border border-[#E8E8E8] px-6 py-4 rounded-lg w-full bg-white"
            >
              <option value="">Choose...</option>
              <option value="halfDayMorning">Half Day Morning</option>
              <option value="halfDayEvening">Full Day Evening</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm ">
                Half Day morning (Prize €65)
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm ">
                Half Day Evening (Prize €55)
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className=" font-normal text-[#676767] text-sm ">
                All Day(Prize €250)
              </span>
            </label>
          </div>

          <div className="">
            <h2 className=" text-sm font-normal text-[#000000] mb-[2%]">
              No of Persons
            </h2>
            <select
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
            </select>
          </div>

          <div className=" space-y-4">
            <h1 className=" font-normal text-lg text-[#000000">
              Type of Rental
            </h1>

            <div className="flex justify-between">
              <div className=" flex gap-2 items-center">
                <input type="checkbox" className="w-5 h-5" />
                <p className=" font-normal text-[#676767] text-sm">
                  With Skipper
                </p>
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
                <input type="checkbox" className="w-5 h-5" />
                <p className=" font-normal text-[#676767] text-sm">
                  Bagni Pancaldi Tickets
                </p>
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

          <button className="btn-5 flex items-center justify-center space-x-2">
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
    </>
  );
};

export default BookNow;
