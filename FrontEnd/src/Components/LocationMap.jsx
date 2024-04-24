import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationMap = () => {
  return (
    <div className="">
      <MapContainer
        center={[43.52992, 10.3054838]}
        zoom={20}
        // maxZoom={1}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[43.52992, 10.3054838]} />
      </MapContainer>
    </div>
  );
};
export default LocationMap;
