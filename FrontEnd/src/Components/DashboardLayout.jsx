import { IoIosSearch } from "react-icons/io";
import Sidebar from "./AdminSidebar/Sidebar";
import user from "../assets/Images/user.png";
import { GoBell } from "react-icons/go";


const DashboardLayout = ({ Childeren }) => {
  return (
    <div className="flex gap-8 w-full">
      <Sidebar />
      <div className=" 880px:ml-[276px] 300px:ml-4 mr-4 grow">
        <div className="flex items-center gap-3 bg-white w-full rounded-b-md shadow px-4 py-2 text-[#4b465cb4]">
          <label htmlFor="search">
            <IoIosSearch size={30} />
          </label>
          <input
            type="text"
            id="search"
            className="w-full p-2 outline-none border-none"
            placeholder="search"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/fe61/2bcf/1f78fda2ed93e140854aa55070560fed?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G2Wh17z~ddT1SCGZH7Yiw52a05ptcFQd87TOoKkZ38OyHiNSrVz9ZA0TINNcaxYiQ2z4Ix2fuFGNDg~pn3vMvgugOQgUujqT8joYkbzmW8iEOi~NRMLwbN7zZge0J5r9AzO4u-M-mwsa1j4CrijPKADHIZJjjy06AMhkQYquaw47DEiPjQClugGBDcrkGrTh34NArIzKwDj0uOrBKb0eD94nYAdsFLOH9uGOB92eRttxWyTmWHNxY86vRQDMOfpNSIYgH~gZGhSd1oDs~LzS7~mrbo3RGF~6lzHkf0OSrXsHOZ3ILp5fE-5Lc2D7fEHOaMOnxkEW84F19NILjhAzPQ__"
            alt="flag"
            className="size-[30px] rounded-full"
          />
          <div className="relative">
            <GoBell size={30} />
            <p className="flex items-center justify-center rounded-full p-1 size-[18px] absolute -top-1 -right-1 bg-[#EA5455] font-medium text-xs text-white">
              6
            </p>
          </div>
          <img
            src={user}
            alt="user avatar"
            className="size-[38px] rounded-full"
          />
        </div>
        {Childeren}
      </div>
    </div>
  );
};
export default DashboardLayout;
