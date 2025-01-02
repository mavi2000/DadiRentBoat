import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonalisedCard = () => {
  const { t } = useTranslation(); // Use the useTranslation hook here

  return (
    <section className="mx-[3%] md:mx-[6%] my-12">
      <h1 className="text-3xl font-medium ">
      Personalized delivery and collection
      </h1>
      <br />
      <br />
      <p className="text-lg text-[#383838]">
      Based on your indications and needs we can carry out this collection and delivery service of the rented vehicle, even at home with a surcharge to be agreed upon in extra areas not reported by the booking system.
      </p>
      <br />
      <p className="text-lg text-[#383838]">
      For special needs, such as home delivery, an increase will be granted based on the vehicle and rental period.We can deliver, on multi-day bookings throughout the coast where the possibility of approaching the coast is foreseen due to the presence of piers and authorized landing lanes and ports. The increase will be granted based on the vehicle and frequency of rental.
      </p>
    </section>
  );
};

export default PersonalisedCard;
