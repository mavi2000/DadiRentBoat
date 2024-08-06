import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdPeople } from 'react-icons/io';
import WhyChooseUsCard from './WhyChooseUsCard';
import { FaCheck, FaLocationDot } from 'react-icons/fa6';
import { GiLighthouse } from 'react-icons/gi';
import { LuWaves } from 'react-icons/lu';
import { IoLogoWechat } from 'react-icons/io5';
// import { TbBulbFilled } from 'react-icons/tb';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center my-12 mx-[3%] md:mx-[6%]">
      <h1 className="text-[var(--primary-color)] text-base font-semibold ">
        {t('viewOur')}
      </h1>
      <h1 className="text-3xl font-medium text-black mb-6">{t('whyChooseUsTitle')}</h1>
      <div className="flex flex-wrap gap-4 justify-center items-stretch">
        <WhyChooseUsCard
          icon={<IoMdPeople size={60} className="text-[--primary-color]" />}
          title={t('whoWeAreTitle')}
          description={t('whoWeAreDescription')}
        />
        <WhyChooseUsCard
          icon={<FaLocationDot size={60} className="text-[--primary-color]" />}
          title={t('whereWeAreTitle')}
          description={t('whereWeAreDescription')}
        />
        <WhyChooseUsCard
          icon={<GiLighthouse size={60} className="text-[--primary-color]" />}
          title={t('exploreMeloriaTitle')}
          description={t('exploreMeloriaDescription')}
        />
        <WhyChooseUsCard
          icon={<LuWaves size={60} className="text-[--primary-color]" />}
          title={t('ourMeansTitle')}
          description={t('ourMeansDescription')}
        />
        <WhyChooseUsCard
          icon={<FaCheck size={60} className="text-[--primary-color]" />}
          title={t('safetyGuaranteesTitle')}
          description={t('safetyGuaranteesDescription')}
        />
        <WhyChooseUsCard
          icon={<IoLogoWechat size={60} className="text-[--primary-color]" />}
          title={t('reliabilityTitle')}
          description={t('reliabilityDescription')}
        />
        <WhyChooseUsCard
          // icon={<TbBulbFilled size={60} className="text-[--primary-color]" />}
          title={t('superIdeasTitle')}
          description={t('superIdeasDescription')}
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
