import ServicesCard from './ServicesCard';
import ExtraServicesIcon from '../../assets/Images/Extra-Services-white-icon.png';
import ExcursionServicesIcon from '../../assets/Images/Excursion-Services-white-icon.png';
import RentalServicesIcon from '../../assets/Images/Rental-Services-white-icon.png';
import RentalServicesGoldIcon from '../../assets/Images/Rental-Services-gold-icon.png';
import ExtraServicesGoldIcon from '../../assets/Images/Extra-Services-gold-icon.png';
import ExcursionServicesGoldIcon from '../../assets/Images/Excursion-Services-gold-icon.png';

const Services = () => {
  return (
    <section className="Services-container pt-16 pb4 px-4 flex flex-col gap-2 items-center">
      <h1 className="text-[var(--primary-color)] text-base font-semibold">
        View our
      </h1>
      <h1 className="text-3xl font-medium text-white">Services</h1>
      <p className="text-white text-center w-[55%] text-base font-normal mb-4">
        Explore our dinghy and boat rental service in Livorno and discover
        unparalleled quality at competitive prices. Seeing is believing, trying
        to confirm
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-between w-full md:w-[80%]">
        <ServicesCard
          frontIcon={RentalServicesGoldIcon}
          title="Rental"
          backIcon={RentalServicesIcon}
          description="If you are looking for an adventure at sea, renting a dinghy or a boat in Livorno is the one for you."
        />
        <ServicesCard
          frontIcon={ExtraServicesGoldIcon}
          title="Extra Services"
          backIcon={ExtraServicesIcon}
          description="Lunch, dinner and aperitifs on board a dinghy or a boat! Do you want to enjoy the beauty of our coastline without giving up the pleasures of the palate? We have the right solution for you! To experience and savor the sea in all its forms with the extra rental services in Livorno."
        />
        <ServicesCard
          frontIcon={ExcursionServicesGoldIcon}
          title="Excursions"
          backIcon={ExcursionServicesIcon}
          description="By renting one of our vehicles, it is possible to make excursions on board our boats or dinghies to the most characteristic places on our coast of Livorno."
        />
      </div>

      <br />
    </section>
  );
};
export default Services;
