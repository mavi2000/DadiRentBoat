import { Link } from 'react-router-dom';

const NavbarDropDown = () => {
  return (
    <div className="absolute shadow-md top-12 -left-16 rounded-lg p-4 text-black font-normal text-base text-center whitespace-nowrap flex gap-2 flex-col bg-white mr-8">
      <Link to="/user/booking">
        <button>My Bookings</button>
      </Link>
      <Link to="/user/favourites">
        <button>My Favorites</button>
      </Link>
      <Link to="/user/account-info">
        <button>My Account</button>
      </Link>
      <Link>
        <button>Logout</button>
      </Link>
    </div>
  );
};
export default NavbarDropDown;
