import React from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Customer = () => {
  return (
    <div className=" my-8  flex flex-col justify-center items-center gap-3 bg-white w-full rounded-md shadow  py-5 text-[#4b465cb4]">
      <div className="flex flex-row justify-between 1200px:gap-8 880px:gap-5 300px:gap-4 w-[97%]">
        <div className=" gap-5 w-[85%]">
          <input
            type="search"
            id="search"
            required
            autoComplete="off"
            name="search"
            placeholder="Search"
            className="border border-[#DBDADE] p-2 rounded-md text-sm w-[100%]"
          />
        </div>
        <div className="flex flex-row gap-5 w-[15%]">
          <button
            type="submit"
            className="flex justify-center items-center gap-2 text-[#9CA3AF] font-normal  rounded-lg w-[100%] border"
          >
            <IoOptionsOutline className="1200px:w-6 1200px:h-6 880px:w-5 880px:h-5 300px:w-4 300px:h-4" />
            <span className=" 1200px:text-lg 880px:text-sm 500px:text-xs">
              Filter
            </span>
          </button>
        </div>
      </div>
      <div className="w-[97%] border rounded-lg">
        <div className=" gap-3  text-[#808080] 500px:text-sm 300px:text-xs  ">
          <div className="flex  w-[100%] rounded-t-md bg-[#CBA5574D]">
            <div className="600px:w-[30%]  300px:w-[35%] border-b border[#DBDADE] p-3">
              Requester Name
            </div>
            <div className="w-[15%] border-b border-[#DBDADE]  500px:text-sm 300px:text-xs p-3">
              Phone No.
            </div>

            <div className="600px:w-[20%]  300px:w-[17%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Subject{" "}
            </div>
            <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Message
            </div>
            <div className="w-[15%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Action
            </div>
          </div>
          <div className="flex w-[100%] font-light">
            <div className="flex flex-col w-[100%] ">
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 600px:w-[30%] 300px:w-[35%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center 1100px:w-8 1100px:h-8 880px:w-6 880px:h-6 w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="1000px:text-sm 300px:text-xs">
                      Jamal Kerrod
                    </div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Unsuccessful Login
                </div>
                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 p-1 1100px:w-[70%] 300px:w-[100%]  border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="1200px:w-5 1200px:h-5 300px:w-3 300px:h-3300px:w-3 300px:h-3 " />
                    <div className="1200px:text-sm 300px:text-xs">Ripley</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 600px:w-[30%] 300px:w-[35%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center 1100px:w-8 1100px:h-8 880px:w-6 880px:h-6 w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="1000px:text-sm 300px:text-xs">
                      Jamal Kerrod
                    </div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Card Payment Error
                </div>
                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 p-1 1100px:w-[70%] 300px:w-[100%]  border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="1200px:w-5 1200px:h-5 300px:w-3 300px:h-3" />
                    <div className="1200px:text-sm 300px:text-xs">Ripley</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 600px:w-[30%] 300px:w-[35%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center 1100px:w-8 1100px:h-8 880px:w-6 880px:h-6 w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="1000px:text-sm 300px:text-xs">
                      Jamal Kerrod
                    </div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Other
                </div>
                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 p-1 1100px:w-[70%] 300px:w-[100%]  border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="1200px:w-5 1200px:h-5 300px:w-3 300px:h-3" />
                    <div className="1200px:text-sm 300px:text-xs">Ripley</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 600px:w-[30%] 300px:w-[35%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center 1100px:w-8 1100px:h-8 880px:w-6 880px:h-6 w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="1000px:text-sm 300px:text-xs">
                      Jamal Kerrod
                    </div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Other
                </div>
                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 p-1 1100px:w-[70%] 300px:w-[100%]  border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="1200px:w-5 1200px:h-5 300px:w-3 300px:h-3" />
                    <div className="1200px:text-sm 300px:text-xs">Ripley</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 600px:w-[30%] 300px:w-[35%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center 1100px:w-8 1100px:h-8 880px:w-6 880px:h-6 w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="1000px:text-sm 300px:text-xs">
                      Jamal Kerrod
                    </div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Other
                </div>
                <div className="600px:w-[20%] 300px:w-[17%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 1200px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 p-1 1100px:w-[70%] 300px:w-[100%]  border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="1200px:w-5 1200px:h-5 300px:w-3 300px:h-3" />
                    <div className="1200px:text-sm 300px:text-xs">Ripley</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[97%]">
        <div className=" 1200px:text-sm 300px:text-xs ">
          Showing 1 to 7 of 100 entries
        </div>
        <div className="flex flex-row items-center justify-center gap-1 text-sm">
          <button className="flex justify-center items-center bg-[#4B465C14] h-9 600px:w-20 300px:w-8 rounded-md ">
            <span className="600px:flex 300px:hidden">Previous</span>
            <IoIosArrowBack className="600px:hidden 300px: flex" />
          </button>
          <div className="flex gap-1">
            <div className="w-6 h9 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              1
            </div>
            <div className="w-6 h-9 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              2
            </div>
            <div className="w-6 h-9 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              3
            </div>
            <div className="w-6 h-9 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              4
            </div>
            <div className="w-6 h-9 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              5
            </div>
          </div>
          <button className="flex justify-center items-center bg-[#4B465C14] h-9 600px:w-10 300px:w-8  rounded-md">
            <span className="600px:flex 300px:hidden">Next</span>
            <IoIosArrowForward className="600px:hidden 300px: flex" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
