import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import LocationMap from './LocationMap';

const Layout = ({ Children, isLocation }) => {
  return (
    <>
      <Navbar />
      {Children}
      {isLocation && <LocationMap />}
      <Footer />
    </>
  );
};

export default Layout;
