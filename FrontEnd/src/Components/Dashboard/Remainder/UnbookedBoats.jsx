import React, { useState, useEffect } from 'react';
import RemainderNavbar from './RemainderNavbar';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSwap } from "react-icons/io";
import baseURL from '../../../../APi/BaseUrl';
import Boat from '../../../assets/Images/our-fleet-boat1.webp';
import { TiArrowSortedUp } from "react-icons/ti";

const UnbookedBoats = () => {
    const [infoBoxes, setInfoBoxes] = useState({});
    const [infoContent, setInfoContent] = useState("");
    const [showCampaignPopup, setShowCampaignPopup] = useState(false);
    const [paymentData, setPaymentData] = useState([]);

    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                const response = await baseURL.get("/checkout/getPayment");
                const data = await response.data;
                setPaymentData(data);
            } catch (error) {
                console.error("Error fetching payment data:", error);
            }
        };
        fetchPaymentData();
    }, []);

    const handleCampaignClick = () => {
        setShowCampaignPopup(true);
    };

    const handleSendCampaign = () => {
        setShowCampaignPopup(false);
    };

    const handleCreateCampaign = () => {
        setShowCampaignPopup(false);
    };

    const handleCancelCampaign = () => {
        setShowCampaignPopup(false);
    };

    const handleMouseEnter = (id, content) => {
        setInfoBoxes((prevState) => ({
            ...prevState,
            [id]: true,
        }));
        setInfoContent(content);
    };

    const handleMouseLeave = (id) => {
        setInfoBoxes((prevState) => ({
            ...prevState,
            [id]: false,
        }));
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB', {
            day: 'numeric', 
            month: 'long', 
            year: 'numeric'
        }).replace(/ /g, ' ');
    };

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const bookingStatuses = ['Half Day Morning', 'Half Day Evening', 'Full Day'];

    const getBookingStatus = (boatName, date, paymentData) => {
        const bookingsOnDate = paymentData.filter(payment =>
            payment.boatName === boatName &&
            new Date(payment.availableDate).toLocaleDateString('en-GB') === date.toLocaleDateString('en-GB')
        );
    
        if (bookingsOnDate.length === 0) {
            return ['Unbooked'];
        }
    
        // Check if the boat is booked for the full day
        if (bookingsOnDate.some(payment => payment.rateType === 'fullDay')) {
            return ['Booked for full day'];
        }
  
        const isBookedHalfDayMorning = bookingsOnDate.some(payment => payment.rateType === 'Half Day Morning');
    
        const isBookedHalfDayEvening = bookingsOnDate.some(payment => payment.rateType === 'Half Day Evening');
    
   
        if (isBookedHalfDayMorning && isBookedHalfDayEvening) {
            return ['Full Day'];
        } else if (isBookedHalfDayMorning) {
            return ['Half Day Morning']; 
        } else if (isBookedHalfDayEvening) {
            return ['Half Day Evening'];
        } else {
            return ['Unbooked']; 
        }
    };
    
    
    const boatNames = [...new Set(paymentData.map(payment => payment.boatName))].filter(name => name);

    return (
        <>
            <RemainderNavbar />
            <div className='mx-[3%] md:mx-[1%] mt-[3%]'>
                <div className='flex md:justify-between flex-col md:flex-row space-y-3 md:space-y-0 items-center md:items-baseline'>
                    <h1 className='text-lg font-medium text-[#4B465C]'>Unbooked Boats</h1>
                    <button className='px-[30px] py-[14px] rounded-[10px] border border-[#DBDADE] text-[#4B465C] font-normal text-sm'>Add new booking</button>
                </div>

                <div className='flex justify-between mt-[2%] md:gap-6'>
                    <div className='flex gap-2 items-center py-2 pl-3 pr-4 bg-[#ffff] w-[35%] rounded-xl border border-[#DBDADE] md:flex-grow'>
                        <IoSearchOutline className='text-gray-500' />
                        <input type="text" placeholder='Search' className='bg-transparent outline-none focus:ring-0 w-full' />
                    </div>

                    <div className='flex gap-2 items-center px-3 py-1 md:py-2 md:pl-3 md:pr-4 border border-[#DBDADE] rounded-xl w-[30%] md:w-[16%] bg-[#ffff]'>
                        <span><IoMdSwap /></span>
                        <select name="filter" className='bg-[#ffff] rounded-md outline-none focus:ring-0 appearance-none w-full'>
                            <option value="">Filter</option>
                        </select>
                    </div>
                </div>

                <div className="container overflow-x-auto">
                    <table className="w-full my-[3%] border border-[#DBDADE]">
                        <thead className='bg-[#CBA557] bg-opacity-30'>
                            <tr className="text-gray-600 text-left uppercase font-medium">
                                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">Boat Name</th>
                                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">{formatDate(today)}</th>
                                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">{formatDate(tomorrow)}</th>
                                <th className="px-4 py-3 md:px-5 md:py-5 text-sm text-[#808080] font-medium">{formatDate(dayAfterTomorrow)}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boatNames.map((boatName, index) => {
                                return (
                                    <tr key={index} className="border-b border-[#DBDADE] hover:bg-gray-100">
                                        <td className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
                                            <div className='flex flex-col gap-2'>
                                                <img src={Boat} alt="Boat" className='w-28 md:w-36' />
                                                <p className='text-[#808080] font-medium text-sm'>{boatName}</p>
                                            </div>
                                        </td>
                                        {[today, tomorrow, dayAfterTomorrow].map((date, dateIndex) => {
                                            const bookingStatus = getBookingStatus(boatName, date, paymentData);

                                            return (
                                                <td key={dateIndex} className="px-4 py-3 md:px-5 md:py-5 whitespace-nowrap text-sm text-[#4B465C]">
                                                    {bookingStatus.length > 0 ? bookingStatus.map((status, statusIndex) => (
                                                        <span
                                                            key={statusIndex}
                                                            className={`px-3 py-2 rounded-[10px] bg-green-100 text-green-600 font-normal text-sm`}
                                                            onMouseEnter={(e) => handleMouseEnter(`${dateIndex}-${statusIndex}`, e.target.textContent)}
                                                            onMouseLeave={() => handleMouseLeave(`${dateIndex}-${statusIndex}`)}
                                                            style={{ position: 'relative' }}
                                                        >
                                                            {status}
                                                            {infoBoxes[`${dateIndex}-${statusIndex}`] && (
                                                                <div className="absolute top-full left-0 z-10">
                                                                    <div className="mt-[-9px]">
                                                                        <TiArrowSortedUp className="text-[#CBA557] text-3xl" />
                                                                    </div>
                                                                    <div className="px-[15px] py-[20px] space-y-3 bg-[#CBA557] rounded-[8px] text-[#ffff] mt-[-10px]">
                                                                        <h2 className="text-sm font-medium">{infoContent}:</h2>
                                                                        <button className="py-2 px-[15px] bg-transparent text-[#ffff] font-bold text-[10px] rounded-2xl border-[0.69px] border-[#ffff]" onClick={handleCampaignClick}>Create Campaign</button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </span>
                                                    )) : 'Booked'}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default UnbookedBoats;
