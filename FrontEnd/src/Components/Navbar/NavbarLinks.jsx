import { Link, useLocation } from "react-router-dom";

const NavbarLinks = ({ user }) => {
  const location = useLocation(); // Use this hook to get current location path
  
  const homePage =
    location.pathname.includes("/services") ||
    location.pathname.includes("/Contact-Information") ||
    location.pathname.includes("/Our-Fleet") ||
    location.pathname.includes("/Rates") ||
    location.pathname.includes("/where-we-are") ||
    location.pathname.includes("/Contact-Information") ||
    location.pathname.includes("/faq");

  return (
    <>
      <Link to="/services">
        <p
          className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
            location.pathname.includes("/services") ? "text-[--primary-color]" : ""
          }`}
        >
          Services
        </p>
      </Link>
      <Link to="/Our-Fleet">
        <p
          className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
            location.pathname.includes("/Our-Fleet") ? "text-[--primary-color]" : ""
          }`}
        >
          Our Fleet
        </p>
      </Link>
      <Link to="/Rates">
        <p
          className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
            location.pathname.includes("/Rates") ? "text-[--primary-color]" : ""
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
                location.pathname.includes("/where-we-are") ? "text-[--primary-color]" : ""
              }`}
            >
              Where We Are
            </p>
          </Link>
          <Link to="/Our-Fleet">
        <p
          className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
            location.pathname.includes("/Our-Fleet") ? "text-[--primary-color]" : ""
          }`}
        >
         Dadi Boats
        </p>
      </Link>
        </>
      ) : (
        <Link to="/">
          {/* <p> Uncomment if needed */}
          {/* About Us */}
        </Link>
      )}

      <Link to="/Contact-Information">
        <p
          className={`hover:text-[--primary-color] hover:underline hover:scale-110 transition-all duration-700 ${
            location.pathname.includes("/Contact-Information") ? "text-[--primary-color]" : ""
          }`}
        >
          Contact Us
        </p>
      </Link>
      {user && (
        <div className=" md:hidden flex flex-col gap-3">
          <Link to="/user/booking">
            <p
              className={`hover:text-[var(--primary-color)] hover:underline hover:scale-110 transition-all duration-700 ${
                location.pathname.includes("/user/booking") ? "text-[var(--primary-color)]" : "text-black"
              }`}
            >
              My Booking
            </p>
          </Link>
          <Link to="/user/favourites">
            <p
              className={`hover:text-[var(--primary-color)] hover:underline hover:scale-110 transition-all duration-700 ${
                location.pathname.includes("/user/favourites") ? "text-[var(--primary-color)]" : "text-black"
              }`}
            >
              My Favorite
            </p>
          </Link>
          <Link to="/user/account-info">
            <p
              className={`hover:text-[var(--primary-color)] hover:underline hover:scale-110 transition-all duration-700 ${
                location.pathname.includes("/user/account-info") ? "text-[var(--primary-color)]" : "text-black"
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
