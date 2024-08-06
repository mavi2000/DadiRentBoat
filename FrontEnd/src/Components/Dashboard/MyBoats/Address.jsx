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
import { useTranslation } from 'react-i18next';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "leaflet/dist/images/marker-icon.png",
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
});

const center = [51.505, -0.09];

const Address = () => {
  const { t } = useTranslation();
  const id = localStorage.getItem('id')
  const { createLocation, boatId, navigate } = useContext(AdminContext);
  const [city, setCity] = useState("");
  const [locationType, setLocationType] = useState(""); 
  const [portName, setPortName] = useState(""); 
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
        toast.success(t('locationSavedSuccess'));
        navigate('/Dashboard/my-boats');
      } catch (error) {
        console.error(error);
        toast.error(t('locationSaveFail'));
      }
    } else {
      try {
        await baseURL.patch('/location/update-location/' + id, { ...locationData, boatId: id })
        toast.success(t('locationUpdatedSuccess'));
        localStorage.removeItem('id')
        setTimeout(() => {
          navigate('/Dashboard/my-boats')
        }, 3000)
      } catch (error) {
        toast.error(t('locationUpdateFail'));
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
          {t('latitude')}: {latitude}, {t('longitude')}: {longitude}
        </Popup>
      </Marker>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form onSubmit={handleSubmit} className="bg-white mx-2 py-8 px-4 sm:px-12 text-[#4B465C]">
        <div className="flex flex-col gap-10">
          <div>{t('addresses')}</div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="city" className="flex items-center font-light gap-2 ">{t('city')}</label>
              <div className="border relative flex items-center rounded-md font-light outline-none">
                <input
                  type="text"
                  id="city"
                  className="p-3 bg-transparent outline-none"
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
              <label htmlFor="locationType" className="flex items-center font-light gap-2">{t('locationType')}</label>
              <select
                id="locationType"
                className="border p-3 rounded-md font-light outline-none"
                value={locationType}
                onChange={(e) => setLocationType(e.target.value)}
              >
                <option value="" disabled>{t('selectLocationType')}</option>
                <option value="mooring">{t('mooring')}</option>
                <option value="other">{t('other')}</option>
                <option value="port">{t('port')}</option>
                <option value="trailer">{t('trailer')}</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="portName" className="flex items-center font-light gap-2">{t('portName')}</label>
              <input
                type="text"
                id="portName"
                className="border p-3 rounded-md font-light outline-none"
                value={portName}
                onChange={(e) => setPortName(e.target.value)}
                placeholder={t('enterPortName')}
              />
            </div>
          </div>
          <div>{t('exactLocation')}</div>
          <div className="flex items-center font-light gap-2">
            {t('adsWithSpecificLocation')} <TbAlertCircleFilled className="text-lg" />
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
            {id ? t('update') : t('save')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
