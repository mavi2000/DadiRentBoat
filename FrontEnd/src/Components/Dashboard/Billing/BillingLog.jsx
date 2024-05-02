import React from "react";

const BillingLog = () => {
  return (
    <div className=" my-8  flex flex-col justify-center items-center gap-3 bg-white w-full rounded-md shadow  py-5 text-[#4b465cb4]">
      <div className="flex flex-row justify-between w-[97%]">
        <select class=" w-[10%] bg-transparent border border-[#DBDADE] p-2 rounded-md text-gray-400  text-sm font-light">
          <option>10</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            required
            autoComplete="off"
            name="text"
            placeholder="Search Invoice"
            className="border border-[#DBDADE] p-2 rounded-md text-sm"
          />
          <select class=" w-[100%] border border-[#DBDADE] p-2 rounded-md bg-transparent  text-gray-400 text-sm font-light">
            <option>Select Status</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>
      <div className="w-[100%] border">
        <div className=" gap-3  text-[#4B465C]">
          <div className="flex  w-[100%] ">
            <div className="w-[10%] border-b border-[#DBDADE]  500px:text-sm 300px:text-xs p-3">
              ID
            </div>
            <div className="w-[20%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Client
            </div>
            <div className="w-[20%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Boat
            </div>
            <div className="w-[10%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Date
            </div>
            <div className="w-[15%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Amount Paid
            </div>
            <div className="w-[15%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Total Paid
            </div>
            <div className="w-[10%] border-b border[#DBDADE] 500px:text-sm 300px:text-xs p-3">
              Balance
            </div>
          </div>

          <div className="flex w-[100%] ">
            <div className="flex flex-col w-[100%] ">
              <div className="flex flex-row w-[100%]">
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  #5089
                </div>
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
                <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Boat Name
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  09 May 2022
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077{" "}
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  paid
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  #5089
                </div>
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
                <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Boat Name{" "}
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  09 May 2022{" "}
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077{" "}
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077{" "}
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  paid
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  #5089
                </div>
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
                <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Boat Name{" "}
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  09 May 2022{" "}
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  -$259{" "}
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  #5089
                </div>
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
                <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Boat Name{" "}
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  09 May 2022{" "}
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077{" "}
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077{" "}
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  -$259{" "}
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  #5089
                </div>
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
                <div className="w-[20%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  Boat Name{" "}
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  09 May 2022{" "}
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077{" "}
                </div>
                <div className="w-[15%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  $3077{" "}
                </div>
                <div className="w-[10%] border-b border[#DBDADE] 900px:text-sm 300px:text-xs p-3">
                  -$259
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
export default BillingLog;
