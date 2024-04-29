import { Link } from 'react-router-dom';

const SecondNavbar = () => {
  return (
    <>
      <Link to="/user/booking">
        <p
          className={` hover:text-[var(--primary-color)] hover:underline hover:scale-110 transition-all duration-700 ${
            window.location.pathname.includes('/user/booking')
              ? 'text-[var(--primary-color)]'
              : 'text-black'
          }`}
        >
          My Booking
        </p>
      </Link>
      <Link to="/user/favourites">
        <p
          className={` hover:text-[var(--primary-color)] hover:underline hover:scale-110 transition-all duration-700 ${
            window.location.pathname.includes('/user/favourites')
              ? 'text-[var(--primary-color)]'
              : 'text-black'
          }`}
        >
          My Favorite
        </p>
      </Link>
      <Link to="/user/account-info">
        <p
          className={` hover:text-[var(--primary-color)] hover:underline hover:scale-110 transition-all duration-700 ${
            window.location.pathname.includes('/user/account-info')
              ? 'text-[var(--primary-color)]'
              : 'text-black'
          }`}
        >
          My Account
        </p>
      </Link>
    </>
  );
};
export default SecondNavbar;
