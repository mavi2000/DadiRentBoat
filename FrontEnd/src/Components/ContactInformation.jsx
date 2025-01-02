import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import locationfilled from '../assets/Images/location-filled.png';
import DoYouHaveDoubtsCard from './Excursions/DoYouHaveDoubtsCard';
import { Link } from 'react-router-dom';
import logoNew from "../../src/assets/Images/logoNew.png";


const latitude = 43.5304782;
const longitude = 10.3037131;
// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: logoNew,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // center the icon horizontally and bottom-align it vertically
  popupAnchor: [0, -38], // position the popup correctly above the icon
});

const ContactInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="Excursions-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
          Contact Information
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
          Our team is always at your service 24 hours a day
          </p>
        </div>
      </div>
      <section className="contact-information flex flex-col-reverse md:flex-row md:mt-8">
        <MapContainer
          center={[43.5304782, 10.3037131]} // Verified coordinates
          zoom={20}
          maxZoom={18}
          scrollWheelZoom={false}
          className="w-full h-[400px] md:h-[500px]" // Ensure the map takes up the correct height
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={[43.5304782, 10.3037131]} icon={customIcon} />
        </MapContainer>
        <div className="bg-white md:mt-12 md:-ml-[80px] z-10 grow flex gap-4 flex-col pb-8">
          <img
            src={logoNew}
            alt="Logo"
            className="w-[80px] ml-0 mt-0 mb-auto mr-auto"
          />
          <div className="p-8">
            <h1 className="text-[#343434] font-medium text-3xl">
            Get in Touch
            </h1>
            <h2 className="text-[var(--primary-color)] text-base font-semibold mt-4 mb-1">
            Location
            </h2>
            <p className="text-[#00000080] text-base border-b-[1px] border-[var(--primary-color)] pb-4">
            Ad Viale italia, 62  c/o BAGNI PANCALDI IN ACQUAVIVA
            </p>
            <h2 className="text-[var(--primary-color)] text-base font-semibold mt-4 mb-1">
            Registered Office
            </h2>
            <p className="text-[#00000080] text-base border-b-[1px] border-[var(--primary-color)] pb-4">
            Via San Francesco 17, 57123 Livorno ( Li )
            </p>
            <h2 className="text-[var(--primary-color)] text-base font-semibold mt-4 mb-1">
            Phone Number
            </h2>
            <p className="text-[#00000080] text-base border-b-[1px] border-[var(--primary-color)] pb-4">
            +39 3701564317
            </p>
            <h2 className="text-[var(--primary-color)] text-base font-semibold mt-4 mb-1">
            Email
            </h2>
            <p className="text-[#00000080] text-base ">dadirent@pec.it</p>
            <p className="text-[#00000080] text-base border-b-[1px] border-[var(--primary-color)] pb-4">
            info@dadirent.it
            </p>
            <Link to="/Signup">
              <button className="text-white text-lg bg-[var(--primary-color)] mb-4 rounded-lg border-[1px] border-[var(--primary-color)] font-bold px-8 py-3 mx-auto mt-12 block">
              Sign up
              </button>
            </Link>
          </div>
        </div>
      </section>
      <DoYouHaveDoubtsCard title=" Contact us now and we will get back to you as soon as possible" />
    </>
  );
};
export default ContactInformation;
