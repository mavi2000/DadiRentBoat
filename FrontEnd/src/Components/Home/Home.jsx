import Footer from '../Footer';
import Navbar from '../Navbar';
import Fleet from './Fleet';
import HeroSection from './HeroSection';
import Rates from './Rates';
import Services from './Services';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Fleet />
      <Rates />
      <Footer />
    </>
  );
};
export default Home;
