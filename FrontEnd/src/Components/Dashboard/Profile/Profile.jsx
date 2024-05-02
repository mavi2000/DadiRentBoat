import React from "react";
import { IoCameraOutline } from "react-icons/io5";

import dashProfile from "../../../assets/Images/dashprofile.png";
const Profile = () => {
  return (
    <div className=" w-[100%]   my-3 bg-[#FFFFFF] py-5 flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col w-[95%] gap-20">
        <form className="flex  flex-col gap-20">
          <div className="flex justify-center items-end ">
            <img
              src={dashProfile}
              className="w-40 h-40 border rounded-full bg-[#cba4576d]"
            ></img>
            <div className="absolute ml-28 border border-white bg-[#CBA557] p-1.5 rounded-full">
              <IoCameraOutline className=" text-white h-8 w-8" />
            </div>
          </div>
          <div className="flex flex-col w-[100%] gap-5">
            <div className="text-lg font-normal text-[#4b465c]">
              Personal Information
            </div>

            <div className="grid grid-cols-2 gap-7 w-[100%]">
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light text-sm">
                  First Name
                </div>
                <div className=" 500px:w-[80%] 300px:w-[95%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="Thomas"
                    className="border border-[#DBDADE] p-3 rounded-md w-[100%] text-xs "
                  />{" "}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light text-sm">
                  Last Name
                </div>
                <div className=" 500px:w-[80%] 300px:w-[95%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="Charles"
                    className="border border-[#DBDADE] p-3 rounded-md w-[100%] text-xs"
                  />{" "}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light text-sm">Email</div>
                <div className=" 500px:w-[80%] 300px:w-[95%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="thomas@gmail.com"
                    className="border border-[#DBDADE] p-3 rounded-md w-[100%] text-xs"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light text-sm">
                  Phone No.
                </div>
                <div className=" 500px:w-[80%] 300px:w-[95%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="262752813"
                    className="border border-[#DBDADE] p-3 rounded-md w-[100%] text-xs"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="text-lg font-normal text-[#4b465c] ">Password</div>

            <div className="grid grid-cols-1 grid-rows-2 gap-5  w-[100%]">
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light text-sm">
                  Old password
                </div>
                <div className=" w-[90%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="Enter old password"
                    className="border border-[#DBDADE] p-3 rounded-md w-[100%] text-xs"
                  />{" "}
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-1">
                <div className="flex flex-col gap-2 w-90%]">
                  <div className="text-[#4B465C] font-light text-sm">
                    New Password
                  </div>
                  <div className=" 500px:w-[80%] 300px:w-[95%]">
                    <input
                      type="text"
                      required
                      autoComplete="off"
                      name="text"
                      placeholder="Enter new password"
                      className="border border-[#DBDADE] p-3 rounded-md w-[100%] text-xs"
                    />{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-[100%]">
                  <div className="text-[#4B465C] font-light text-sm">
                    Re-Enter Password
                  </div>
                  <div className="500px:w-[80%] 300px:w-[95%]">
                    <input
                      type="text"
                      required
                      autoComplete="off"
                      name="text"
                      placeholder="Confirm password"
                      className="border border-[#DBDADE] p-3 rounded-md w-[100%] text-xs "
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <button className=" py-2 px-8 bg-transparent border border-[#cba557] text-sm text-[#cba557] rounded-lg">
              Cancel
            </button>
            <button className=" py-2 px-8 bg-[#cba557] text-sm text-white rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
