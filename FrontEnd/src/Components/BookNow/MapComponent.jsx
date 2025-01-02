import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Marker icon
const customIcon = new L.Icon({
  iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-orange.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -45],
});

const MapComponent = () => {
  const [mapType, setMapType] = useState("streets"); // Map type toggle state
  const [zoom, setZoom] = useState(13); // Default zoom level

  const handleZoom = (direction) => {
    setZoom((prevZoom) => Math.max(0, prevZoom + direction));
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Map Type Buttons */}
      <div className="map-controls">
        <button onClick={() => setMapType("streets")}>Map</button>
        <button onClick={() => setMapType("satellite")}>Satellite</button>
      </div>

      {/* Map */}
      <MapContainer
        center={[31.1171, -97.7278]} // Center near Killeen, TX
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url={
            mapType === "satellite"
              ? "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        />
        <Marker position={[31.1171, -97.7278]} icon={customIcon}>
          <Popup>Custom Marker Location</Popup>
        </Marker>
      </MapContainer>

      {/* Zoom Controls */}
      <div className="zoom-controls">
        <button onClick={() => handleZoom(1)}>+</button>
        <button onClick={() => handleZoom(-1)}>-</button>
      </div>
    </div>
  );
};

export default MapComponent;
