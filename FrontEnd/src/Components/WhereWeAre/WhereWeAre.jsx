import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { LuClock4 } from 'react-icons/lu';

const WhereWeAre = () => {
  return (
    <div>
      <div className="Services-page-bg !h-[50svh] md:!h-[100svh]">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Where we are
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            An Enchanting Experience on the Livorno Seafront
          </p>
        </div>
      </div>

      <div className="mx-[3%] md:mx-[6%] mt-[3%]">
        <h1 className="text-3xl font-medium">
          Collection and delivery of vehicles
        </h1>
        <div className=" mx-[6%] mt-[3%]">
          <h1 className="text-3xl font-medium">
            Collection and delivery of vehicles
          </h1>
          <br />
          <p className="text-[#676767] text-lg">
            DaDi Rent welcomes you at Bagni Pancaldi Acquaviva, located in Viale
            Italia 62, in the heart of Livorno's seafront. Here you can immerse
            yourself in a unique experience, surrounded by the beauty of the
            Tuscan islands and Corsica that stand out in the background. It
            borders the Terrazza Mascagni, offering you breathtaking scenery
            that extends to the Meloria Park, further enriching the beauty of
            the surrounding panorama. Once you arrive, simply enter through the
            southern entrance of the establishment, near the naval academy of
            Livorno, and head towards our moorings located under the swimming
            pool. Be sure to communicate that you have booked a boat at DaDi
            Rent and show your reservation for quick and easy pick-up. We await
            you in this elegant and regenerating place, where you can enjoy
            impeccable services and an enchanting view of the sea.
          </p>

          <div className="contact-information flex flex-col md:flex-row gap-[3%] my-[2%]">
            <div className=" flex flex-col gap-[2%] w-full md:w-[57%] mb-[2%]">
              <div className="bg-white where-shadow px-5 py-5 md:px-7 md:py-6 mb-[2%] rounded-xl min-h-52">
                <div className=" flex gap-[9px]">
                  <span className=" text-4xl text-[#CBA557]">
                    <LuClock4 />
                  </span>
                  <h2 className=" text-lg md:text-2xl text-[#383838] font-medium ">
                    24/7 support
                  </h2>
                </div>
                <p className=" pl-11 pr-8 pt-3">
                  If you have any difficulties call us, we will help you at +39
                  3701564317
                </p>
              </div>

              <div className="bg-white where-shadow px-5 py-5 md:px-7 md:py-6 mb-[2%] rounded-xl md:min-h-52">
                <div className=" flex gap-[9px]">
                  <span className=" text-4xl text-[#CBA557]">
                    <LuClock4 />
                  </span>
                  <h2 className=" text-lg md:text-2xl text-[#383838] font-medium ">
                    Return of vehicles
                  </h2>
                </div>
                <p className="pl-11 pr-8 pt-3">
                  For the return of our vehicles, we ask you to call us 30
                  minutes before your return to the place of delivery, so that
                  we can help you with the return
                </p>
              </div>

              <div className="bg-white where-shadow px-5 py-5 md:px-7 md:py-6 mb-[2%] rounded-xl md:min-h-52">
                <div className=" flex gap-[9px]">
                  <span className=" text-4xl text-[#CBA557]">
                    <LuClock4 />
                  </span>
                  <h2 className=" text-lg md:text-2xl text-[#383838] font-medium ">
                    Satellite Position Tracking
                  </h2>
                </div>
                <p className="pl-11 pr-8 pt-3">
                  With our satellite tracking system we have the information
                  about your exact location. In case of an emergency, we will
                  find you with our safety boat and bring you back safely!
                </p>
              </div>
            </div>

            <MapContainer
              center={[43.52992, 10.3054838]}
              zoom={20}
              maxZoom={18}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker position={[43.52992, 10.3054838]} />
            </MapContainer>
          </div>
          <h1 className="text-3xl font-medium">Car parking in the area</h1>

          <div className=" flex flex-wrap gap-[2%] my-[2%]">
            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  24/7 Parking along Viale Italia (Recommended):
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  If you are looking for convenient and free parking, we
                  recommend parking along Viale Italia, near the factory.
                  Although you may notice some blue stalls along the seafront,
                  on the stretch of Viale Italia from Bellana to Barriera
                  Margherita, we want to reassure you that they are free for
                  everyone. Paid parking will remain available at the Bellana
                  car park, in Piazza Modigliani and Piazza San Jacopo. This
                  option will allow you to easily reach our moorings, without
                  worrying about additional costs. Have a good trip and enjoy
                  your rental!
                </p>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  Via Malta (Paid parking):
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  Walking distance: approximately 8 minutes
                  <br />
                  Summer Rates (Mon-Sun 08:00 - 00:00):
                  <br />
                  1 hour: €1.00
                  <br />
                  Maximum: €4.50
                  <br />
                  Flat Rate Rate:
                  <br />
                  Entry after 08:00, exit before 14:00: €2.00
                  <br />
                  Entry after 2pm, exit before 12am: €2.50
                  <br />
                  Electric Vehicles: Free (24 hours
                </p>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  Via del Forte dei Cavalleggeri, 30 (Free parking):
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  Walking distance: approximately 13 minutes
                </p>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  Renato Martelli School Camp, Via dei Pensieri, 37 (Free
                  parking):
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  Walking distance: approximately 32 minutes
                </p>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  Porta a Mare, Piazza Luigi Orlando, 61 (Paid parking):
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  Rates: €1.00 for the first two hours, €1.00 for each
                  subsequent
                  <br />
                  hour or fraction thereof
                  <br />
                  Walking distance: approximately 17 minutes
                  <br />
                  Bus option: Line 1 with 3 stops to arrive in 6 minutes
                </p>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className="flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  Livorno Aquarium (Paid parking):
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  Rates (from 9.00 am to 9.00 pm):
                  <br />
                  €1.50 for the 1st hour or fraction,
                  <br />
                  €1.50 from the 2nd hour for each subsequent hour or fraction,
                  <br />
                  €1.00 from the 3rd hour for every subsequent hour or fraction
                  <br />
                  thereof
                  <br />
                  Walking distance: approximately 8 minutes
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-medium">
            Choose car parking that best suits your needs and enjoy your rental!
          </h1>

          <section className="bg-[#CBA5574D] mt-12 py-12 px-[3%] md:px-[6%] -mb-[3%]">
            <h1 className="text-3xl text-[#383838] font-medium mb-4 uppercase">
              Personalized delivery and collection
            </h1>
            <p className="text-lg text-[#383838]">
              Based on your indications and needs, we can carry out this service
              of collection and delivery of the rented vehicle, even at home
              with a surcharge possibly to be agreed in the extra areas not
              indicated by the booking system. However, please note that the
              areas surrounding the pier of Ardenza is free. For special needs,
              home delivery, a surcharge will be granted based on the vehicle
              and frequency of the rental.
              <br />
              We can deliver, on multi-lingual bookings throughout the coast
              where foreseen, the possibility of approaching the coast due to
              the presence of authorized piers and landing lanes and ports. The
              surcharge will be granted based on the vehicle and frequency of
              the rental.
            </p>
            <br />

            <Link to="/Our-fleet">
              <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
                Book Now
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhereWeAre;
