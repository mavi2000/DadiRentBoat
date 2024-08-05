import React from 'react';
import { useTranslation } from 'react-i18next';

const CurrentCharges = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="mt-16 text-xl font-semibold">{t('titleCurrentCharges')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionCurrentCharges')}</p>
      
      <h1 className="mt-16 text-xl font-semibold">{t('titlePayment')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionPayment')}</p>
      
      <h1 className="mt-16 text-xl font-semibold">{t('titleBadWeather')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionBadWeather')}</p>
      
      <h1 className="mt-16 text-xl font-semibold">{t('titleBail')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionBail')}</p>
      
      <h1 className="mt-16 text-xl font-semibold">{t('titleDeliveryBoat')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionDeliveryBoat')}</p>
      
      <h1 className="mt-16 text-xl font-semibold">{t('titleReturnBoat')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionReturnBoat1')}</p>
      <h1 className="mt-16 text-xl font-semibold">{t('titleReturnBoat')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionReturnBoat2')}</p>
      
      <h1 className="mt-16 text-xl font-semibold">{t('titleLesseeDeclaration')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionLesseeDeclaration')}</p>
      
      <h1 className="mt-16 text-xl font-semibold">{t('titleInsurance')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionInsurance')}</p>
      
      <h1 className="mt-16 text-xl font-semibold">{t('titleGeneralConditions')}</h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">{t('descriptionGeneralConditions')}</p>
    </div>
  );
};

export default CurrentCharges;
