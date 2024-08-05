import React from 'react';
import { useTranslation } from 'react-i18next';
import WhatOurCustomersSayCard from './WhatOurCustomersSayCard';

const WhatOurCustomersSay = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center bg-[#CBA55714] py-12 mt-12 px-[3%] md:px-[6%]">
      <h1 className="text-[var(--primary-color)] text-base font-semibold ">
        {t('velasExperience')}
      </h1>
      <h1 className="text-3xl font-medium text-black my-6">
        {t('whatOurCustomersSay')}
      </h1>
      <div className="flex flex-wrap gap-4 justify-center items-stretch">
        <WhatOurCustomersSayCard
          title={t('veryReliable')}
          description={t('veryReliableDescription')}
          personName={t('urlichDistelkamp')}
        />
        <WhatOurCustomersSayCard
          title={t('itCannotBeBetter')}
          description={t('itCannotBeBetterDescription')}
          personName={t('frankReinboth')}
        />
        <WhatOurCustomersSayCard
          title={t('veryGoodSupport')}
          description={t('veryGoodSupportDescription')}
          personName={t('marcSellac')}
        />
        <WhatOurCustomersSayCard
          title={t('reliableAsAlways')}
          description={t('reliableAsAlwaysDescription')}
          personName={t('franzZimmerman')}
        />
      </div>
    </section>
  );
};

export default WhatOurCustomersSay;
