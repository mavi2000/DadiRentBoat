import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../assets/Images/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-4 right-0 left-0 text-white z-50">
      <div className="flex justify-between gap-4 items-center my-4 mx-[3%] md:mx-[6%]">
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

      <div className="flex gap-8 justify-between items-center mx-[3%] md:mx-[6%] ">
        <img src={logo} alt="logo" className="w-16 h-16 " />
        <div className="flex gap-5 items-center text-xl font-semibold">
          <Link to="/">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Home
            </p>
          </Link>
          <Link to="/">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Services
            </p>
          </Link>
          <Link to="/">
            <p className="hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ">
              Fleet
            </p>
          </Link>
          <Link to="/">
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
          <button className="text-white bg-[var(--primary-color)] rounded-lg border-[1px] border-[var(--primary-color)]  px-4 py-2">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
