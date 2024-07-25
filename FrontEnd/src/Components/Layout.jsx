import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import LocationMap from './LocationMap';
// new changes
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
