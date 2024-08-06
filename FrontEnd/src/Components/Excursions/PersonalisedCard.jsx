import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonalisedCard = () => {
  const { t } = useTranslation(); // Use the useTranslation hook here

  return (
    <section className="mx-[3%] md:mx-[6%] my-12">
      <h1 className="text-3xl font-medium ">
        {t('personalizedDeliveryTitle7')}
      </h1>
      <br />
      <br />
      <p className="text-lg text-[#383838]">
        {t('personalizedDeliveryDescription17')}
      </p>
      <br />
      <p className="text-lg text-[#383838]">
        {t('personalizedDeliveryDescription27')}
      </p>
    </section>
  );
};

export default PersonalisedCard;
