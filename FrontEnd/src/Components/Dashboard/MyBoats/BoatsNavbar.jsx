import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const BoatsNavbar = () => {
  const { t } = useTranslation();
  const [promotionDropdown, setPromotionDropdown] = useState(false);
  const togglePromotionDropdown = () => {
    setPromotionDropdown((prev) => !prev);
  };
  return (
    <div className="overflow-auto min-w-full bg-white mt-4 rounded-md px-3 md:ml-0 md:mr-0">
      <div className=" flex items-center w-max gap-3 text-black">
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/overview"}>{t('BoatsNavbarOverview')}</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/information"}>{t('BoatsNavbarDescription')}</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/photo"}>{t('BoatsNavbarPhoto')}</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/info-access"}>{t('BoatsNavbarInformationAccess')}</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/boatDocuments"}>{t('BoatsNavbarBoatDocuments')}</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/calender"}>{t('BoatsNavbarCalendar')}</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/termscondition"}>{t('BoatsNavbarConditions')}</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/rates"}>{t('BoatsNavbarMyRates')}</Link>
        </div>
        <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/deposit"}>{t('BoatsNavbarDamageDeposit')}</Link>
        </div>
        <div className="py-3 px-3 gap-2 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <Link to={"/Dashboard/my-boats/promotion"}>{t('BoatsNavbarPromotions')}</Link>
        </div>
        <div className="py-3 px-3 gap-2 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
          <button
            onClick={togglePromotionDropdown}
            className="flex items-center "
          >
            <FaAngleDown
              className={`${promotionDropdown ? "rotate-180" : ""}`}
            />
          </button>
          {promotionDropdown && (
            <div className="absolute z-10 flex flex-col right-0 mt-2 mr-4 w-48 bg-white shadow-lg rounded-lg py-2 pl-2">
              <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                <Link to={"/Dashboard/my-boats/extra-services"}>{t('BoatsNavbarExtraServices')}</Link>
              </div>
              <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                <Link to={"/Dashboard/my-boats/insurance"}>{t('BoatsNavbarInsurance')}</Link>
              </div>
              <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                <Link to={"/Dashboard/my-boats/address"}>{t('BoatsNavbarAddresses')}</Link>
              </div>
              <div className="py-3 px-3 md:px-0 w-fit font-normal text-[#4B465C] hover:border-b-2 border-[#CBA557] hover:text-[#CBA557]">
                <Link to={"/Dashboard/my-boats/equipments"}>{t('BoatsNavbarEquipmentAndUses')}</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoatsNavbar;
