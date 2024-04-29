import { Link, useNavigate } from 'react-router-dom';
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
        className="flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white"
        to="#"
      >
        <RiHome5Line size={24} />
        Dashboard
      </Link>
      <Link
        className="flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white"
        to="#"
      >
        <SlCalender size={20} /> Calendar
      </Link>
      <Link
        className="flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white"
        to="#"
      >
        <LuDownload size={20} />
        Boats
      </Link>
      <Link
        className="flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white"
        to="#"
      >
        <HiOutlineCurrencyDollar size={20} />
        Bookings
      </Link>
      <Link
        className="flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white"
        to="#"
      >
        <LiaFileInvoiceDollarSolid size={20} /> Billing
      </Link>
      <Link
        className="flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white"
        to="#"
      >
        <IoCalendarOutline size={20} />
        Remainders
      </Link>
      <Link
        className="flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white"
        to="#"
      >
        <FaSackDollar size={20} />
        Cash Flow
      </Link>
      <Link
        className="flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white"
        to="/Mountain-Rescue"
      >
        <TfiHeadphoneAlt size={20} />
        Customer Support
      </Link>
      <Link
        className="flex w-full gap-2 text-left items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white"
        to="/Certificates"
      >
        <PiFolderSimpleStar size={20} />
        Profile
      </Link>
    </div>
  );
};

export default Sidebar;
