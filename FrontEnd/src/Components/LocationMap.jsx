import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import locationfilled from '../../assets/Images/location-filled.png';
import LocationFiled from "../assets/Images/location-filled.png"
import { Link } from 'react-router-dom';

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: LocationFiled,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
});


const LocationMap = () => {
  return (
    <div className="">
        <MapContainer
        center={[43.52992, 10.3054838]}
        zoom={20}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[43.52992, 10.3054838]} icon={customIcon}>
          <Tooltip direction="top" offset={[0, -38]} opacity={1}>
            <span>
              Viale Italia, 62<br />
              c/o BAGNI PANCALDI IN ACQUAVIVA
            </span>
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
