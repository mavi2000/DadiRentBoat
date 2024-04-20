import Fleet from './Fleet';
import HeroSection from './HeroSection';
import ISAVideo from './ISAVideo';
import Precautions from './Precautions';
import Rates from './Rates';
import Services from './Services';
import WhatOurCustomersSay from './WhatOurCustomersSay';
import WhyChooseUs from './WhyChooseUs';
import WhereWeAre from './WhereWeAre';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Fleet />
      <Rates />
      <Precautions />
      <WhyChooseUs />
      {/* <ISAVideo /> */}
      <WhatOurCustomersSay />
      <WhereWeAre />
      
    </>
  );
};
export default Home;
