import React, { useState } from 'react';
import { RiArrowRightSFill} from 'react-icons/ri'; 
import { RiArrowUpSFill } from "react-icons/ri";
import DropdownFAQ from './DropdownFAQ';


const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="checkout-bg !h-[50svh] md:!h-[100svh]">
        <div className="h-[50svh] md:h-[100svh] flex flex-col justify-center mx-[6%]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            FAQ
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            Our team is always at your service 24H
          </p>
        </div>
      </div>




      <div className="mx-[6%] mt-[4%] mb-[2%]">
        <h1 className="font-medium text-3xl text-[#000000]">
          We are here to answer your questions
        </h1>
        <p className="text-lg font-normal text-opacity-70 text-[#676767] mt-1 mb-[3%]">
          All the information you are looking for can be found here. If you have other questions,
          write to info@dadirectent.it or contact us on 370 1564317
        </p>


        <DropdownFAQ 
        title='Prices and payments'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />

        <DropdownFAQ 
        title='Necessary documents'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />

        <DropdownFAQ 
        title='How can I book the desired vessel?'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <DropdownFAQ 
        title='How should I collect the rented boat?'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <DropdownFAQ 
        title='Collection and delivery of vehicles'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <DropdownFAQ 
        title='Boat delivery'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <DropdownFAQ 
        title='Return of the boat'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <DropdownFAQ 
        title='Satellite detection'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <DropdownFAQ 
        title='Bad weather'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <DropdownFAQ 
        title='Refunds and returns'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <DropdownFAQ 
        title='Are there discounts on multi-day bookings?'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <DropdownFAQ 
        title='Can I visit Meloria?'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />

        <DropdownFAQ 
        title='Current expenses'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />

        <DropdownFAQ 
        title='Insurance'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />

        <DropdownFAQ 
        title='Damage'
        description='All prices visible on the site include VAT. Payments can be made in cash on site up to the sum of 990.00 euros or by credit card. for online payments, these must be made by credit card.'
        />


        <p className="text-lg font-normal text-opacity-70 text-[#676767] mt-[2%]">
          Would you like to download the FAQ for further clarification? Click the button below to
          download the PDF file.
        </p>
        <div className="flex justify-center items-center">
          <button className="btn-5 my-[3%]">Download the FAQ</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
