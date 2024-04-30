import React,{useState} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import MyBoats1 from '../../../assets/Images/MyBoats1.jpeg'
import { TiLocation } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { ImPlus } from "react-icons/im";
import { HiOutlineInformationCircle } from "react-icons/hi";
import CircularBar from './CircularBar';

const MyBoats = () => {
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const handleDeleteClick = () => {
        setShowDeletePopup(true); // Show the delete confirmation popup
    };

    const handleConfirmDelete = () => {
        // Add logic to handle delete action
        // Once delete action is confirmed, you can close the popup
        setShowDeletePopup(false);
    };

    const handleCancelDelete = () => {
        setShowDeletePopup(false); // Close the delete confirmation popup
    };
  return (
    <div className=' mx-[4%] mt-[3%]'>

        <div className=' md:flex md:justify-between justify-center text-center gap-5 md:gap-0 items-center'>
            <h1 className='text-[#07474F] text-lg font-bold'>My Boats</h1>
            
            <div className=' flex md:gap-5 flex-wrap justify-center gap-3'>
             <button className=' px-4 py-2 text-[#07474F] text-xs text-center border border-[#07474F] rounded '>Default configuration</button>
             <button className=' px-4 py-2 text-[#07474F] text-xs text-center border border-[#07474F] rounded '>Multi Edit</button>
             <button className=' px-4 py-2 text-[#07474F] text-xs text-center border border-[#07474F] rounded '>Add a boat</button>
             <button className=' px-5 py-2 bg-[#CBA557] text-[#FFFFFF] text-xs text-center rounded md:whitespace-nowrap'> Filters</button>
            </div>

        </div>

        <div className=' flex justify-center  flex-col md:flex-row space-y-2 md:space-y-0 mt-[2%] w-full gap-[4%]'>
            <div className='flex gap-2 items-center py-2 px-3 rounded-xl border border-[#B7B7B7]'>
                <IoSearchOutline className='text-[#4B465C]' />
                <input
                    type="text"
                    placeholder='Name, ID, Brand, Model'
                    className='bg-transparent outline-none focus:ring-0 lg:w-full md:w-1/3 w:1/2  text-sm text-[#4B465C] font-normal'
                />
            </div>
            <div className='items-center py-2 px-3 rounded-xl border border-[#B7B7B7]'>
                <input
                    type="text"
                    placeholder='Boat Type'
                    className='bg-transparent outline-none focus:ring-0 lg:w-full md:w-1/3 w:1/2  text-sm text-[#4B465C] font-normal'
                />
            </div>
            <div className='items-center py-2 px-3 rounded-xl border border-[#B7B7B7]'>
                <input
                    type="text"
                    placeholder='Boat Length'
                    className='bg-transparent outline-none focus:ring-0 lg:w-full md:w-1/3 w:1/2  text-sm text-[#4B465C] font-normal'
                />
            </div>
            <div className='items-center py-2 px-3 rounded-xl border border-[#B7B7B7]'>
                <input
                    type="text"
                    placeholder='Minimum Price'
                    className='bg-transparent outline-none focus:ring-0 lg:w-full md:w-1/3 w:1/2  text-sm text-[#4B465C] font-normal'
                />
            </div>
        
        </div>

        <div className=' flex flex-col md:flex-row md:justify-between w-full mt-[4%]'>    

            <div className=' flex gap-[3%] flex-col md:flex-row items-center md:items-start'>
                <div className='md:w-64 w-1/2'>
                    <img src={MyBoats1} alt="" className=' w-full' />
                </div>

                <div className=' flex flex-col gap-2 items-center md:items-start'>
                    <h1 className=' text-[#00151C] font-semibold'>Thu</h1>
                    <p className='text[#818C8E] font-normal text-sm'>Jeanneau Albatros 750 - 2017</p>
                    <div className=' flex gap-1 items-center'>
                        <span className=' text-[#CBA557]'><TiLocation/></span>
                        <p className=' text-sm font-normal'>Italy Hill</p>
                    </div>
                    
                    <div className='flex gap-2 my-[1%] flex-wrap'>
                        <button className='md:px-4 md:py-2 px-3 py-1 bg-[#CBA557] border border-[#CBA557] rounded text-xs font-bold text-[#FFFFFF]'>Manage your calendar</button>

                        <div className='flex'>
                            <button className='md:px-4 md:py-2 px-3 py-1 border border-[#07474F] rounded-l-[4px]'>Edit your ad</button>
                            <div className='p-1 border border-[#07474F] border-l-0 rounded-r-[4px] flex items-center'>
                            <select name="" id="" className='border-t bg-transparent md:text-xl text-xs'>
                                <option value=""></option>
                            </select>
                            </div>
                        </div>

                    </div>

                    <div className=' flex gap-1 md:whitespace-nowrap'>
                        <p className=' text-xs font-normal text-[#FAB10A]'>This announcement is not complete</p>
                        <p className=' text-xs font-bold text-[#07474F]'>• Complete the listing</p>

                    </div>
                    <button className=' self-start text-xs text-[#E77359] font-bold underline' onClick={handleDeleteClick}>Delete</button>

                </div>
                

            </div>

            <div className=' flex justify-center gap-11'>

            <CircularBar percentage={22} />
            <div className=' flex flex-col space-y-2'>
                <p className=' text-[#818C8E] text-sm font-normal'>2024</p>
                <div className=" w-full border border-[#00151C] border-opacity-[12.5%] rounded">
                    <div className="flex flex-col w-full pl-4 pr-20 py-2 border-b" style={{ borderBottomColor: 'rgba(0, 21, 28, 0.125)' }}>
                        <div className=" text-sm text-[#212529] font-bold">0 €</div>
                        <div className=" text-xs text-[#818C8E] font-normal">Income</div>
                    </div>
                    <div className=" flex flex-col w-full pl-4 pr-20 py-2 border-b" style={{ borderBottomColor: 'rgba(0, 21, 28, 0.125)' }}>
                        <div className="text-sm text-[#212529] font-bold">0</div>
                        <div className=" text-xs text-[#818C8E] font-normal">Expenses</div>
                    </div>
                    <div className="flex flex-col w-full pl-4 pr-20 py-2">
                        <div className="text-sm text-[#212529] font-bold">0</div>
                        <div className=" text-xs text-[#818C8E] font-normal">Rentals</div>
                    </div>
                </div>

            </div>
    


            </div>

        </div>



        <div className=' flex flex-col md:flex-row md:justify-between w-full mt-[3%]'>    

            <div className=' flex gap-[3%] flex-grow flex-col md:flex-row items-center'>
                <div className='md:w-64 lg:h-48 py-7 w-1/2 border border-[#07474F] rounded flex items-center justify-center'>
                <div className=' flex flex-col items-center justify-center space-y-4'>
                <ImPlus className=' text-2xl text-[#07474F]'/>
                <p className=' text-sm font-bold text-[#07474F]'>Add a photo</p>
                </div>
                </div>

                <div className=' flex flex-col gap-2 justify-center'>
                    <p className='text[#818C8E] font-normal text-sm text-center md:text-start'>Jeanneau Albatros 750 - 2017</p>

                    
                    <div className='flex gap-2 my-[1%]'>
                        <button className='md:px-4 md:py-2 px-3 py-1 bg-[#CBA557] border border-[#CBA557] rounded text-xs font-bold text-[#FFFFFF]'>Manage your calendar</button>

                        <div className='flex'>
                            <button className='px-4 py-2 border border-[#07474F] rounded-l-[4px]'>Edit your ad</button>
                            <div className='p-1 border border-[#07474F] border-l-0 rounded-r-[4px] flex items-center'>
                            <select name="" id="" className='border-t bg-transparent text-xl'>
                                <option value=""></option>
                            </select>
                            </div>
                        </div>

                    </div>

                    <div className=' flex gap-1 md:whitespace-nowrap'>
                        <p className=' text-xs font-normal text-[#FAB10A]' style={{visibility:'hidden'}}>This announcement is not complete</p>
                        <p className=' text-xs font-bold text-[#07474F]'  style={{visibility:'hidden'}}>• Complete the listing</p>

                    </div>

                    <button className=' self-start text-xs text-[#E77359] font-bold underline' onClick={handleDeleteClick}>Delete</button>

                </div>
                

            </div>

            <div className=' flex justify-center gap-11'>

            <CircularBar percentage={10} />
            <div className=' flex flex-col space-y-2'>
                <p className=' text-[#818C8E] text-sm font-normal'>2024</p>
                <div className=" w-full border border-[#00151C] border-opacity-[12.5%] rounded">
                    <div className="flex flex-col w-full pl-4 pr-20 py-2 border-b" style={{ borderBottomColor: 'rgba(0, 21, 28, 0.125)' }}>
                        <div className=" text-sm text-[#212529] font-bold">0 €</div>
                        <div className=" text-xs text-[#818C8E] font-normal">Income</div>
                    </div>
                    <div className=" flex flex-col w-full pl-4 pr-20 py-2 border-b" style={{ borderBottomColor: 'rgba(0, 21, 28, 0.125)' }}>
                        <div className="text-sm text-[#212529] font-bold">0</div>
                        <div className=" text-xs text-[#818C8E] font-normal">Expenses</div>
                    </div>
                    <div className="flex flex-col w-full pl-4 pr-20 py-2">
                        <div className="text-sm text-[#212529] font-bold">0</div>
                        <div className=" text-xs text-[#818C8E] font-normal">Rentals</div>
                    </div>
                </div>

            </div>
    


            </div>

        </div>



        <div class="flex items-center justify-between md:justify-start space-x-2 mt-[5%]">
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF] disabled:opacity-50" disabled>Previous</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">1</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">2</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">3</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">4</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">5</button>
            <button class="px-2 py-1 md:px-3 md:py-2  text-[#4B465C] text-opacity[8%] rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border focus:border-[#CBA557] focus:bg-[#CBA557] focus:text-[#FFFFFF]">Next</button>
    </div>


            {/* Delete Popup */}
            {showDeletePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-md space-y-3">
                        <div className=' flex gap-2 items-center'>
                        <HiOutlineInformationCircle className=' text-[#FF6347]'/>
                        <h2 className="text-[#4B465C] font-bold text-[15px]">Delete Boat</h2>
                        </div>
                        <p className="text-[#4B465C] text-[13px] font-normal">Are you sure you want to delete this boat?</p>
                        <div className="flex gap-3">
                            <button className=" px-4 py-2 bg-[#FF6347] text-white rounded" onClick={handleConfirmDelete}>Delete</button>
                            <button className="px-4 py-2 bg-[#A8AAAE] text-[#A8AAAE] bg-opacity-15 rounded" onClick={handleCancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}




            
            
            


      
    </div>
  )
}

export default MyBoats
