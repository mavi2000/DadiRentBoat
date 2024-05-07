import React from 'react'
import BoatsNavbar from './BoatsNavbar'
import { BsExclamationLg } from "react-icons/bs";
import { MdDone } from "react-icons/md";

const Overview = () => {
  return (
    <>
    <BoatsNavbar/>
    <div className=' mx-[1%] my-[1%] bg-white h-[100vh]'>
        <div className='mx-[4%]'>
            <h1 className=' font-medium text-[#4B465C] text-lg py-5'>Activate your ad</h1>
            <p className='text-[#4B465C] font-normal text-sm'>Your ad is not visible to other users, and does not yet appear in search results. Complete the announcement now and share it</p>

            <div className=' flex flex-col gap-5 px-1'>
                <div className='mt-[4%] flex gap-6 pb-5 px-2 items-center border-b border-[#E8E8E8]'>
                    <span className=' text-[#CBA557] text-3xl'><BsExclamationLg/></span>
                    <p className=' font-normal text-sm text-[#4B465C]'>Missing information in the boat description <span className=' text-[#CBA557] font-medium'>Complete the description</span></p>
                </div>
                <div className=' flex gap-6 pb-5 pl-2 items-center border-b border-[#E8E8E8]'>
                    <span className=' text-[#CBA557] text-3xl'><BsExclamationLg/></span>
                    <p className=' font-normal text-sm text-[#4B465C]'>You haven't posted photos of your boat yet <span className=' text-[#CBA557] font-medium'>add a photo</span></p>
                </div>

                <div className=' flex gap-6 pb-5 pl-2 items-center border-b border-[#E8E8E8]'>
                    <span className=' text-[#CBA557] text-3xl'><MdDone/></span>
                    <p className=' font-normal text-sm text-[#4B465C]'>You have set rental prices for the boat<span className=' text-[#CBA557] font-medium'></span></p>
                </div>
                <div className=' flex gap-6 pb-5 pl-2 items-center border-b border-[#E8E8E8]'>
                    <span className=' text-[#CBA557] text-3xl'><BsExclamationLg/></span>
                    <p className=' font-normal text-sm text-[#4B465C]'>You have not indicated a damage deposit for your boat<span className=' text-[#CBA557] font-medium'> Complete the damage deposit</span></p>
                </div>
                <div className=' flex gap-6 pb-5 pl-2 items-center border-b border-[#E8E8E8]'>
                    <span className=' text-[#CBA557] text-3xl'><BsExclamationLg/></span>
                    <p className=' font-normal text-sm text-[#4B465C]'>You have not selected your insurance<span className=' text-[#CBA557] font-medium'> Enter insurance</span></p>
                </div>
                <div className=' flex gap-6 pb-5 pl-2 items-center border-b border-[#E8E8E8]'>
                    <span className=' text-[#CBA557] text-3xl'><BsExclamationLg/></span>
                    <p className=' font-normal text-sm text-[#4B465C]'>You didn't indicate the exact location <span className=' text-[#CBA557] font-medium'> Enter the address</span></p>
                </div>
                <div className=' flex gap-6 pb-5 pl-2 items-center border-b border-[#E8E8E8]'>
                    <span className=' text-[#CBA557] text-3xl'><BsExclamationLg/></span>
                    <p className=' font-normal text-sm text-[#4B465C]'>You didn't specify the boat's equipment <span className=' text-[#CBA557] font-medium'> Complete your equipment</span></p>
                </div>
            
            </div>

        </div>
      
    </div>
    </>
  )
}

export default Overview
