import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const TopNavbar = () => {
  return (
    <>
      <div className="hidden md:flex justify-between gap-4 items-center my-4 mx-[3%] md:mx-[6%]">
        <div className="text-[--primary-color] text-base flex gap-8">
          <a href="https://wa.me/393701564317" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-baseline">
            <FaPhoneAlt />
            +39 3701564317
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dadi.rent@gmail.com" target="_blank" rel="noopener noreferrer" className="flex gap-2">
            <HiOutlineMail size={20} />
            dadi.rent@gmail.com
          </a>
        </div>
        <div className="text-[--primary-color] flex gap-5">
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={25} />
          </a>
          <a href="https://wa.me/393701564317" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={25} />
          </a>
        </div>
      </div>
      <hr className="bg-[--primary-color] border-none w-full h-[1px] mb-[1px]" />
    </>
  );
};
export default TopNavbar;
