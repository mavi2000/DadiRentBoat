import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import vector from "../assets/Images/Vector4.png";

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: vector,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
});

// Function to create the Google Maps directions URL
const getDirectionsUrl = (lat, lng) => {
  const query = `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
};

const LocationMap = () => {
  const latitude = 43.5471169;
  const longitude = 10.3028054;
  const [view, setView] = useState('map');
  const mapboxToken = 'sk.eyJ1IjoiMDB0emkiLCJhIjoiY2x6bGIyNW04MDB2cjJrcjRlbWJsb205OSJ9.Ufu978TMmnpK0lr1K2pBng';

  return (
    <div className="relative w-full h-[500px]">
      <MapContainer
        center={[latitude, longitude]}
        zoom={20}
        maxZoom={18}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        {/* Toggle between map and satellite view */}
        <TileLayer
          url={view === 'map'
            ? `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`
            : `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`
          }
        />

        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>
            <div>
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

      {/* Toggle View Buttons */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2">
        <button
          onClick={() => setView('map')}
          className={`py-2 px-4 rounded-lg ${view === 'map' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
        >
          Map View
        </button>
        <button
          onClick={() => setView('satellite')}
          className={`py-2 px-4 rounded-lg ${view === 'satellite' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
        >
          Satellite View
        </button>
      </div>
    </div>
  );
};

export default LocationMap;