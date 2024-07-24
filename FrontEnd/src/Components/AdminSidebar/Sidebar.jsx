import { Link } from "react-router-dom";
import "./Sidebar.css";
import { RiHome5Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuDownload } from "react-icons/lu";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiFolderSimpleStar } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";
import logo from "../../assets/Images/logo.png";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";

const Sidebar = () => {
  const activeDashboard =
    window.location.pathname.includes("/Dashboard/pending-bookings") ||
    window.location.pathname.includes("/Dashboard/my-boats") ||
    window.location.pathname.includes("/Dashboard/billing") ||
    window.location.pathname.includes("/Dashboard/reminders") ||
    window.location.pathname.includes("/Dashboard/Cash-flow") ||
    window.location.pathname.includes("/Dashboard/customer-support") ||
    window.location.pathname.includes("/Dashboard/profile") ||
    window.location.pathname.includes("/Dashboard/calendar");
  return (
    <div
      className={`rounded-tr-3xl 880px:rounded-lg super-admin-left-sidebar pt-8 pb-20 px-2 gap-2 content-start text-base font-medium`}
    >
      <img src={logo} alt="logo" className="size-[80px]" />
      <Link
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          activeDashboard ? "" : "bg-[--primary-color] text-white"
        }`}
        to="/Dashboard"
      >
        <RiHome5Line size={24} />
        Dashboard
      </Link>

      <Link
        to={"/Dashboard/calendar"}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes("/Dashboard/calendar")
            ? "bg-[--primary-color] text-white"
            : ""
        }`}
      >
        <SlCalender size={20} /> Calendar
      </Link>

      <Link
        to={"/Dashboard/my-boats"}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes("/Dashboard/my-boats")
            ? "bg-[--primary-color] text-white"
            : ""
        }`}
      >
        <LuDownload size={20} />
        Boats
      </Link>

      <Link
        to={"/Dashboard/pending-bookings"}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes("/Dashboard/pending-bookings")
            ? "bg-[--primary-color] text-white"
            : ""
        }`}
      >
        <HiOutlineCurrencyDollar size={20} />
        Bookings
      </Link>

      <Link
        to={"/Dashboard/billing"}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes("/Dashboard/billing")
            ? "bg-[--primary-color] text-white"
            : ""
        }`}
      >
        <LiaFileInvoiceDollarSolid size={20} /> Billing
      </Link>

      <Link
        to={"/Dashboard/reminders"}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes("/Dashboard/reminders")
            ? "bg-[--primary-color] text-white"
            : ""
        }`}
      >
        <IoCalendarOutline size={20} />
        Remainders
      </Link>

      <Link
        to="/Dashboard/Cash-flow"
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes("/Dashboard/Cash-flow")
            ? "bg-[--primary-color] text-white"
            : ""
        }`}
      >
        <FaSackDollar size={20} />
        Cash Flow
      </Link>

      <Link
        to={"/Dashboard/customer-support"}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes("/customer-support")
            ? "bg-[--primary-color] text-white"
            : ""
        }`}
      >
        <TfiHeadphoneAlt size={20} />
        Customer Support
      </Link>

      <Link
        to={"/Dashboard/profile"}
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white ${
          window.location.pathname.includes("/Dashboard/profile")
            ? "bg-[--primary-color] text-white"
            : ""
        }`}
      >
        <PiFolderSimpleStar size={20} />
        Profile
      </Link>
      <button
        className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white`}
      >
        <BiLogOutCircle size={20} />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
