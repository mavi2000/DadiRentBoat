import React, { useState, useContext, useEffect } from "react";
import BoatsNavbar from "./BoatsNavbar";
import { MdCancel } from "react-icons/md";
import { TbAlertCircleFilled } from "react-icons/tb";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { AdminContext } from "../../../../Context/AdminContext";
import baseURL from "../../../../APi/BaseUrl";
import { toast } from "react-toastify";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "leaflet/dist/images/marker-icon.png",
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
});

const center = [51.505, -0.09];

const Address = () => {
  const id = localStorage.getItem('id')
  const { createLocation, boatId, navigate } = useContext(AdminContext);
  // const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [locationType, setLocationType] = useState(""); // Add location type state
  const [portName, setPortName] = useState(""); // Add port name state
  const [latitude, setLatitude] = useState(center[0]);
  const [longitude, setLongitude] = useState(center[1]);

  const handleMapClick = (e) => {
    setLatitude(e.latlng.lat);
    setLongitude(e.latlng.lng);
  };

  useEffect(() => {
    if (id) {
      const getBoatLocation = async () => {
        try {
          const res = await baseURL('/location/get-location/' + id)
          const { data: { location } } = res
          // setPlace(location?.place)
          setCity(location?.city)
          setLocationType(location?.locationType)
          setPortName(location?.portName)
          setLatitude(location.exactLocation.latitude)
          setLongitude(location?.exactLocation.longitude)
        } catch (error) {
          console.log(error);
        }
      }
      getBoatLocation()
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationData = {
      // place,
      city,
      locationType,
      portName,
      exactLocation: {
        latitude,
        longitude,
      },
      boatId: boatId,
    };
    if (!id) {
      try {
        await createLocation(locationData);
        toast.success('Location saved successfully');
        navigate('/Dashboard/my-boats');
      } catch (error) {
        console.error(error);
        toast.error('Failed to save location');
      }
    } else {
      try {
        await baseURL.patch('/location/update-location/' + id, { ...locationData, boatId: id })
        toast.success('Location updated successfully');
        localStorage.removeItem('id')
        setTimeout(() => {
          navigate('/Dashboard/my-boats')
        }, 3000)
      } catch (error) {
        toast.error('Failed to update location');
      }
    }
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
      <form onSubmit={handleSubmit} className="bg-white mx-2 py-8 px-4 sm:px-12 text-[#4B465C]">
        <div className="flex flex-col gap-10">
          <div>Addresses</div>
          <div className="grid grid-cols-2 gap-8">
   
            <div className="flex flex-col gap-2">
              <label htmlFor="city" className="flex items-center font-light gap-2 ">City</label>
              <div className="border relative flex items-center rounded-md font-light outline-none">
                <input
                  type="text"
                  id="city"
                  className="p-3  bg-transparent outline-none"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <MdCancel
                  className="text-xl text-[#CBA557] flex absolute right-2 items-center justify-center"
                  onClick={() => setCity("")}
                />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="locationType" className="flex items-center font-light gap-2">Location Type</label>
              <select
                id="locationType"
                className="border p-3 rounded-md font-light outline-none"
                value={locationType}
                onChange={(e) => setLocationType(e.target.value)}
              >
                <option value="" disabled>Select location type</option>
                <option value="mooring">Mooring</option>
                <option value="other">Other</option>
                <option value="port">Port</option>
                <option value="trailer">Trailer</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="portName" className="flex items-center font-light gap-2">Port Name</label>
              <input
                type="text"
                id="portName"
                className="border p-3 rounded-md font-light outline-none"
                value={portName}
                onChange={(e) => setPortName(e.target.value)}
                placeholder="Enter port name"
              />
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
          <button type="submit" className="bg-[#CBA557] sm:w-max p-4 rounded-lg text-white">
            {id ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Address;
