import React from 'react';
import WhatOurCustomersSayCard from './WhatOurCustomersSayCard';

const WhatOurCustomersSay = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#CBA55714] py-12 mt-12 px-[3%] md:px-[6%]">
      <h1 className="text-[var(--primary-color)] text-base font-semibold ">
        Velas Experience
      </h1>
      <h1 className="text-3xl font-medium text-black my-6">
        What Our Customers Say
      </h1>
      <div className="flex flex-wrap gap-4 justify-center items-stretch">
        <WhatOurCustomersSayCard
          title="Very Reliable"
          description="Very reliable, good service
          and advice, clear processing
          via the customer portal."
          personName="Ulrich Distelkamp"
        />
        <WhatOurCustomersSayCard
          title="It Cannot Be Better"
          description="Great service. We had a great
          holiday! Many thanks to Mario,
          the greatest skipper."
          personName="Frank Reinboth"
        />
        <WhatOurCustomersSayCard
          title="Very Good Support"
          description="Excellent support when
          choosing the charter area and
          organizing a suitable ship."
          personName="Marc Sellac"
        />
        <WhatOurCustomersSayCard
          title="Reliable As Always"
          description="As always, I received excellent
          advice. I have booked boats
          with Velas for years."
          personName="Franz Zimmerman"
        />
      </div>
    </section>
  );
};

export default WhatOurCustomersSay;
