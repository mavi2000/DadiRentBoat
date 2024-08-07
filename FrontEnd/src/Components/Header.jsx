import { GoBell } from "react-icons/go";
import { Link } from "react-router-dom";
import user from "../assets/Images/user.png";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  console.log(sidebarOpen);
  return (
    <header className="sticky top-0 z-10 flex w-full bg-white backdrop-filter backdrop-blur-sm">
      <div className="flex items-center w-full justify-between px-4 py-4 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-10 block lg:hidden"
          >
            <span className="relative block h-5 w-5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out  ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out  ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out  ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out  ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out  ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="flex-shrink-0" to="/">
            <img src={"/images/logo.png"} className="w-8 h-8" alt="Logo" />
          </Link>
        </div>
        <ul className="flex items-center lg:justify-between lg:w-full gap-2">
          {/* Search field */}
          <div className="hidden sm:block">
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="relative py-3 rounded-full bg-[#f0f0f0]">
                <button className="absolute left-5 top-1/2 -translate-y-1/2">
                  <svg
                    className="fill-black"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill=""
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full bg-transparent placeholder:text-black pl-12 pr-4 focus:outline-none text-black xl:w-125"
                />
              </div>
            </form>
          </div>
          <div className="flex gap-2 items-center">
            <LanguageSwitcher className="w-10 h-10" />
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
        </ul>
      </div>
    </header>
  );
};

export default Header;