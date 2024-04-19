import Footer from '../Footer';
import Navbar from '../Navbar';
import Fleet from './Fleet';
import HeroSection from './HeroSection';
import Precautions from './Precautions';
import Rates from './Rates';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Fleet />
      <Rates />
      <Precautions />
      <WhyChooseUs />
      <Footer />
    </>
  );
};
export default Home;
