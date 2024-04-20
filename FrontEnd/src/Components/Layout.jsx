import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ Children, isLocation }) => {
  return (
    <>
      <Navbar />
      {Children}
      {isLocation && 'location goes here'}
      <Footer />
    </>
  );
};

export default Layout;
