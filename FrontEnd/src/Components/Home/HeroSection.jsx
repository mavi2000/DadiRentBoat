import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { RiWhatsappFill } from 'react-icons/ri';
import manWithStick from '../../assets/Images/man-with-stick.webp';
import phoneSaveIcon from '../../assets/Images/phone-save.png';
import React, { useRef, useEffect } from 'react';
import dadiVideo from '../../assets/Images/Dadi Rent - hero-section.mp4';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            // Autoplay started
            video.muted = true; // Mute the video
            video.currentTime = 10; // Start playing from 10 seconds
            video.loop = true;
          })
          .catch((error) => {
            // Autoplay was prevented
            console.error('Autoplay was prevented:', error);
          });
      }
    }
  }, []);
  return (
    <div className="relative">
      <video
        className="absolute top-0 !z-0 h-[100svh] md:h-[calc(100svh+6rem)] w-full object-fill"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src={dadiVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className=" flex items-center">
        <div className="mx-[3%] md:mx-[6%] z-10 h-[100svh] md:h-[calc(100svh+6rem)] flex flex-col justify-center">
          <h1 className="text-[var(--primary-color)] text-[3rem] font-bold leading-[3rem]">
            Boats and Dinghies Rental
          </h1>
          <p className="my-8 font-medium text-2xl text-white md:w-[60%]">
            Get on board, an unforgettable day at sea awaits you thanks to DaDi
            rent boat and dinghy rental
          </p>
          <button className="text-white bg-[var(--primary-color)] grow-0 w-fit rounded-lg border-[1px] border-[var(--primary-color)] font-bold px-8 py-3">
            Get Started
          </button>
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
            Contact us and Book Now
          </h1>
          <a
            href="tel:+39 3701564317"
            className="text-[#343434] font-bold text-2xl"
          >
            +39 3701564317
          </a>
          <div className="text-[--primary-color] flex gap-5 items-center">
            <IoMail size={30} />
            <RiWhatsappFill size={32} className="text-[#67C15E]" />
            <FaPhoneAlt size={25} />
          </div>
          <p className="text-[#00000080] text-center px-4 w-[90%]">
            If you love the sea and want to spend moments different from the
            usual, DaDi Rent is the ideal solution for renting boats and dinghys
            in Livorno, whether you are in the company of family or friends.
          </p>
          <button className="text-white bg-[var(--primary-color)] mb-4 rounded-lg border-[1px] border-[var(--primary-color)] font-bold px-8 py-3">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
