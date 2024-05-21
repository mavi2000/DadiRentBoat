import React from "react";
import BoatsNavbar from "./BoatsNavbar";
import { TbCloudDownload } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import Download from "../../../assets/Images/Download-Cloud.png";

const Photo = () => {
  return (
    <>
      <BoatsNavbar />
      <div className=" mx-[1%] my-[1%] bg-white h-[100vh]">
        <div className="mx-[4%]">
          <h1 className=" font-medium text-[#4B465C] text-lg py-5">
            Cover photo
          </h1>
          <p className="text-[#4B465C] font-normal text-sm">
            The cover photo must be a general photo of the boat, bright and of
            good quality.
          </p>
          <div className=" mx-[3%] my-[2%] boatPhoto py-12 rounded-md">
            <div className=" flex flex-col py-8 gap-4 items-center justify-center">
              <p>Select an image</p>
              <img src={Download} alt="" className=" w-16 md:w-24" />
              <button className=" flex gap-[10px] justify-center items-center py-4 px-16 bg-[#CBA557] text-white font-bold text-sm rounded-[10px]">
                <span>
                  <FaPlus />
                </span>
                <p>Choose a photo</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo;
