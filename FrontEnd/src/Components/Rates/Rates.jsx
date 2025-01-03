import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsClock, BsFiletypePdf } from 'react-icons/bs';
import { TbMessageCircleQuestion } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import RatesTable from './RatesTable';
import RuleOfCunduct from '../RuleOfCunduct';
import '../../../styles/hero-bgs.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Rates = () => {
  const { t } = useTranslation();
  const [showRuleOfConduct, setShowRuleOfConduct] = useState(false);
  const tableRef = useRef();

  const handleDownloadPDF = () => {
    const input = tableRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('rates-table.pdf');
      });
    }
  };


  return (
    <>
      <div className="Excursions-bg">
        <div className="mx-[3%] md:mx-[6%] flex flex-col justify-center h-[100svh]">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
          Discover Livorno from the sea:
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
          Boat and Dinghy Rental with Competitive and Transparent Rates for an Unparalleled Experience!
          </p>
        </div>
      </div>
      <section className="mx-[3%] md:mx-[6%] my-16">
        <h1 className="text-3xl font-medium">Rates</h1>
        <br />
        <p className="text-[#676767] text-lg">
        All current expenses relating to use and consumption on board for the rental period are the responsibility of the charterer. Fuel will be paid upon return of the boat based on consumption. Alternatively, the vehicle must be returned with a full tank of fuel
          <br />
          {/* {t('fuelResponsibility')} */}
        </p>
        <br />
        <br />
        <h1 className="text-3xl font-medium">RENTAL HOURS</h1>    
        <p className="text-[#676767] text-lg">
        The delivery of our rental inflatable boats takes place starting from 7:00 in the morning, the maximum return time is 10:00 pm.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-8 items-center justify-center ">
        <div className="flex gap-3 items-center bg-white rounded-lg shadow-xl py-16 px-20 text-2xl font-medium text-[#383838]">
          <BsClock className="text-[var(--primary-color)]" size={35} />
          <h2>Half day lasts 4 hours</h2>
        </div>
        <div className="flex gap-3 items-center bg-white rounded-lg shadow-xl py-16 px-20 text-2xl font-medium text-[#383838]">
          <BsClock className="text-[var(--primary-color)]" size={35} />
          <h2>Full day lasts 8 hours.</h2>
        </div>
      </section>
      <br />
      <br />
      <Link to="/Our-fleet">
        <button className="bg-[var(--primary-color)] mx-auto block text-white text-lg font-bold rounded-lg px-12 py-2">
          {t('bookNow')}
        </button>
      </Link>
      <br />
      <br />
      <br />
      <div className="mx-[3%] md:mx-[6%] mb-16">
        <h1 className="text-3xl font-medium">All the documentation you need</h1>
        <br />
        <p className="text-[#676767] text-lg">
       In addition to the rates, check the checklist and the rental contract that you will have to sign to set sail and spend a day of fun and relaxation
        </p>
      </div>
      <section className="bg-[#CBA5574D] py-12 px-[3%] md:px-[6%]">
        <h1 className="text-3xl text-[#383838] font-medium mb-4 ">
        All the documentation you need
        </h1>
        <p className="text-lg text-[#383838]">
       In addition to the rates, check the checklist and the rental contract that you will have to sign to set sail and spend a day of fun and relaxation
        </p>
        <div className="flex gap-4 flex-col items-stretch mt-12 mb-20 md:flex-row">
          <Link to="/faq">
            <button className="bg-[var(--primary-color)] flex w-full sm:w-max gap-2 items-center text-white text-base font-bold rounded-lg px-12 py-2">
              <TbMessageCircleQuestion size={32} />
              {t('faq')}
            </button>
          </Link>

          <button
            onClick={() => setShowRuleOfConduct(true)}
            className="bg-[var(--primary-color)] flex w-full sm:w-max gap-2 items-center text-white text-base font-bold rounded-lg px-12 py-2"
          >
            <BsFiletypePdf size={32} /> Rules of conduct
          </button>
          {showRuleOfConduct && (
            <RuleOfCunduct setShowRuleOfConduct={setShowRuleOfConduct} />
          )}

          <Link to="/RecreationalVehicleRentalAgreement">
            <button className="bg-[var(--primary-color)] flex w-full sm:w-max gap-2 items-center text-white text-base font-bold rounded-lg px-12 py-2">
              <BsFiletypePdf size={32} /> Rental Agreement
            </button>
          </Link>
        </div>
        <h1 className="text-3xl text-[#383838] font-medium mb-4 ">
        Security Deposit
        </h1>
        <p className="text-lg text-[#383838]">
        The security deposit is mandatory and set at €100.00 to be paid upon collection of the vessel. This deposit will be returned, except for the separation of any amounts withheld for various reasons by the tenant at the end of the rental.  
        </p>
        <br />
        <br />
        { <Link to="#">
          <button className="bg-[var(--primary-color)] text-white text-base font-bold rounded-lg px-12 py-3">
          Find Out More
          </button>
        </Link> }
      </section>
      <section className="overflow-auto mx-[3%] md:mx-[6%]">
        <RatesTable ref={tableRef} /> {/* Pass ref to RatesTable */}
       
      </section>
      <div className='flex items-end justify-end px-20'>
       <button 
          onClick={handleDownloadPDF} 
          className="bg-[var(--primary-color)] text-white text-lg font-bold rounded-lg px-12 py-2 mt-4"
        >
          {t('downloadTableAsPDF')}
        </button>
        </div>
      <div className="mx-[3%] mt-4 md:mx-[6%] flex gap-2 justify-center items-center">
        <p className="w-4 h-4 bg-lime-500 rounded-md"></p>
        <p> Work Day</p>
      </div>
      <div className="mx-[3%] mb-12 md:mx-[6%] flex gap-2 justify-center items-center">
        <p className="w-4 h-4 bg-red-400 rounded-md"></p>
        <p>Week End</p>
      </div>
    </>
  );
};

export default Rates;
