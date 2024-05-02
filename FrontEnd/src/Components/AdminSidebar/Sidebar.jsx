import { Link } from 'react-router-dom';
import './Sidebar.css';
import { RiHome5Line } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';
import { LuDownload } from 'react-icons/lu';
import {
  LiaFileContractSolid,
  LiaFileInvoiceDollarSolid,
} from 'react-icons/lia';
import { CiDollar } from 'react-icons/ci';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { PiFolderSimpleStar } from 'react-icons/pi';
import { TbTopologyStar2 } from 'react-icons/tb';
import logo from '../../assets/Images/logo.png';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { IoCalendarOutline } from 'react-icons/io5';
import { FaSackDollar } from 'react-icons/fa6';

const Sidebar = () => {
  return (
    <div
      className={`rounded-tr-3xl 880px:rounded-lg super-admin-left-sidebar pt-8 pb-20 px-2 gap-2 content-start text-base font-medium`}
    >
      <img src={logo} alt="logo" className="size-[80px]" />
      <Link
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes('/Dashboard')
            ? 'bg-[--primary-color] text-white'
            : ''
        }`}
        to="/Dashboard"
      >
        <RiHome5Line size={24} />
        Dashboard
      </Link>
      <Link
        to={'/Dashboard/calendar2'}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes('/Dashboard/calendar2')
            ? 'bg-[--primary-color] text-white'
            : ''
        }`}
      >
        <SlCalender size={20} /> Calendar
      </Link>
      <Link
        to={'/Dashboard/my-boats'}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes('/Dashboard/my-boats')
            ? 'bg-[--primary-color] text-white'
            : ''
        }`}
      >
        <LuDownload size={20} />
        Boats
      </Link>
      <Link
        to={'/Dashboard/pending-bookings'}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes('/Bookings')
            ? 'bg-[--primary-color] text-white'
            : ''
        }`}
      >
        <HiOutlineCurrencyDollar size={20} />
        Bookings
      </Link>
      <Link
        to={'/Dashboard/billing'}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes('/Billing')
            ? 'bg-[--primary-color] text-white'
            : ''
        }`}
      >
        <LiaFileInvoiceDollarSolid size={20} /> Billing
      </Link>
      <Link
        to={'/Dashboard/reminders'}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes('/Remainders')
            ? 'bg-[--primary-color] text-white'
            : ''
        }`}
      >
        <IoCalendarOutline size={20} />
        Remainders
      </Link>
      <Link
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes('Cash Flow')
            ? 'bg-[--primary-color] text-white'
            : ''
        }`}
      >
        <FaSackDollar size={20} />
        Cash Flow
      </Link>
      <Link
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes('Customer Support')
            ? 'bg-[--primary-color] text-white'
            : ''
        }`}
        to="#"
      >
        <TfiHeadphoneAlt size={20} />
        Customer Support
      </Link>
      <Link
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes('Profile')
            ? 'bg-[--primary-color] text-white'
            : ''
        }`}
        to="#"
      >
        <PiFolderSimpleStar size={20} />
        Profile
      </Link>
    </div>
  );
};

export default Sidebar;
