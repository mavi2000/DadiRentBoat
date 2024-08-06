import { useContext } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { RiWhatsappFill } from 'react-icons/ri';
import manWithStick from '../../assets/Images/man-with-stick.webp';
import phoneSaveIcon from '../../assets/Images/phone-save.png';
import HeroVideo from './HeroVideo';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { AuthContext } from '../../../Context/AuthContext';

const HeroSection = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className="relative">
      <HeroVideo />
      <section className="flex items-center">
        <div className="mx-[3%] md:mx-[6%] z-10 h-[100svh] md:h-[calc(100svh+6rem)] flex flex-col justify-center">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            {t('title')}
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            {t('description')}
          </p>
          {!user && (
            <button
              onClick={handleGetStartedClick}
              className="text-white bg-[var(--primary-color)] grow-0 w-fit rounded-lg border-[1px] border-[var(--primary-color)] font-bold px-8 py-3"
            >
              {t('getStarted')}
            </button>
          )}
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row">
        <img
          src={manWithStick}
          alt="man With Stick"
          className="w-full md:w-[60%] h-[540px] md:-mt-24 md:-mr-16 z-10"
        />
        <div className="bg-white z-10 w-full flex items-center gap-4 flex-col justify-center pb-8">
          <img
            src={phoneSaveIcon}
            alt="phone"
            className="w-16 ml-0 mt-0 mb-auto mr-auto"
          />
          <h1 className="text-[var(--primary-color)] text-base font-semibold ">
            {t('contactTitle')}
          </h1>
          <a
            href="tel:+39 3701564317"
            className="text-[#343434] font-bold text-2xl"
          >
            {t('phone')}
          </a>
          <div className="text-[--primary-color] flex gap-5 items-center">
            <IoMail size={30} />
            <RiWhatsappFill size={32} className="text-[#67C15E]" />
            <FaPhoneAlt size={25} />
          </div>
          <p className="text-[#00000080] text-center px-4 w-[90%]">
            {t('contactDescription')}
          </p>
          <Link
            to={'/Our-Fleet'}
            className="text-white bg-[var(--primary-color)] mb-4 rounded-lg border-[1px] border-[var(--primary-color)] font-bold px-8 py-3"
          >
            {t('bookNow')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
