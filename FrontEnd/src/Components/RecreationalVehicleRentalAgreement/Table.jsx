import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import './Table.css';

const Table = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="border-[1px] flex gap-3 items-center border-[#DBDADE] mr-8 mt-16 mb-3 px-4 rounded-md placeholder:text-[#DBDADE] w-full md:w-1/4">
        <label htmlFor="search">
          <IoIosSearch size={25} color="#B7B7B7" />
        </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder={t('searchPlaceholderUnique')}
          className="py-3 w-full outline-none"
        />
      </div>
      <div className="overflow-auto max-h-[calc(90svh-2rem)] custom-scrollbar">
        <table className="w-full text-sm border-collapse rounded-lg text-[#808080]">
          <thead>
            <tr className="text-left text-base font-medium border-[1px] border-[#01365914] bg-[#CBA5574D]">
              <th className="p-4">{t('tableTipologiaUnique')}</th>
              <th className="p-4">{t('tableCostUnique')}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('totalLossEngineUnique')}</td>
              <td className="p-4">300€</td>
            </tr>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('cushionLossDamageUnique')}</td>
              <td className="p-4">Minimo 400€</td>
            </tr>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('signalDeviceLossUnique')}</td>
              <td className="p-4">Da valutare</td>
            </tr>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('bailerLossUnique')}</td>
              <td className="p-4">50€ ( al pezzo)</td>
            </tr>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('sunTableLossDamageUnique')}</td>
              <td className="p-4">150€</td>
            </tr>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('awningDamageUnique')}</td>
              <td className="p-4">150€</td>
            </tr>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('trimDamageUnique')}</td>
              <td className="p-4">150€</td>
            </tr>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('windshieldDamageUnique')}</td>
              <td className="p-4">150€</td>
            </tr>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('hornDamageUnique')}</td>
              <td className="p-4">150€</td>
            </tr>
            <tr className="border-[1px] border-[#01365914]">
              <td className="p-4">{t('boatDamageUnique')}</td>
              <td className="p-4">150€</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="mt-16 text-xl font-semibold">
        {t('unlessProvidedTitleUnique')}
      </h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">
        {t('leaseExplanationUnique')}
      </p>
    </>
  );
};

export default Table;
