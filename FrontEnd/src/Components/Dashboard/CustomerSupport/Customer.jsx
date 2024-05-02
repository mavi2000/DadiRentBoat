import React from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Customer = () => {
  return (
    <div className=" my-8  flex flex-col justify-center items-center gap-3 bg-white w-full rounded-md shadow  py-5 text-[#4b465cb4]">
      <div className="flex flex-row justify-between gap-8 w-[97%]">
        <div className="flex flex-row gap-5 w-[85%]">
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
            <IoOptionsOutline className="w-6 h-6" />
            Filter
          </button>
        </div>
      </div>
      <div className="w-[97%] border rounded-lg">
        <div className=" gap-3  text-[#808080] 500px:text-sm 300px:text-xs  ">
          <div className="flex  w-[100%] rounded-t-md bg-[#CBA5574D]">
            <div className="w-[20%] border-b border[#DBDADE] p-3">
              Requester Name
            </div>
            <div className="w-[15%] border-b border-[#DBDADE]  500px:text-sm 300px:text-xs p-3">
              Phone No.
            </div>

            <div className="w-[25%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Subject{" "}
            </div>
            <div className="w-[25%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Message
            </div>

            <div className="w-[15%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Action
            </div>
          </div>

          <div className="flex w-[100%] font-light">
            <div className="flex flex-col w-[100%] ">
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="text-sm">Jamal Kerrod</div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Unsuccessful Login
                </div>
                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 w-[70%] py-2 border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="w-5 h-5" />
                    <div>Ripley</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="text-sm">Jamal Kerrod</div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Card Payment Error
                </div>
                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 w-[70%] py-2 border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="w-5 h-5" />
                    <div>Ripley</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="text-sm">Jamal Kerrod</div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Other
                </div>
                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 w-[70%] py-2 border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="w-5 h-5" />
                    <div>Ripley</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="text-sm">Jamal Kerrod</div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Unsuccessful Reservation
                </div>
                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 w-[70%] py-2 border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="w-5 h-5" />
                    <div>Ripley</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="flex items-center gap-2 w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center rounded-full bg-[#CBA55726] items-center w-8 h-8 text-[#CBA557]">
                    <div>L</div>
                    <div>A</div>
                  </div>
                  <div>
                    <div className="text-sm">Jamal Kerrod</div>
                    <div className="text-xs text-[#a9a3ba]">
                      abc123@email.com
                    </div>
                  </div>
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  2768732687
                </div>

                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Cancelled Reservation
                </div>
                <div className="w-[25%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Message Display Here
                </div>

                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  <div className="flex justify-center items-center gap-1 w-[70%] py-2 border border-[#CBA557] rounded-md text-[#CBA557] text-sm">
                    <MdOutlineMailOutline className="w-5 h-5" />
                    <div>Ripley</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[97%]">
        <div>Showing 1 to 7 of 100 entries</div>
        <div className="flex flex-row items-center justify-center gap-1 text-sm">
          <button className="bg-[#4B465C14] h-7 w-20 rounded-md ">
            Previous
          </button>
          <div className="flex gap-1">
            <div className="w-6 h-7 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              1
            </div>
            <div className="w-6 h-7 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              2
            </div>
            <div className="w-6 h-7 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              3
            </div>
            <div className="w-6 h-7 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              4
            </div>
            <div className="w-6 h-7 bg-[#4B465C14] flex justify-center items-center rounded-md ">
              5
            </div>
          </div>
          <button className="bg-[#4B465C14] h-7 w-14 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
