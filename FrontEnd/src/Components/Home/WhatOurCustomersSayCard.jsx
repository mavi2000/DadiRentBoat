import React from 'react';
import { FaStar } from 'react-icons/fa';
import qoute from '../../assets/Images/qoute.png';

const WhatOurCustomersSayCard = ({ title, description, personName }) => {
  return (
    <div className="flex flex-col gb-white border-[6px] grow border-[#F5F5F5] w-full md:w-[265px] bg-white px-4 pb-6">
      <img src={qoute} alt="qoute" className="w-14 h-14 ml-auto mr-8 mb-20" />
      <h1 className="text-2xl text-[#0D325E] font-medium">{title}</h1>
      <div className="flex gap-1 my-4 text-[--primary-color]">
        <FaStar size={14} />
        <FaStar size={14} />
        <FaStar size={14} />
        <FaStar size={14} />
        <FaStar size={14} />
      </div>
      <p className="text-[#676767] text-base mb-auto">{description}</p>

      <h1 className="text-[#676767] text-base font-medium mb-0 mt-4">
        {personName}
      </h1>
    </div>
  );
};

export default WhatOurCustomersSayCard;
