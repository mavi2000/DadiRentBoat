import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationfilled from '../../assets/Images/location-filled.png';
import { useTranslation } from 'react-i18next';
import vector4 from "../../assets/Images/Vector4.png";
import logoNew from "../../assets/Images/logoNew.png";

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: logoNew,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // center the icon horizontally and bottom-align it vertically
  popupAnchor: [0, -38], // position the popup correctly above the icon
});

// Function to create the Google Maps directions URL
const getDirectionsUrl = (lat, lng) => {
  const query = `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
};

const WhereWeAre = () => {
  const { t } = useTranslation();
  const latitude = 43.530447;
  const longitude = 10.3037554;

  return (
    <section className="contact-information w-full flex flex-col-reverse md:flex-row">
      <MapContainer
        center={[latitude, longitude]}
        zoom={20}
        maxZoom={18}
        scrollWheelZoom={false}
        className="w-full h-[400px] md:h-[500px]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>
            <div>
              <span>
             Dadi RENT Boats
              </span>
              <br />
              <a
                href={getDirectionsUrl(latitude, longitude)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <div className="bg-white md:mt-12 md:-ml-[120px] z-10 grow md:w-2/5 flex gap-4 flex-col pb-8">
        <img
          src={locationfilled}
          alt="Location Marker"
          className="w-[120px] ml-0 mt-0 mb-auto mr-auto"
        />
        <div className="p-8">
          <h1 className="text-[var(--primary-color)] text-base font-semibold ">
            Sign up and Book Us
          </h1>
          <h1 className="text-[#343434] font-medium text-3xl">Where We Are</h1>
          <p className="text-[#00000080] text-base">Viale Italia, 62</p>
          <p className="text-[#00000080] text-base">
          c/o BAGNI PANCALDI IN ACQUAVIVA
          </p>
          <p className="text-[#00000080] text-base">
          We await you at Bagni Pancaldi Acquaviva, situated at Viale Italia 62, in the heart of Livorno's waterfront. Our position adjoins the Terrazza Mascagni, offering you a breathtaking view of the Tuscan islands and Corsica. Directly opposite us lies Meloria Park, one of the closest points, further enhancing the beauty of the surrounding landscape."
          </p>
          <br />
          <p className="text-[#00000080] text-base">
          It's important to note that access to Bagni Pancaldi Acquaviva is granted only for the duration of the rental. To remain at the beach and access its services, you will need to purchase the relevant entrance ticket. Nevertheless, you can enjoy an elegant and rejuvenating environment with impeccable services and a delightful sea view during your time with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhereWeAre;
