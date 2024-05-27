import React, { useState, useContext } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { MdCancel } from "react-icons/md";
import { TbAlertCircleFilled } from "react-icons/tb";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { AdminContext } from "../../../../Context/AdminContext";

// Import the Leaflet icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix the default marker icon issue with React Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const center = [51.505, -0.09]; // Default center point

const Address = () => {
  const { createLocation, boatId } = useContext(AdminContext); // Access context functions and state
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(center[0]);
  const [longitude, setLongitude] = useState(center[1]);

  const handleMapClick = (e) => {
    setLatitude(e.latlng.lat);
    setLongitude(e.latlng.lng);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationData = {
      place,
      city,
      exactLocation: {
        latitude,
        longitude,
      },
    };

    try {
      await createLocation(locationData); // Use context function to save location
    } catch (error) {
      console.error(error);
      alert("Failed to save location");
    }
  };

  const LocationMarker = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return (
      <Marker position={[latitude, longitude]}>
        <Popup>
          Latitude: {latitude}, Longitude: {longitude}
        </Popup>
      </Marker>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form
        onSubmit={handleSubmit}
        className="bg-white mx-2 py-8 px-12 text-[#4B465C]"
      >
        <div className="flex flex-col gap-10 w-[80%]">
          <div>Addresses</div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label>Place</label>
              <select
                className="border p-3 rounded-md font-light"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              >
                <option value="">Select</option>
                <option value="place1">Place 1</option>
                <option value="place2">Place 2</option>
                <option value="place3">Place 3</option>
                <option value="place4">Place 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label>City</label>
              <div className="border flex items-center rounded-md font-light">
                <input
                  type="text"
                  className="p-3 w-[85%] bg-transparent"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <MdCancel
                  className="text-xl text-[#CBA557] flex w-[15%] items-center justify-center"
                  onClick={() => setCity("")}
                />
              </div>
            </div>
          </div>
          <div>Exact location</div>
          <div className="flex items-center font-light gap-2">
            Ads with a specific location receive more rental requests!{" "}
            <TbAlertCircleFilled className="text-lg" />
          </div>
          <div className="mx-2 mt-8">
            <MapContainer
              center={center}
              zoom={13}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker />
            </MapContainer>
          </div>
          <button
            type="submit"
            className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
