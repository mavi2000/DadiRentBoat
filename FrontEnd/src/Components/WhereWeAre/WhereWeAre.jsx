import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LuClock4 } from 'react-icons/lu';
import LocationFilled from "../../assets/Images/location-filled.png";
import whatsappImage from "../../assets/Images/WhatsApp Image 2024-08-07 at 8.07.39 PM.jpeg";
import vector from "../../assets/Images/Vector4.png"

const WhereWeAre = () => {
  const { t } = useTranslation();
  const destination = [ 43.5471169, 10.3028054];
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination[0]},${destination[1]}`;

  // Custom icon for the marker
  const locationIcon = L.icon({
    iconUrl: vector,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <div>
      <div className="Services-page-bg !h-[50svh] md:!h-[100svh]">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            {t('whereWeAreTitle')}
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            {t('whereWeAreSubtitle')}
          </p>
        </div>
      </div>

      <div className="mx-[3%] md:mx-[6%] mt-[3%]">
        <h1 className="text-3xl font-medium">
          {t('collectionDeliveryTitle')}
        </h1>
        <div className=" mx-[6%] mt-[3%]">
          <h1 className="text-3xl font-medium">
            {t('collectionDeliveryTitle')}
          </h1>
          <br />
          <p className="text-[#676767] text-lg">
            {t('collectionDeliveryDescription')}
          </p>

          <div className="contact-information flex flex-col md:flex-row gap-[3%] my-[2%]">
            <div className=" flex flex-col gap-[2%] w-full md:w-[57%] mb-[2%]">
              <div className="bg-white where-shadow px-5 py-5 md:px-7 md:py-6 mb-[2%] rounded-xl min-h-52">
                <div className=" flex gap-[9px]">
                  <span className=" text-4xl text-[#CBA557]">
                    <LuClock4 />
                  </span>
                  <h2 className=" text-lg md:text-2xl text-[#383838] font-medium ">
                    {t('supportTitle')}
                  </h2>
                </div>
                <p className="pl-11 pr-8 pt-3">
                  {t('supportDescription')}
                </p>
                <p className="pl-11 pr-8 pt-3 flex items-center">
                  <span>{t('locationAddress')}</span>
                </p>
                <p className="pl-11 pr-8 pt-3">
                  <span>🌐 <a href="http://www.dadirent.it" target="_blank" rel="noopener noreferrer">www.dadirent.it</a></span>
                  <br />
                  <span>📧 <a href="mailto:info@dadirent.it">info@dadirent.it</a></span>
                  <br />
                  <span>📧 <a href="mailto:dadi.rent@gmail.com">dadi.rent@gmail.com</a></span>
                </p>
                <p className="pl-11 pr-8 pt-3">
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    {t('getDirections')}
                  </a>
                </p>
              </div>

              <div className="bg-white where-shadow px-5 py-5 md:px-7 md:py-6 mb-[2%] rounded-xl md:min-h-52">
                <div className=" flex gap-[9px]">
                  <span className=" text-4xl text-[#CBA557]">
                    <LuClock4 />
                  </span>
                  <h2 className=" text-lg md:text-2xl text-[#383838] font-medium ">
                    {t('returnTitle')}
                  </h2>
                </div>
                <p className="pl-11 pr-8 pt-3">
                  {t('returnDescription')}
                </p>
              </div>

              <div className="bg-white where-shadow px-5 py-5 md:px-7 md:py-6 mb-[2%] rounded-xl md:min-h-52">
                <div className=" flex gap-[9px]">
                  <span className=" text-4xl text-[#CBA557]">
                    <LuClock4 />
                  </span>
                  <h2 className=" text-lg md:text-2xl text-[#383838] font-medium ">
                    {t('satelliteTrackingTitle')}
                  </h2>
                </div>
                <p className="pl-11 pr-8 pt-3">
                  {t('satelliteTrackingDescription')}
                </p>
              </div>
            </div>

            <MapContainer
              center={destination}
              zoom={20}
              maxZoom={18}
              scrollWheelZoom={false}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={destination} icon={locationIcon}>
                <Popup>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    {t('getDirections')}
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <img src={whatsappImage} alt="WhatsApp Image" className="mt-6" />

          <h1 className="text-3xl font-medium">{t('carParkingTitle')}</h1>

          <div className=" flex flex-wrap gap-[2%] my-[2%]">
            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  {t('vialeItaliaTitle')}
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  {t('vialeItaliaDescription')}
                </p>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  {t('viaMaltaTitle')}
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  {t('viaMaltaDescription')}
                </p>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  {t('campoScuolaTitle')}
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  {t('campoScuolaDescription')}
                </p>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  {t('portaMareTitle')}
                </h1>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className=" flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  {t('acquarioLivornoTitle')}
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  {t('acquarioLivornoDescription')}
                </p>
              </div>
            </div>

            <div className="px-8 py-8 md:pt-10 md:pr-10 md:pb-8 md:pl-12 where-shadow w-full md:w-[48%] mb-[2%] rounded-xl">
              <div className="flex flex-col space-y-3">
                <h1 className=" text-xl font-normal text-[#383838]">
                  {t('nccServiceTitle')}
                </h1>
                <p className=" text-base font-normal text-[#676767]">
                  {t('nccServiceDescription')}
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-medium">
            {t('chooseParkingTitle')}
          </h1>

          <section className="bg-[#CBA5574D] mt-12 py-12 px-[3%] md:px-[6%] -mb-[3%]">
            <h1 className="text-3xl text-[#383838] font-medium mb-4 uppercase">
              {t('personalizedDeliveryTitle')}
            </h1>
            <p className="text-lg text-[#383838]">
              {t('personalizedDeliveryDescription')}
            </p>
            <br />

            <Link to="/Our-fleet">
              <button className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2">
                {t('bookNowButton')}
              </button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhereWeAre;
