import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/Images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--navy-blue)] flex flex-col gap-3 items-center py-8 z-50">
      <img src={logo} alt="logo" className="w-24 h-24" />
      <div className="text-[--primary-color] flex gap-5 my-3">
        <FaInstagram size={25} />
        <FaFacebookF size={25} />
        <FaWhatsapp size={25} />
      </div>
      <p className="uppercase text-base font-medium text-white">Quick Links</p>
      <div className="flex flex-wrap gap-5 items-center justify-between text-sm font-semibold md:w-[50%] my-3">
        <Link to="/">
          <p className="hover:text-[--primary-color] text-white ">Home</p>
        </Link>
        <Link to="/">
          <p className="hover:text-[--primary-color] text-white ">Services</p>
        </Link>

        <Link to="/">
          <p className="hover:text-[--primary-color] text-white ">Rates</p>
        </Link>

        <Link to="/faq">
          <p className="hover:text-[--primary-color] text-white ">FAQ</p>
        </Link>

        <Link to="/">
          <p className="hover:text-[--primary-color] text-white ">Contact Us</p>
        </Link>
      </div>
      <p className=" text-base font-medium text-white">
        Copyright © 2024 DiDI rent - FAQ
      </p>
      <p className="uppercase text-base font-medium text-white">
        Website Created by Deventia Tech private ltd
      </p>
    </footer>
  );
};
export default Footer;
