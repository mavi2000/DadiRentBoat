import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationfilled from '../../assets/Images/location-filled.png';
import { Link } from 'react-router-dom';

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: locationfilled,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
});

const WhereWeAre = () => {
  return (
    <section className="contact-information w-full flex flex-col-reverse md:flex-row">
      <MapContainer
        center={[43.52992, 10.3054838]}
        zoom={20}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[43.52992, 10.3054838]} icon={customIcon}>
          <Tooltip direction="top" offset={[0, -38]} opacity={1}>
            <span>
              Viale Italia, 62<br />
              c/o BAGNI PANCALDI IN ACQUAVIVA
            </span>
          </Tooltip>
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
            SIGN UP AND BOOK US
          </h1>
          <h1 className="text-[#343434] font-medium text-3xl">Where we are</h1>
          <p className="text-[#00000080] text-base">Viale Italia, 62</p>
          <p className="text-[#00000080] text-base">
            c/o BAGNI PANCALDI IN ACQUAVIVA
          </p>
          <p className="text-[#00000080] text-base">
            We await you at Bagni Pancaldi Acquaviva, situated at Viale Italia
            62, in the heart of Livorno's waterfront. Our position adjoins the
            Terrazza Mascagni, offering you a breathtaking view of the Tuscan
            islands and Corsica. Directly opposite us lies Meloria Park, one of
            the closest points, further enhancing the beauty of the surrounding
            landscape."
          </p>
          <br />
          <p className="text-[#00000080] text-base">
            It's important to note that access to Bagni Pancaldi Acquaviva is
            granted only for the duration of the rental. To remain at the beach
            and access its services, you will need to purchase the relevant
            entrance ticket. Nevertheless, you can enjoy an elegant and
            rejuvenating environment with impeccable services and a delightful
            sea view during your time with us.
          </p>
          <br />
          <br />
          <Link to="/Signup">
            <button className="text-white text-lg bg-[var(--primary-color)] mb-4 rounded-lg border-[1px] border-[var(--primary-color)] font-bold px-8 py-3">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default WhereWeAre;