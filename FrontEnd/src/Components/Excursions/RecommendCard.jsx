import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';

const RecommendCard = () => {
  const { t } = useTranslation(); // Use the useTranslation hook here

  return (
    <section className="bg-[#CBA5574D] py-12 px-[3%] md:px-[6%]">
      <h1 className="text-3xl font-medium mb-4">{t('recommendTitle7')}</h1>
      <p className="text-lg">
        {t('recommendDescription7')}
      </p>
      <div className="mt-8 z-0 excursion-map">
        <MapContainer
          center={[43.5435998, 10.3293405]}
          zoom={15}
          maxZoom={18}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={[43.5435998, 10.3293405]} />
        </MapContainer>
      </div>
    </section>
  );
};

export default RecommendCard;
