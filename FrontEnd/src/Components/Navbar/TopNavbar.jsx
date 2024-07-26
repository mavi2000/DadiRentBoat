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
    </>
  );
};
export default TopNavbar;
