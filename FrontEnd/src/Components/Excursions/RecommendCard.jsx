import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RecommendCard = () => {
  return (
    <section className="bg-[#CBA5574D] py-12 px-[3%] md:px-[6%]">
      <h1 className="text-3xl font-medium mb-4">What we recommend you see</h1>
      <p className="text-lg">
        Around us there are many unique points to see and absolutely not to be
        missed with a day on the boat, here's what we recommend for a complete
        experience
      </p>
      <div className="mt-8 z-0 excursion-map">
        <MapContainer
          center={[43.5169, 10.3162]}
          zoom={15}
          maxZoom={18}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={[43.5169, 10.3162]} />
        </MapContainer>
      </div>
    </section>
  );
};
export default RecommendCard;
