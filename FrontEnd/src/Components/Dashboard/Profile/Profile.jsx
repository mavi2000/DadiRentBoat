import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Profile = () => {
  return (
    <div className=" w-[100%]   my-3 bg-[#FFFFFF] py-5 flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col w-[95%] gap-20">
        <form className="flex flex-wrap flex-col gap-20">
          <div className="flex flex-col gap-2">
            <div className="text-sm font-normal text-[#4b465c]">
              Personal Information
            </div>

            <div className="flex  w-[100%]">
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light">First Name</div>
                <div className="relative w-[80%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="Thomas"
                    className="border border-[#DBDADE] p-2 rounded-md"
                  />
                  <div className=" absolute inset-y-0 right-0 flex items-center px-2"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light">Last Name</div>
                <div className="relative w-[80%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="Charles"
                    className="border border-[#DBDADE] p-2 rounded-md"
                  />
                  <div className=" absolute inset-y-0 right-0 flex items-center px-2"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light">Email</div>
                <div className="relative w-[80%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="thomas@gmail.com"
                    className="border border-[#DBDADE] p-2 rounded-md"
                  />
                  <div className=" absolute inset-y-0 right-0 flex items-center px-2"></div>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light">Phone No.</div>
                <div className="relative w-[80%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="262752813"
                    className="border border-[#DBDADE] p-2 rounded-md"
                  />
                  <div className=" absolute inset-y-0 right-0 flex items-center px-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-normal text-[#4b465c]">Password</div>

            <div className="flex  w-[100%]">
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light">Old password</div>
                <div className="relative w-[80%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="Enter old password"
                    className="border border-[#DBDADE] p-2 rounded-md"
                  />
                  <div className=" absolute inset-y-0 right-0 flex items-center px-2"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light">New Password</div>
                <div className="relative w-[80%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="Enter new password"
                    className="border border-[#DBDADE] p-2 rounded-md"
                  />
                  <div className=" absolute inset-y-0 right-0 flex items-center px-2"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <div className="text-[#4B465C] font-light">
                  Re-Enter Password
                </div>
                <div className="relative w-[80%]">
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="text"
                    placeholder="Confirm password"
                    className="border border-[#DBDADE] p-2 rounded-md text-xs"
                  />
                  <div className=" absolute inset-y-0 right-0 flex items-center px-2"></div>
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
