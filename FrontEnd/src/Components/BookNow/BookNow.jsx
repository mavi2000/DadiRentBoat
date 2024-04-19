import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiEngine } from "react-icons/pi";
import { RiAnchorLine } from "react-icons/ri";
import { TbTool } from "react-icons/tb";
import { GrUserPolice } from "react-icons/gr";
import { IoIosArrowUp } from "react-icons/io";
import { RiRulerLine } from "react-icons/ri";


const BookNow = () => {
  return (
    <div className='container flex mx-[6%] gap-[5%] mt-[2%]'>

        <div className="left-container sm:w-[58vw]">
            <div className="top ">
            <h1 className='font-sans font-poppins font-medium text-3xl text-[#000000]'>Yachts La Corniche</h1>
            
            <div className='flex my-3 justify-between'>
                
                <div className=' flex justify-center items-center'>

                <span className=' mr-1 text-[#B7B7B7]'><FaLocationDot/></span>
                <p className='font-sans font-poppins font-normal text-[#B7B7B7]'>PRAIA DE LEÇA DA PALMEIRA</p>
                
                </div>

                <div className='flex gap-3 justify-center items-center'>

                <button className='flex justify-center items-center gap-1 border rounded-md border-[#CBA557] px-4 py-1'>
                    <span className=' text-[1.25rem] text-[#CBA557] '><IoShareSocialOutline/></span>
                    <p className='text-[#676767] '>Share</p>
                </button>

                <button className='flex justify-center items-center gap-1 border rounded-md border-[#CBA557] px-4 py-1'> 
                    <span className=' text-[1.25rem] text-[#CBA557]'><IoHeartOutline/></span>
                    <p className='text-[#676767]'>Add to Wishlist</p>
                </button>
                
                </div>

            </div>

            <div className='flex mt-[8%] gap-[2%] flex-wrap justify-between border-t border-b border-[#CBA557] border-opacity-30 py-2'>
                <div className='flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4'>
                    <span className=' text-[#CBA557]'><HiOutlineUserGroup /></span>
                    <p className='font-sans font-poppins font-normal text-[#808080]'>8 pers</p>
                </div>

                <div className='flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4'>
                    <span className=' text-[#CBA557] transform'><RiAnchorLine /></span>
                    <p className='font-sans font-poppins font-normal text-[#808080]'>40 hp</p>
                </div>

                <div className='flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4'>
                    <span className=' text-[#CBA557]'><PiEngine /></span>
                    <p className='font-sans font-poppins font-normal text-[#808080]'>2 Engines</p>
                </div>

                <div className='flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4'>
                    <span className=' text-[#CBA557]'><TbTool /></span>
                    <p className='font-sans font-poppins font-normal text-[#808080]'>2019</p>
                </div>

                <div className='flex justify-center items-center gap-1 bg-[#CBA55726] bg-opacity-15 rounded-3xl py-2 px-4'>
                    <span className=' text-[#CBA557]'><GrUserPolice /></span>
                    <p className='font-sans font-poppins font-normal text-[#808080]'>With or without skipper</p>
                </div>

            </div>

            </div>

            <div className="center mt-[8%]">
            <h1 className='heading-book'>Description</h1>
            <p className='para-book'>All our Deluxe rooms have big windows to help you take a broad view of the cityscape and nature. We offer bigger bed and every bathroom has bathtub and shower, which brings relaxation to you after a long day.Fast WIFI connection, satelite TV and international standard electric socket are standard throughout Hotel. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>

            
            <div className=' mt-[4%]'>
                <div className='flex gap-[1%] items-center'>
                <span className='text-[#CBA557] transform text-2xl'><RiAnchorLine/></span>
                <h1 className='heading-book'>Satellite Tracking:</h1>
                </div>
                <p className='para-book'>Our dinghy is equipped with a GPS tracking system; The system allows you to locate the boat in real time. This safety device allows the customer to always feel safe and for us charterers to have an immediate position of the boat and evaluate any problems or area trespasses.</p>
            </div>

            <div className=' mt-[4%]'>
                <div className='flex gap-[1%] items-center'>
                <span className='text-[#CBA557] transform text-2xl'><RiAnchorLine/></span>
                <h1 className='heading-book'>This dinghy has the authorization to carry out the activity in the marine protected area of the Secche della Meloria.</h1>
                </div>
                <p className='para-book'>This vehicle has the authorization to carry out the activity in the marine protected area of the Secche della Meloria.
                We are pleased to confirm that our vehicle has the authorization to carry out the activity within the marine protected area of the Secche della Meloria. This area, with a history dating back to the twelfth century, was originally marked by the tower built by the maritime republic of Pisa to indicate the presence of shallow waters in the ancient Porto Pisano. During our excursions in this area, you have the chance to spot dolphins that travel the routes inside the cetacean sanctuary. This is an exciting and fascinating event that will allow you to get in touch with the wonderful marine wildlife present in the area. We are proud to offer the opportunity to explore this protected area and share the beauty and richness of its ecosystem with our customers. Our authorization allows us to operate in accordance with the rules and regulations established by the marine protected area, ensuring responsible navigation and respect for the marine environment. So, when you book our boat rental, you will have the opportunity to live a unique experience within the marine protected area of the Secche della Meloria, enjoying the spectacular nature and marine fauna that this area offers. We encourage you to prepare to venture into this remarkable environment and enjoy the thrill of spotting dolphins as you explore the routes within the cetacean sanctuary. Your experience on board our vehicle will be truly unforgettable.</p>
            </div>


            <div className=' mt-[4%]'>
              <div className='flex items-center gap-[1%] text-[#CBA557] '>
                <p className=' underline'>View Less</p>
                <span><IoIosArrowUp/></span>
              </div>

              <div className='mt-[2%]'>
                <div className='flex flex-wrap gap-[4%]'>
                    <div className='py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30  md:w-40 md:h-20'>
                        <div className='flex gap-1 items-center'>
                        <span className=' text-[1.15rem] text-[#CBA557]'><RiRulerLine/></span>
                        <p className=' text-[#676767]'>Length</p>
                        </div>
                        <p className=' text-sm text-[#676767] text-opacity-70 text-center'>14.42m</p>
                    </div>

                    <div className='py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30  md:w-40 md:h-20'>
                        <div className='flex gap-1 items-center'>
                        <span className=' text-[1.15rem] text-[#CBA557]'><RiRulerLine/></span>
                        <p className=' text-[#676767]'>Width</p>
                        </div>
                        <p className=' text-sm text-[#676767] text-opacity-70 text-center'>8m</p>
                    </div>

                    <div className='py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30  md:w-40 md:h-20'>
                        <div className='flex gap-1 items-center'>
                        <span className=' text-[1.15rem] text-[#CBA557]'><RiRulerLine/></span>
                        <p className=' text-[#676767]'>Draft</p>
                        </div>
                        <p className=' text-sm text-[#676767] text-opacity-70 text-center'>8m</p>
                    </div>

                    <div className='py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30  md:w-40 md:h-20'>
                        <div className='flex gap-1 items-center'>
                        <span className=' text-[1.15rem] text-[#CBA557]'><RiRulerLine/></span>
                        <p className=' text-[#676767]'>Draught</p>
                        </div>
                        <p className=' text-sm text-[#676767] text-opacity-70 text-center'>8m</p>
                    </div>

                    <div className='py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30  md:w-40 md:h-20'>
                        <div className='flex gap-1 items-center'>
                        <span className=' text-[1.15rem] text-[#CBA557]'><RiRulerLine/></span>
                        <p className=' text-[#676767]'>Fuel Tank</p>
                        </div>
                        <p className=' text-sm text-[#676767] text-opacity-70 text-center'>8m</p>
                    </div>

                    <div className='py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30  md:w-40 md:h-20'>
                        <div className='flex gap-1 items-center'>
                        <span className=' text-[1.15rem] text-[#CBA557]'><RiRulerLine/></span>
                        <p className=' text-[#676767]'>Fuel Type</p>
                        </div>
                        <p className=' text-sm text-[#676767] text-opacity-70 text-center'>8m</p>
                    </div>

                    <div className='py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30  md:w-40 md:h-20'>
                        <div className='flex gap-1 items-center'>
                        <span className=' text-[1.15rem] text-[#CBA557]'><RiRulerLine/></span>
                        <p className=' text-[#676767]'>Power</p>
                        </div>
                        <p className=' text-sm text-[#676767] text-opacity-70 text-center'>8m</p>
                    </div>

                    <div className='py-4 px-10 my-2 bg-[#CBA557] bg-opacity-30  md:w-40 md:h-20'>
                        <div className='flex gap-1 items-center'>
                        <span className=' text-[1.15rem] text-[#CBA557]'><RiRulerLine/></span>
                        <p className=' text-[#676767]'>Built</p>
                        </div>
                        <p className=' text-sm text-[#676767] text-opacity-70 text-center'>8m</p>
                    </div>

                </div>
              </div>


            </div>
            
            
            </div>

            

        </div>

        <div className="right-container">
        hello ck right
        </div>

    </div>
  )
}

export default BookNow
