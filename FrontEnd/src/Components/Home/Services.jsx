import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicesCard from './ServicesCard';
import ExtraServicesIcon from '../../assets/Images/Extra-Services-white-icon.png';
import ExcursionServicesIcon from '../../assets/Images/Excursion-Services-white-icon.png';
import RentalServicesIcon from '../../assets/Images/Rental-Services-white-icon.png';
import RentalServicesGoldIcon from '../../assets/Images/Rental-Services-gold-icon.png';
import ExtraServicesGoldIcon from '../../assets/Images/Extra-Services-gold-icon.png';
import ExcursionServicesGoldIcon from '../../assets/Images/Excursion-Services-gold-icon.png';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="Services-container pt-16 pb4 px-4 flex flex-col gap-2 items-center">
      <h1 className="text-[var(--primary-color)] text-base font-semibold">
        {t('viewOur')}
      </h1>
      <h1 className="text-3xl font-medium text-white">{t('services')}</h1>
      <p className="text-white text-center w-[55%] text-base font-normal mb-4">
        {t('servicesDescription')}
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-between w-full md:w-[80%]">
        <ServicesCard
          frontIcon={RentalServicesGoldIcon}
          title={t('rental')}
          backIcon={RentalServicesIcon}
          description={t('rentalDescription')}
        />
        <ServicesCard
          frontIcon={ExtraServicesGoldIcon}
          title={t('extraServices')}
          backIcon={ExtraServicesIcon}
          description={t('extraServicesDescription')}
        />
        <ServicesCard
          frontIcon={ExcursionServicesGoldIcon}
          title={t('excursions')}
          backIcon={ExcursionServicesIcon}
          description={t('excursionsDescription')}
        />
      </div>

      <br />
    </section>
  );
};

export default Services;
