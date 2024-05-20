import React from "react";
import BoatsNavbar from "./BoatsNavbar";
import { FiInfo } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Information = () => {
  return (
    <div className="flex flex-col gap-3">
      <BoatsNavbar />
      <form className="bg-white mx-2 py-8 px-12 flex flex-col gap-10 text-[#4B465C]">
        <div className="font-medium">Information</div>
        <div className="flex flex-col gap-2">
          <div>Types of Boat</div>
          <div className="grid 1400px:grid-cols-6 1200px:grid-cols-4 300px:grid-cols-3 gap-4 w-[88%] text-sm">
            <div className="flex gap-3">
              <input type="checkbox" className="" />
              <div className="font-light">Sail Boat</div>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" className="" />
              <div className="font-light">Motorboat</div>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" className="" />
              <div className="font-light">Ruber dinghy</div>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" className="" />
              <div className="font-light">Jet Skis</div>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" className="" />
              <div className="font-light">Luxury yachts</div>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" className="" />
              <div className="font-light">Houseboat/Riverboat</div>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" className="" />
              <div className="font-light">Catamaran/Trimaran</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[80%]">
          <label>Type of boat</label>
          <select className="border py-3 rounded-md px-3 font-light">
            <option>Choose a type</option>
            <option>Sail Boat</option>
            <option>Motorboat</option>
            <option>Ruber dinghy</option>
            <option>Jet Skis</option>
          </select>
        </div>
        <div className="flex flex-col gap-6">
          <div>Type of Rental</div>
          <div className="flex flex-row gap-3 items-start">
            <input type="checkbox" className="mt-1" />
            <div className="text-sm">
              <div>Bear Boat (without skipper)</div>
              <div className="font-light">
                The customer is the person in charge of the ship; The boat is
                rented with the "boat alone" formula (without skipper) Boat
                without a license
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-start">
            <input type="checkbox" className="mt-1" />
            <div className="text-sm">
              <div>With skipper</div>
              <div className="font-light">
                The person in charge of the boat is the skipper/owner/owner. For
                the customer, only relaxation!
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#CBA55714] p-4 flex items-center gap-3 w-[60%] rounded-md">
          <FiInfo className="text-[#CBA557]" />
          <div className="font-medium text-[#4B465C]">
            New: 
            <span className="font-light">
              Skipper rates are now managed in the
            </span>
            <span className="text-[#CBA557]"> Extra Options.</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[80%]">
          <div>Details</div>
          <div className="flex flex-col gap-3">
            <label>Model or name of the boat</label>
            <input
              placeholder="Write boat name"
              className="border p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label>Description Italian</label>
            <textarea rows={4} className="border rounded-md"></textarea>
            <div className="text-xs">
              your description is automatically translated based on the user's
              country of origin. You can still add your own translation, which
              will replace the automatic translation.
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-[#4B465C] font-light">
              Optional: To add a translation of the description
            </div>
            <div className="flex gap-5">
              <select className="border p-3 w-[45%] font-light text-[#4B465C] text-sm rounded-md">
                <option>Select Language</option>
                <option>English</option>
                <option>Italian</option>
                <option>Germen</option>
                <option>Spanish</option>
              </select>
              <button className="flex items-center gap-4 border border-[#CBA557] w-[30%] rounded-lg text-[#CBA557] justify-center font-semibold">
                <IoAddOutline className=" text-lg" />
                ADD
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <label>Description English (US)</label>
              <textarea rows={4} className="border rounded-md"></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between ">
              <div>Capacity</div>
              <MdDelete className="text-xl text-[#CBA557]" />
            </div>
            <div className="flex flex-col gap-2">
              <label>Boarding capacity</label>
              <input
                type="number"
                placeholder="Enter"
                className="border w-[47%] p-3 rounded-md font-light"
              />
            </div>
            <div className="grid grid-cols-2 gap-9">
              <div className="flex flex-col gap-2">
                <label>Brand of the boat</label>
                <select className="border  p-3 rounded-md font-light">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label>Model</label>
                <select className="border p-3 rounded-md font-light">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label>Year</label>
                <select className="border  p-3 rounded-md font-light">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label>Geographic area</label>
                <select className="border  p-3 rounded-md font-light">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between ">
              <div>Motorization</div>
              <MdDelete className="text-xl text-[#CBA557]" />
            </div>
            <div className="grid grid-cols-2 gap-9">
              <div className="flex flex-col gap-2">
                <label>Number of engines</label>
                <select className="border p-3 rounded-md font-light">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label>Engine power (hp)</label>
                <select className="border  p-3 rounded-md font-light">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>Fuel</div>
            <div className="grid grid-cols-4  w-[50%] text-sm">
              <div className="flex gap-3">
                <input type="checkbox" className="" />
                <div className="font-light">Gas</div>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="" />
                <div className="font-light">Electric</div>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="" />
                <div className="font-light">Diesel</div>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="" />
                <div className="font-light">Ethanol</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Fuel capacity (in L)</label>
              <input
                type="number"
                placeholder="Enter"
                className="border w-[47%] p-3 rounded-md font-light"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[80%]">
          <div>Dimension</div>
          <div className="grid grid-cols-2 gap-9">
            <div className="flex flex-col gap-2">
              <label>Draft (in metres)</label>
              <input
                type="number"
                placeholder="Enter"
                className="border  p-3 rounded-md font-light"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Width (in meters)</label>
              <input
                type="number"
                placeholder="Enter"
                className="border  p-3 rounded-md font-light"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[48%]">
            <label>Length (in meters)</label>
            <input
              type="number"
              placeholder="Enter"
              className="border  p-3 rounded-md font-light"
            />
          </div>
        </div>
        <button className="bg-[#CBA557] w-[15%] py-4 rounded-lg text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default Information;
