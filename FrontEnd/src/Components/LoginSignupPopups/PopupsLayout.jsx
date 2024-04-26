import logo from '../../assets/Images/logo.png';
import { CiCircleRemove } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebookF } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
const PopupsLayout = ({ isSocials = true, content, isBack }) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#CBA55733] w-full h-[100svh] flex items-center justify-center ${
        show ? 'block' : 'hidden'
      }`}
    >
      <div className="relative bg-white p-8 rounded-md shadow-lg max-h-[95svh] overflow-auto text-[#4b465ccb]">
        <div className="flex sticky top-0 ">
          {isBack && (
            <IoArrowBack
              size={25}
              className=" -ml-4 mr-auto top-0 cursor-pointer"
              onClick={() => {
                setShow(false);
                navigate(-1);
              }}
            />
          )}

          <CiCircleRemove
            size={40}
            className="sticky ml-auto -mr-4 cursor-pointer"
            onClick={() => {
              setShow(false);
              navigate(-1);
            }}
          />
        </div>
        <div className="flex gap-2 items-center justify-center mb-8">
          <img src={logo} alt="logo" className="w-20 h-20 " />
          <h1 className=" text-2xl font-bold">DaDi Rent</h1>
        </div>
        {content}
        {isSocials && (
          <div className="mt-4">
            <div className="text-[#DBDADE] flex gap-3 items-center">
              <div className="w-full h-[1.5px] bg-[#DBDADE] "></div>
              <p>or</p>
              <div className="w-full h-[1.5px] bg-[#DBDADE] "></div>
            </div>
            <div className="flex gap-3 mt-8 items-center justify-center">
              <div className="bg-white w-[48px] h-[48px] shadow-md rounded-md flex items-center justify-center ">
                <FaFacebookF
                  size={25}
                  color="#3B5999"
                  className="cursor-pointer"
                />
              </div>
              <div className="bg-white w-[48px] h-[48px] shadow-md rounded-md flex items-center justify-center ">
                <FaApple size={30} color="#030104" className="cursor-pointer" />
              </div>
              <div className="bg-white w-[48px] h-[48px] shadow-md rounded-md flex items-center justify-center ">
                <FcGoogle size={30} className="cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PopupsLayout;
