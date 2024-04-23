import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../assets/Images/logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --------Hamburger Logic--------------
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    // Prevent scrolling when the menu is open
    if (showSidebar) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }
    const closeSidebarOnClickOutside = (event) => {
      // Check if the click is outside the sidebar and hamburger menu
      if (
        showSidebar &&
        event.target.closest('.small-devices') === null &&
        event.target.closest('.hamburger-main-menu') === null
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener('click', closeSidebarOnClickOutside);

    return () => {
      document.removeEventListener('click', closeSidebarOnClickOutside);
    };
  }, [showSidebar]);
  return (
    <nav className="w-full absolute top-0 z-50">
      <div className="hidden 500px:flex justify-between gap-4 items-center my-4 mx-[3%] md:mx-[6%]">
        <div className="text-[--primary-color] text-base flex gap-8">
          <a href="tel:+39 3701564317" className="flex gap-2 items-baseline">
            <FaPhoneAlt />
            +39 3701564317
          </a>
          <a href="mailto:info@dadirent.it" className="flex gap-2 ">
            <HiOutlineMail size={20} />
            info@dadirent.it
          </a>
        </div>
        <div className="text-[--primary-color] flex gap-5">
          <FaInstagram size={25} />
          <FaFacebookF size={25} />
          <FaWhatsapp size={25} />
        </div>
      </div>
      <hr className="bg-[--primary-color] border-none w-full h-[1px] mb-[1px]" />

      <div
        className={`small-devices ${
          showSidebar ? 'show bg-white' : ''
        }  text-white flex gap-8 justify-between items-center px-[3%] md:px-[6%]  ${
          isScrolled
            ? 'bg-white fixed right-0 left-0 top-0 transition-all duration-700'
            : 'fixed top-16 right-0 left-0 bg-transparent transition-all duration-700'
        }`}
      >
        <img src={logo} alt="logo" className="w-16 h-16 hidden 880px:block" />
        <div
          className={`w-full flex flex-col 880px:flex-row gap-5 880px:items-center text-xl font-semibold ${
            isScrolled ? 'text-black' : 'text-black 880px:text-white'
          }`}
        >
          <Link to="/">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Home
            </p>
          </Link>
          <Link to="/services">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Services
            </p>
          </Link>
          <Link to="/Our-Fleet">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Fleet
            </p>
          </Link>
          <Link to="/Rates">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Rates
            </p>
          </Link>
          <Link to="/">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Where we are
            </p>
          </Link>
          <Link to="/">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Dadi Boats
            </p>
          </Link>

          <Link to="/">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Contact Us
            </p>
          </Link>
          <button className="text-[var(--primary-color)] rounded-lg border-[1px] border-[var(--primary-color)]  px-4 py-2">
            Login
          </button>
          <Link to="/check-out">
            <button className="text-white bg-[var(--primary-color)] rounded-lg border-[1px] border-[var(--primary-color)]  px-4 py-2">
              Book Now
            </button>
          </Link>
        </div>
      </div>
      {/* mobile navbar  */}
      <div
        className={`hamburger-main-menu  px-[3%] md:px-[6%] ${
          isScrolled
            ? 'bg-white  fixed right-0 left-0 top-0 transition-all duration-700'
            : 'fixed top-0 500px:top-16 right-0 left-0 bg-transparent text-white transition-all duration-700'
        }`}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-16 h-16 " />
        </Link>
        <div className="flex gap-4">
          <div className="block z-30" onClick={toggleSidebar}>
            {!showSidebar ? '☰' : 'X'}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
