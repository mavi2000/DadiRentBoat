import { FaAngleDown, FaRegBell } from "react-icons/fa";
import logo from "../../assets/Images/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import userImage from "../../assets/Images/user.png";
import SecondNavbar from "./SecondNavbar";
import NavbarLinks from "./NavbarLinks";
import TopNavbar from "./TopNavbar";
import NavbarDropDown from "./NavbarDropDown";
import { AuthContext } from "../../../Context/AuthContext";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const homePage =
    window.location.pathname.includes("/services") ||
    window.location.pathname.includes("/Contact-Information") ||
    window.location.pathname.includes("/Our-Fleet") ||
    window.location.pathname.includes("/Rates") ||
    window.location.pathname.includes("/where-we-are") ||
    window.location.pathname.includes("/Contact-Information") ||
    window.location.pathname.includes("/faq") ||
    window.location.pathname.includes("/user/favourites") ||
    window.location.pathname.includes("/user/booking") ||
    window.location.pathname.includes("/user/account-info");

  const secondNavbar =
    window.location.pathname.includes("/user/favourites") ||
    window.location.pathname.includes("/user/booking") ||
    window.location.pathname.includes("/user/account-info");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const closeSidebarOnClickOutside = (event) => {
      if (
        showSidebar &&
        event.target.closest(".small-devices") === null &&
        event.target.closest(".hamburger-main-menu") === null
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("click", closeSidebarOnClickOutside);
    return () => {
      document.removeEventListener("click", closeSidebarOnClickOutside);
    };
  }, [showSidebar]);

  return (
    <nav className="w-full absolute top-0 z-50">
      <TopNavbar />

      <div
        className={`small-devices ${
          showSidebar ? "show bg-white shadow-md" : ""
        }  text-whit flex gap-8 justify-between items-center px-[3%] md:px-[6%]  ${
          isScrolled
            ? "bg-white shadow-md fixed right-0 left-0 top-0 transition-all duration-700"
            : "fixed top-16 right-0 left-0 bg-transparent transition-all duration-700"
        }`}
      >
        <img src={logo} alt="logo" className="w-16 h-16 hidden md:block" />
        <div
          className={`w-full flex flex-col md:flex-row gap-5 md:items-center text-xl font-semibold ${
            isScrolled ? "text-black" : "text-black 880px:text-white"
          }`}
        >
          <Link to="/" className="mr-0 ml-auto">
            <p
              className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
                homePage ? "" : "text-[--primary-color]"
              }`}
            >
              {t('home')}
            </p>
          </Link>
          {secondNavbar ? <SecondNavbar /> : <NavbarLinks user={user} />}

          <div className="flex items-center gap-2 justify-end ml-auto mr-0">
            <LanguageSwitcher className="w-10 h-10" />
            {user ? (
              <>
                <Link to="#">
                  <FaRegBell size={30} className="text-[--primary-color]" />
                </Link>
                <img
                  src={(user && user.image) || userImage}
                  alt="user avatar"
                  className="rounded-full size-[34px]"
                />
                <div className="relative hidden sm:block">
                  <FaAngleDown
                    size={24}
                    className={`cursor-pointer text-[--primary-color] duration-100 ease-in-out ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                    onClick={() => {
                      setShowDropdown(!showDropdown);
                    }}
                  />
                  {showDropdown && <NavbarDropDown />}
                </div>
                <button
                  onClick={logout}
                  className="text-[var(--primary-color)] rounded-lg border-[1px] border-[var(--primary-color)] px-4 py-2"
                >
                  {t('logout')}
                </button>
              </>
            ) : (
              <>
                <Link to="/Login">
                  <button className="text-[var(--primary-color)] rounded-lg border-[1px] border-[var(--primary-color)] px-4 py-2">
                    {t('login')}
                  </button>
                </Link>
                <Link to="/Our-Fleet">
                  <button className="text-white bg-[var(--primary-color)] rounded-lg border-[1px] border-[var(--primary-color)]  px-4 py-2">
                    {t('bookNow')}
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {/* mobile navbar  */}
      <div
        className={`hamburger-main-menu  px-[3%] md:px-[6%] ${
          isScrolled
            ? "bg-white  fixed right-0 left-0 top-0 transition-all duration-700"
            : "fixed top-0 md:top-16 right-0 left-0 bg-transparent text-black transition-all duration-700"
        }`}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-16 h-16 " />
        </Link>
        <div className="flex gap-4">
          <div
            className="block z-30"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {!showSidebar ? "☰" : "X"}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
