import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = () => {
  return (
    <div className="">
      <MapContainer
        center={[43.5169, 10.3162]}
        zoom={4}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[43.5169, 10.3162]} />
      </MapContainer>
    </div>
  );
};
export default LocationMap;
