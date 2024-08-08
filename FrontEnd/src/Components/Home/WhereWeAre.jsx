import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationfilled from '../../assets/Images/location-filled.png';
import { useTranslation } from 'react-i18next';
import vector4 from "../../assets/Images/Vector4.png";

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: vector4,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
});

// Function to create the Google Maps directions URL
const getDirectionsUrl = (lat, lng) => {
  const query = `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
};

const WhereWeAre = () => {
  const { t } = useTranslation();
  const latitude = 43.5471169;
  const longitude = 10.3028054;

  return (
    <section className="contact-information w-full flex flex-col-reverse md:flex-row">
      <MapContainer
        center={[latitude, longitude]}
        zoom={20}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>
            <div>
              <span>
                {/* Updated content - remove any specific text here */}
                {t('locationAddress')}<br />
                {t('locationDetail')}
              </span>
              <br />
              <a
                href={getDirectionsUrl(latitude, longitude)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {t('getDirections')}
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <div className="bg-white md:mt-12 md:-ml-[120px] z-10 grow md:w-2/5 flex gap-4 flex-col pb-8">
        <img
          src={locationfilled}
          alt="phone"
          className="w-[120px] ml-0 mt-0 mb-auto mr-auto"
        />
        <div className="p-8">
          <h1 className="text-[var(--primary-color)] text-base font-semibold ">
            {t('signUpAndBookUs')}
          </h1>
          <h1 className="text-[#343434] font-medium text-3xl">{t('whereWeAre')}</h1>
          <p className="text-[#00000080] text-base">{t('locationAddress')}</p>
          <p className="text-[#00000080] text-base">
            {t('locationDetail')}
          </p>
          <p className="text-[#00000080] text-base">
            {t('locationDescription')}
          </p>
          <br />
          <p className="text-[#00000080] text-base">
            {t('locationNote')}
          </p>
          <br />
          {/* <br />
          <Link to="/Signup">
            <button className="text-white text-lg bg-[var(--primary-color)] mb-4 rounded-lg border-[1px] border-[var(--primary-color)] font-bold px-8 py-3">
              {t('signUp')}
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default WhereWeAre;
