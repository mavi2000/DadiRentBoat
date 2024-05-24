import React from "react";
import BoatsNavbar from "./BoatsNavbar";
import { MdCancel } from "react-icons/md";
import { TbAlertCircleFilled } from "react-icons/tb";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import the Leaflet icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default marker icon issue with React Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const center = [51.505, -0.09]; // Default center point

const Address = () => {
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white mx-2 py-8 px-12 text-[#4B465C]">
        <div className="flex flex-col gap-10 w-[80%]">
          <div className="">Addresses</div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label>Place</label>
              <select className="border p-3 rounded-md font-light">
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label>City</label>
              <div className="border flex items-center rounded-md font-light">
                <input type="text" className="p-3 w-[85%] bg-transparent" />
                <MdCancel className="text-xl text-[#CBA557] flex w-[15%] items-center justify-center" />
              </div>
            </div>
          </div>
          <div className="">Exact location</div>
          <div className="flex items-center font-light gap-2">
            Ads with a specific location receive more rental requests!{" "}
            <TbAlertCircleFilled className="text-lg" />
          </div>
          <div className="mx-2 mt-8">
            <MapContainer center={center} zoom={13} style={{ height: "400px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={center}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <button className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
