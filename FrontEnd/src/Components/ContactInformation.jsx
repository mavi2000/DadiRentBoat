import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';
import locationfilled from '../assets/Images/location-filled.png';
import DoYouHaveDoubtsCard from './Excursions/DoYouHaveDoubtsCard';
import { Link } from 'react-router-dom';

const ContactInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="Excursions-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            {t('contactInformation')}
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            {t('teamService')}
          </p>
        </div>
      </div>
      <section className="contact-information flex flex-col-reverse md:flex-row md:mt-8">
        <MapContainer
          center={[43.52992, 10.3054838]}
          zoom={20}
          maxZoom={18}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={[43.52992, 10.3054838]} />
        </MapContainer>
        <div className="bg-white md:mt-12 md:-ml-[80px] z-10 grow flex gap-4 flex-col pb-8">
          <img
            src={locationfilled}
            alt="phone"
            className="w-[80px] ml-0 mt-0 mb-auto mr-auto"
          />
          <div className="p-8">
            <h1 className="text-[#343434] font-medium text-3xl">
              {t('getInTouch')}
            </h1>
            <h2 className="text-[var(--primary-color)] text-base font-semibold mt-4 mb-1">
              {t('location')}
            </h2>
            <p className="text-[#00000080] text-base border-b-[1px] border-[var(--primary-color)] pb-4">
              {t('locationDetail')}
            </p>
            <h2 className="text-[var(--primary-color)] text-base font-semibold mt-4 mb-1">
              {t('registeredOffice')}
            </h2>
            <p className="text-[#00000080] text-base border-b-[1px] border-[var(--primary-color)] pb-4">
              {t('registeredOfficeDetail')}
            </p>
            <h2 className="text-[var(--primary-color)] text-base font-semibold mt-4 mb-1">
              {t('phoneNumber')}
            </h2>
            <p className="text-[#00000080] text-base border-b-[1px] border-[var(--primary-color)] pb-4">
              {t('phone')}
            </p>
            <h2 className="text-[var(--primary-color)] text-base font-semibold mt-4 mb-1">
              {t('email')}
            </h2>
            <p className="text-[#00000080] text-base ">{t('infoEmail')}</p>
            <p className="text-[#00000080] text-base border-b-[1px] border-[var(--primary-color)] pb-4">
              {t('pecEmail')}
            </p>
            <Link to="/Signup">
              <button className="text-white text-lg bg-[var(--primary-color)] mb-4 rounded-lg border-[1px] border-[var(--primary-color)] font-bold px-8 py-3 mx-auto mt-12 block">
                {t('signUp')}
              </button>
            </Link>
          </div>
        </div>
      </section>
      <DoYouHaveDoubtsCard title={t('contactUsNow')} />
    </>
  );
};
export default ContactInformation;
