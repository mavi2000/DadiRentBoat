import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavbarLinks = ({ user }) => {
  const { t } = useTranslation();
  
  const homePage =
    window.location.pathname.includes("/services") ||
    window.location.pathname.includes("/Contact-Information") ||
    window.location.pathname.includes("/Our-Fleet") ||
    window.location.pathname.includes("/Rates") ||
    window.location.pathname.includes("/where-we-are") ||
    window.location.pathname.includes("/Contact-Information") ||
    window.location.pathname.includes("/faq");

  return (
    <>
      <Link to="/services">
        <p
          className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
            window.location.pathname.includes("/services")
              ? "text-[--primary-color]"
              : ""
          }`}
        >
          {t('navbarServices')}
        </p>
      </Link>
      <Link to="/Our-Fleet">
        <p
          className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
            window.location.pathname.includes("/Our-Fleet")
              ? "text-[--primary-color]"
              : ""
          }`}
        >
          {t('navbarFleet')}
        </p>
      </Link>
      <Link to="/Rates">
        <p
          className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
            window.location.pathname.includes("/Rates")
              ? "text-[--primary-color]"
              : ""
          }`}
        >
          {t('navbarRates')}
        </p>
      </Link>
      {!homePage ? (
        <>
          <Link to="/where-we-are">
            <p
              className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
                window.location.pathname.includes("/where-we-are")
                  ? "text-[--primary-color]"
                  : ""
              }`}
            >
              {t('navbarWhereWeAre')}
            </p>
          </Link>
          <Link to="/">
            {/* <p
              className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700`}
            >
              Dadi Boats
            </p> */}
          </Link>
        </>
      ) : (
        <Link to="/">
          {/* <p
            className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700`}
          >
            About Us
          </p> */}
        </Link>
      )}

      <Link to="/Contact-Information">
        <p
          className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
            window.location.pathname.includes("/Contact-Information")
              ? "text-[--primary-color]"
              : ""
          }`}
        >
          {t('navbarContactUs')}
        </p>
      </Link>
      {user && (
        <div className=" md:hidden flex flex-col gap-3">
          <Link to="/user/booking">
            <p
              className={` hover:text-[var(--primary-color)] hover:underline hover:scale-110 transition-all duration-700 ${
                window.location.pathname.includes("/user/booking")
                  ? "text-[var(--primary-color)]"
                  : "text-black"
              }`}
            >
              {t('navbarMyBooking')}
            </p>
          </Link>
          <Link to="/user/favourites">
            <p
              className={` hover:text-[var(--primary-color)] hover:underline hover:scale-110 transition-all duration-700 ${
                window.location.pathname.includes("/user/favourites")
                  ? "text-[var(--primary-color)]"
                  : "text-black"
              }`}
            >
              {t('navbarMyFavorite')}
            </p>
          </Link>
          <Link to="/user/account-info">
            <p
              className={` hover:text-[var(--primary-color)] hover:underline hover:scale-110 transition-all duration-700 ${
                window.location.pathname.includes("/user/account-info")
                  ? "text-[var(--primary-color)]"
                  : "text-black"
              }`}
            >
              {t('navbarMyAccount')}
            </p>
          </Link>
        </div>
      )}
    </>
  );
};
export default NavbarLinks;
