import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdPeople } from 'react-icons/io';
import { FaCheck, FaLocationDot } from 'react-icons/fa6';
import { GiLighthouse } from 'react-icons/gi';
import { LuWaves } from 'react-icons/lu';
import { IoLogoWechat } from 'react-icons/io5';
import WhyChooseUsCard from './WhyChooseUsCard';
import vector3 from '../../assets/Images/Vector (3).png';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center my-12 mx-[3%] md:mx-[6%]">
      {/* Section title */}
      <h1 className="text-[var(--primary-color)] text-base font-semibold">
        {t('View Our')}
      </h1>
      <h1 className="text-3xl font-medium text-black mb-6">
        {t('Why Choose Us')}
      </h1>

      {/* Card container */}
      <div className="flex flex-wrap gap-4 justify-center items-stretch">
        {/* Individual cards */}
        <WhyChooseUsCard
          icon={<IoMdPeople size={60} className="text-[--primary-color]" />}
          title={t('Who We Are')}
          description={t(
            'DaDi Rent is the result of the commitment of two young people, Filippo and Gaetano, animated by their passion for Livorno and its enchanting coast. Our goal is to make everyone discover this beauty! Stay updated by following us on our social networks for the latest news and special offers.'
          )}
        />
        <WhyChooseUsCard
          icon={<FaLocationDot size={60} className="text-[--primary-color]" />}
          title={t('Where We Are')}
          description={t(
            "You can find us at Bagni Pancaldi Acquaviva, in Viale Italia 62, in the heart of Livorno's seafront. It borders the Terrazza Mascagni, offering breathtaking scenery of the Tuscan islands and Corsica. In front of us, the Meloria Park extends, one of the closest points, further enriching the beauty of the surrounding panorama. An elegant and regenerating place with impeccable services and an enchanting view of the sea."
          )}
        />
        <WhyChooseUsCard
          icon={<GiLighthouse size={60} className="text-[--primary-color]" />}
          title={t('Explore the Meloria Shoals')}
          description={t(
            "We confirm that our vehicles are authorized for activity in the Secche della Meloria, a vast outcropping cliff located 3 miles from the coast of Livorno. This area, covering approximately 40 square kilometers, offers a variety of unique underwater landscapes. Exploring the Secche della Meloria is an exciting and responsible experience, respecting the marine environment."
          )}
        />
        <WhyChooseUsCard
          icon={<LuWaves size={60} className="text-[--primary-color]" />}
          title={t('Our Means')}
          description={t(
            "Rental boats also have all the equipment required by law. They do not require any license, you just need to be 18 years old. Our pleasure craft are authorized to navigate within 3 miles of the coast of Livorno (almost 5 km)."
          )}
        />
        <WhyChooseUsCard
          icon={<FaCheck size={60} className="text-[--primary-color]" />}
          title={t('Safety Guarantees')}
          description={t(
            'We love certainty. DaDi Rent has a comprehensive insurance policy to protect the renter and ensure peace of mind for all people on board.'
          )}
        />
        <WhyChooseUsCard
          icon={<IoLogoWechat size={60} className="text-[--primary-color]" />}
          title={t('Reliability')}
          description={t(
            'Our team is always at your service 24 hours a day. Through all the communication tools available to the customer..'
          )}
        />
        <WhyChooseUsCard
          icon={
            <img
              src={vector3}
              alt="Super Ideas Icon"
              className="w-[60px] h-[60px]"
            />
          }
          title={t('Super Ideas')}
          description={t(
            "We don't limit ourselves to rental, we always want to innovate and provide new surprises to our customers. Satisfaction guaranteed."
          )}
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
