import React, { useState, useContext, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { MdCancel } from "react-icons/md";
import { TbAlertCircleFilled } from "react-icons/tb";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { AdminContext } from "../../../../Context/AdminContext";

// Import the Leaflet icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import baseURL from "../../../../APi/BaseUrl";
import { toast } from "react-toastify";

// Fix the default marker icon issue with React Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const center = [51.505, -0.09]; // Default center point

const Address = () => {
  const id = localStorage.getItem('id')
  const { createLocation, boatId, navigate } = useContext(AdminContext); // Access context functions and state
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(center[0]);
  const [longitude, setLongitude] = useState(center[1]);

  const handleMapClick = (e) => {
    setLatitude(e.latlng.lat);
    setLongitude(e.latlng.lng);
  };
  // get boat location if editing
  useEffect(() => {
    if (id) {
      const getBoatLocation = async () => {
        try {
          const res = await baseURL('/location/get-location/' + id)
          const { data: { location } } = res
          setPlace(location?.place)
          setCity(location?.city)
          setLatitude(location.exactLocation.latitude)
          setLongitude(location?.exactLocation.longitude)
        } catch (error) {
          console.log(error);
        }
      }
      getBoatLocation()
    }
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationData = {
      place,
      city,
      exactLocation: {
        latitude,
        longitude,
      },
      boatId: boatId,
    };
    if (!id) {
      try {
        await createLocation(locationData); // Use context function to save location
      } catch (error) {
        console.error(error);
        alert("Failed to save location");
      }
    } else {
      try {
        const res = await baseURL.patch('/location/update-location/' + id, { ...locationData, boatId: id })
        toast.success('Location updated successfully');
        localStorage.removeItem('id')
        // setCity({ ...res.data.location.city })
        setTimeout(() => {
          navigate('/Dashboard/my-boats')
        }, 3000)
      } catch (error) {
        toast.error('Failed to update equipments')
      }
    };
  }
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
      <form onSubmit={handleSubmit} className="bg-white mx-2 py-8 px-12 text-[#4B465C]">
        <div className="flex flex-col gap-10 w-[80%]">
          <div>Addresses</div>
          <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
      <label htmlFor="place">Place</label>
      <input
        type="text"
        id="place"
        className="border p-3 rounded-md font-light"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Enter place"
      />
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
          <button type="submit" className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white">
            {id ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Address;
