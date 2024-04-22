import React, { useState } from 'react';
import { RiArrowRightSFill} from 'react-icons/ri'; 
import { RiArrowUpSFill } from "react-icons/ri";

const DropdownFAQ = ({
    title,
    description
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    
    <div className="flex flex-col gap-[1%] border-t border-b border-[#E8E8E8] py-5">
    <button className="flex items-center gap-[2%]" onClick={toggleDropdown}>
      {/* Render different icon based on isOpen state */}
      <span className=' text-4xl text-[#383838]'>{isOpen ? <RiArrowRightSFill /> : <RiArrowUpSFill />}</span>
      <p className=' text-sm font-medium text-[#4B465C] leading-5'>{title}</p>
      
    </button>
    {isOpen && (
      <ol className="mt-2 list-decimal ml-[6%] text-sm font-medium text-[#4B465C] leading-5">
        <li>
          <p className=''>
            {description}
          </p>
        </li>
      </ol>
    )}

  </div>
  )
}

export default DropdownFAQ
