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
          placeholder="Search"
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
      UNLESS OTHERWISE PROVIDED FOR IN THESE GENERAL CONDITIONS, THE ARTICLES FROM 42 TO 46 OF THE LEGISLATIVE DECREE 18/07/2005, N. 171, WHICH ARE SHOWN BELOW: ART. 42. LEASE AND FORM OF CONTRACT:
      </h1>
      <hr className="border-none h-[1px] bg-[#DBDADE] my-4" />
      <p className="text-lg mb-8">
      The lease of pleasure craft is the contract with which one of the parties undertakes for consideration to transfer the enjoyment of the pleasure craft for a specific period of time. With the pleasure craft rented, the lessee exercises navigation and assumes responsibility and risks. The rental agreement for boats and pleasure craft is drawn up in writing under penalty of nullity and is kept on board in the original or certified copy. The form of the sublease contract or of the transfer contract is governed by paragraph 3. Art. 43. Expiry of the contract Unless the lessor gives his express consent, the contract is not considered renewed even if, once the established term has expired, the lessee retains possession of the pleasure craft. Unless otherwise agreed by the parties, in the event of delay in redelivery due to the tenant for a period not exceeding one tenth of the lease term, no damages will be paid but the lessor, for the period of time exceeding the duration of the contract, and a double amount of the amount established in the contract itself is due. Art. 44. Prescription The rights deriving from the lease contract are prescribed after one year. The term starts from the expiry of the contract or, in the case referred to in paragraph 2 of article 43, from the redelivery of the unit. Art. 45. Obligations of the lessor The lessor is required to deliver the pleasure craft, with the relative appurtenances, in perfect working order, complete with all safety equipment, equipped with the necessary documents for navigation and covered by the insurance referred to to the law of 24 December 1969, n. 990, and subsequent modifications. Art. 46. Obligations of the Lessee The Lessee is required to use the pleasure craft according to the technical characteristics resulting from the navigation license and in compliance with the pleasure purposes.
      </p>
    </>
  );
};

export default Table;
