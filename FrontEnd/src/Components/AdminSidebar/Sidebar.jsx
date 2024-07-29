import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuDownload } from "react-icons/lu";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { AuthContext } from "../../../Context/AuthContext";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const activeDashboard =
    window.location.pathname.includes("/Dashboard/pending-bookings") ||
    window.location.pathname.includes("/Dashboard/my-boats") ||
    window.location.pathname.includes("/Dashboard/billing") ||
    window.location.pathname.includes("/Dashboard/reminders") ||
    window.location.pathname.includes("/Dashboard/Cash-flow") ||
    window.location.pathname.includes("/Dashboard/customer-support") ||
    window.location.pathname.includes("/Dashboard/profile") ||
    window.location.pathname.includes("/Dashboard/calendar");
  const { pathname } = location;
  console.log(sidebarOpen);

  const trigger = useRef();
  const sidebar = useRef();
  const [hoverSubLink, setHoverSubLink] = useState(null);
  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-20 flex h-screen w-72 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between md:justify-center gap-2 px-6 py-5 lg:py-6">
        <NavLink to="/" className="flex items-center justify-center gap-2">
          <img src="/images/logo.png" className="w-24 h-24" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="py-4 px-4 lg:px-6">
          {/* <!-- Menu Group --> */}

          <ul className="mb-6 flex flex-col gap-6">
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
              Reminders
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
            <button
              onClick={logout}
              className={`flex w-full gap-2 items-center px-5 py-3 rounded-lg hover:bg-[--primary-color] hover:text-white`}
            >
              <BiLogOutCircle size={20} />
              Log Out
            </button>
          </ul>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
