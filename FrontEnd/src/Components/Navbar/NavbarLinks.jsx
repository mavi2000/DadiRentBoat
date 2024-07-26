import { Link } from "react-router-dom";

const NavbarLinks = ({ user }) => {
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
          Services
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
          Fleet
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
          Rates
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
              Where we are
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
          Contact Us
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
              My Booking
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
              My Favorite
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
              My Account
            </p>
          </Link>
        </div>
      )}
    </>
  );
};
export default NavbarLinks;
