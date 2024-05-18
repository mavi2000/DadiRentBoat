import React, { useState } from 'react';
import BoatsNavbar from './BoatsNavbar';
import { FaPlus, FaTimes } from "react-icons/fa";

const InfoAccess = () => {
    const [inputCount, setInputCount] = useState(1);

    const handleAddNewInfoAccess = () => {
        setInputCount(inputCount + 1);
    };

    const handleRemoveInfoAccess = (index) => {
        setInputCount(inputCount - 1);
    };

    // Function to render additional input fields based on inputCount
    const renderAdditionalInputs = () => {
        const inputs = [];
        for (let i = 0; i < inputCount; i++) {
            inputs.push(
                <div key={i} className="relative">
                    <button className="delete-btn" onClick={() => handleRemoveInfoAccess(i)}>
                        <FaTimes style={{ color: 'red' }} />
                    </button>
                    <h1 className='font-medium text-[#4B465C] text-lg py-5'>Information & access</h1>
                    <textarea name="" id={`accessInfo${i}`} cols="20" rows="5" placeholder='You will find my boat at the port of' className='border-[1.14px] border-[#D2D2D2] w-[90%] py-4 px-3 placeholder:text-[#C2C2C2] resize-none rounded-md'>
                    </textarea>
                    <h1 className='font-medium text-[#4B465C] text-lg py-5'>Documents sent automatically</h1>
                    <div className='w-[90%]'>
                        <label htmlFor={`docName${i}`} className='text-[#4B465C] font-normal'>Document name</label>
                        <select
                            name={`docName${i}`}
                            id={`docName${i}`}
                            className="border-[1.35px] px-3 py-2 border-[#DBDADE] w-full text-[#C2C2C2] outline-none rounded-lg bg-[#ffff] mt-[1%]"
                        >
                            <option value="Select Country">Ex: Access map</option>
                        </select>
                    </div>
                    <div className='w-[90%] flex justify-between my-[2%] flex-wrap space-y-2 md:space-y-0'>
                        <div className='flex flex-col gap-8 w-1/3'>
                            <label htmlFor={`uploadDoc${i}`} className='text-[#4B465C] font-normal'>Upload a document</label>
                            <div className='flex items-center gap-3'>
                                <input type="file" id={`uploadDoc${i}`} className='hidden' />
                                <label htmlFor={`uploadDoc${i}`} className='py-4 px-16 flex gap-3 text-[#CBA557] font-bold text-sm justify-center items-center border border-[#CBA557] rounded-[10px] cursor-pointer'>
                                    <span><FaPlus/></span>
                                    <p>Browse</p>
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 w-1/3 self-end items-center'>
                            <p className='font-semibold'>- <span> OR </span> - </p>
                        </div>
                        <div className='flex flex-col gap-8 w-1/3'>
                            <label htmlFor={`docLink${i}`} className='text-[#4B465C] font-normal'>Link to a document</label>
                            <input type="text" id={`docLink${i}`} placeholder='www.abc.com' className='border-[1.35px] border-[#DBDADE] rounded-md px-4 py-4'/>
                        </div>
                    </div>
                </div>
            );
        }
        return inputs;
    };

    return (
        <>
            <BoatsNavbar />
            <div className='mx-[1%] my-[1%] bg-white py-3'>
                <div className='mx-[4%]'>
                    {/* Your existing code */}
                    {renderAdditionalInputs()}
                    {/* Your existing code */}
                    <p className='text-[#4B465C] font-normal text-xs mb-[2%]'>Size limit: 8MB – Accepted formats: JPEG, JPG, PNG or PDF</p>

                    <div className='py-2'>
                        <hr className='text-[#B7B7B7] mb-[2%]' />
                        <button className='py-4 px-16 flex gap-3 text-[#CBA557] font-bold text-sm justify-center items-center border border-[#CBA557] rounded-[10px]' onClick={handleAddNewInfoAccess}>
                            <span><FaPlus /></span>
                            <p>Add a new Information & Access</p>
                        </button>
                        <hr className='text-[#B7B7B7] mt-[2%]' />
                    </div>

                    <div className='mt-[3%]'>
                        <button className='py-[10px] px-12 flex justify-center items-center bg-[#CBA557] text-white rounded-[10px]'>Save</button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default InfoAccess;
