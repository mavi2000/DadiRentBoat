import { IoIosSearch } from "react-icons/io";
import Sidebar from "./AdminSidebar/Sidebar";
const DashboardLayout = ({ Childeren }) => {
  return (
    <div className="flex gap-8">
      <Sidebar />
      <div className="880px:ml-[276px] mr-4 grow">
        <div className="flex items-center gap-3 bg-white w-full rounded-b-md shadow px-4 py-2 text-[#4b465cb4]">
          <label htmlFor="search">
            <IoIosSearch size={30} />
          </label>
          <input
            type="text"
            id="search"
            className="w-full outline-none border-none"
            placeholder="search"
          />
          <div></div>
        </div>
        {Childeren}
      </div>
    </div>
  );
};
export default DashboardLayout;
